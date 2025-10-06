import { useAuth } from '../contexts/AuthContext';
import FirebaseImage from './FirebaseImage';

export default function Header({ onOpenLogin }) {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title" style={{margin: 0}}>
          <FirebaseImage 
            path="Kingacrafts-logo.png" 
            alt="Kingacrafts logo" 
            className="header-logo-img" 
            style={{height: '100%', width: 'auto', display: 'block'}}
            fallbackSrc="./photos/Kingacrafts-logo.png"
          />
        </h1>
        <nav className="header-nav">
          <a href="#about" className="header-link">O mnie</a>
          <a href="#projects" className="header-link">Projekty</a>
          <a href="#contact" className="header-link">Kontakt</a>
          {currentUser ? (
            <div className="user-menu">
              <span className="user-greeting">
                Cześć {currentUser.displayName || currentUser.email?.split('@')[0]}!
              </span>
              <a 
                href="#header" 
                onClick={(e) => { e.preventDefault(); handleLogout(); }} 
                className="header-link logout-link"
                role="button"
                tabIndex={0}
              >
                Wyloguj
              </a>
            </div>
          ) : (
            <a 
              href="#header" 
              onClick={(e) => { e.preventDefault(); onOpenLogin(); }} 
              className="header-link"
              role="button"
              tabIndex={0}
            >
              Zaloguj
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
  