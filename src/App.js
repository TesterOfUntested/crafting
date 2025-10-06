import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Modal from "./components/Modal"
import { AuthProvider } from "./contexts/AuthContext"
import { useState } from 'react';
import './App.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthProvider>
      <div className="app-container">
        <Header onOpenLogin={openLoginModal} />
        <main className="main-content">
          <About />
          <Projects />
        </main>
        <Contact />
        <Footer />
        
        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <Login onClose={closeLoginModal} />
        </Modal>
      </div>
    </AuthProvider>
  )
}

export default App;
