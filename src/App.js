import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Modal from "./components/Modal"
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutInView = useInView(aboutRef, { amount: 0.2, once: false });
  const projectsInView = useInView(projectsRef, { amount: 0.1, once: false });
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="app-container">
      <Header onOpenLogin={openLoginModal} />
      <main className="main-content">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 1 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <About />
        </motion.div>
        <motion.div
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: projectsInView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <Projects />
        </motion.div>
      </main>
      <Contact />
      <Footer />
      
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <Login onClose={closeLoginModal} />
      </Modal>
    </div>
  )
}

export default App;
