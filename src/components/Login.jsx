import { useState } from "react";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signOut } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../firebase";
import Toast from './Toast';
import useToast from '../hooks/useToast';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [unverifiedUserEmail, setUnverifiedUserEmail] = useState('');
  const { toast, showSuccess, showError, showWarning, showInfo, hideToast } = useToast();

  const handleResendVerification = async () => {
    if (!unverifiedUserEmail) {
      showError('Nie można wysłać emaila weryfikacyjnego. Spróbuj zalogować się ponownie.');
      return;
    }
    
    try {
      // Need to sign in temporarily to send verification email
      const tempResult = await signInWithEmailAndPassword(auth, unverifiedUserEmail, password);
      await sendEmailVerification(tempResult.user);
      await signOut(auth); // Sign out immediately after sending
      
      showSuccess('📧 Email weryfikacyjny został wysłany ponownie!', 4000);
    } catch (error) {
      console.error("Błąd wysyłania emaila weryfikacyjnego:", error);
      if (error.code === 'auth/too-many-requests') {
        showWarning('Zbyt wiele próśb. Spróbuj ponownie za kilka minut.');
      } else if (error.code === 'auth/wrong-password') {
        showError('Hasło zostało zmienione. Wprowadź aktualne hasło i spróbuj ponownie.');
      } else {
        showError('Wystąpił błąd podczas wysyłania emaila weryfikacyjnego.');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      setShowResendVerification(false);
      setUnverifiedUserEmail('');
      showInfo('Możesz spróbować ponownie po weryfikacji emaila.', 4000);
    } catch (error) {
      console.error("Błąd resetowania:", error);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    
    if (isRegistering && password !== confirmPassword) {
      showError('Hasła nie są identyczne!');
      return;
    }
    
    if (isRegistering && !displayName.trim()) {
      showError('Proszę podać imię lub nick!');
      return;
    }
    
    setIsLoading(true);
    try {
      let result;
      if (isRegistering) {
        result = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update user profile with displayName
        await updateProfile(result.user, {
          displayName: displayName.trim()
        });
        
        // Send email verification
        await sendEmailVerification(result.user);
        
        console.log("Zarejestrowany użytkownik:", result.user);
        showSuccess(`📧 Witaj ${displayName}! Sprawdź swoją skrzynkę email i kliknij link weryfikacyjny, aby aktywować konto.`, 7000);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
        
        // Check if email is verified
        if (!result.user.emailVerified) {
          // Store email for resend verification functionality
          setUnverifiedUserEmail(result.user.email);
          // Automatically sign out unverified users
          await signOut(auth);
          setShowResendVerification(true);
          showError('🔒 Musisz zweryfikować swój email przed logowaniem. Sprawdź skrzynkę pocztową i kliknij link weryfikacyjny.', 7000);
          // Don't close modal for unverified users
        } else {
          console.log("Zalogowany użytkownik:", result.user);
          const userName = result.user.displayName || result.user.email;
          showSuccess(`✨ Witamy z powrotem ${userName}! Logowanie zakończone pomyślnie.`, 4000);
          // Only close modal for verified users
          setTimeout(() => {
            onClose && onClose();
          }, 1500);
        }
      }
      
      // For registration, always delay close to show success message
      if (isRegistering) {
        setTimeout(() => {
          onClose && onClose();
        }, 1500);
      }
    } catch (error) {
      console.error(isRegistering ? "Błąd rejestracji:" : "Błąd logowania:", error);
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          showError('Ten email jest już w użyciu. Spróbuj się zalogować lub użyj innego adresu.');
          break;
        case 'auth/weak-password':
          showWarning('Hasło jest za słabe. Musi mieć co najmniej 6 znaków.');
          break;
        case 'auth/user-not-found':
          showError('Użytkownik nie istnieje. Sprawdź email lub zarejestruj się.');
          break;
        case 'auth/wrong-password':
          showError('Nieprawidłowe hasło. Spróbuj ponownie.');
          break;
        case 'auth/invalid-email':
          showError('Nieprawidłowy format adresu email.');
          break;
        case 'auth/user-disabled':
          showError('To konto zostało zablokowane. Skontaktuj się z pomocą techniczną.');
          break;
        case 'auth/too-many-requests':
          showWarning('Zbyt wiele prób logowania. Spróbuj ponownie za chwilę.');
          break;
        default:
          showError(isRegistering ? 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie.' : 'Wystąpił błąd podczas logowania. Spróbuj ponownie.');
      }
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Użytkownik:", result.user);
      showSuccess('🚀 Logowanie przez Google zakończone pomyślnie!', 4000);
      
      setTimeout(() => {
        onClose && onClose();
      }, 1500);
    } catch (error) {
      console.error("Błąd logowania z Google:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        showWarning('Logowanie zostało przerwane.');
      } else if (error.code === 'auth/popup-blocked') {
        showError('Popup został zablokowany przez przeglądarkę. Sprawdź ustawienia.');
      } else {
        showError('Wystąpił błąd podczas logowania przez Google.');
      }
    }
  };

  return (
    <div className="login-modal-content">
      <h2 className="login-title">{isRegistering ? 'Zarejestruj się' : 'Zaloguj się'}</h2>
      <p className="login-desc">
        {isRegistering 
          ? 'Utwórz konto, aby uzyskać dostęp do ekskluzywnych wzorów' 
          : 'Wybierz sposób logowania, aby uzyskać dostęp do ekskluzywnych wzorów'
        }
      </p>
      
      <form onSubmit={handleEmailAuth} className="login-form">
        {isRegistering && (
          <input
            type="text"
            placeholder="Imię"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="login-input"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Potwierdź hasło"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="login-input"
            required
          />
        )}
        <button
          type="submit"
          disabled={isLoading || !email || !password || (isRegistering && (!confirmPassword || !displayName.trim()))}
          className="login-btn login-btn-primary"
        >
          {isLoading ? (isRegistering ? 'Rejestracja...' : 'Logowanie...') : (isRegistering ? 'Zarejestruj się' : 'Zaloguj się')}
        </button>
      </form>
      
      {showResendVerification && (
        <div className="verification-notice">
          <p className="verification-text">
            🔒 Twoje konto nie jest zweryfikowane. Sprawdź email lub wyślij link ponownie.
          </p>
          <div className="verification-buttons">
            <button 
              onClick={handleResendVerification}
              className="login-btn login-btn-secondary"
              type="button"
            >
              📧 Wyślij ponownie
            </button>
            <button 
              onClick={handleSignOut}
              className="login-btn login-btn-logout"
              type="button"
            >
              ❌ Anuluj
            </button>
          </div>
        </div>
      )}
      
      <div className="login-switch">
        <button 
          type="button"
          onClick={() => {
            setIsRegistering(!isRegistering);
            setConfirmPassword('');
            setDisplayName('');
            setShowResendVerification(false);
            setUnverifiedUserEmail('');
          }}
          className="login-switch-btn"
        >
          {isRegistering ? 'Masz już konto? Zaloguj się' : 'Nie masz konta? Zarejestruj się'}
        </button>
      </div>
      
      <div className="login-divider">
        <span>lub</span>
      </div>
      
      <div className="login-buttons">
        <button onClick={handleGoogleLogin} className="login-btn login-btn-google">
          <svg className="login-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Zaloguj się z Google
        </button>
      </div>
      
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
        duration={toast.duration}
      />
    </div>
  );
};

export default Login;