
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutInView = useInView(aboutRef, { amount: 0.2, once: false });
  const projectsInView = useInView(projectsRef, { amount: 0.4, once: false });

  return (
    <div className="font-sans text-[#5b4a36] bg-gradient-to-b from-[#f5f3ed] to-[#bfae99] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-[80%] mx-auto">
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
      <Footer className="mt-auto" />
    </div>
  )
}


export default App