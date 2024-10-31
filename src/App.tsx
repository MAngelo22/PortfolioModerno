import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <AnimatePresence>
      <div className="bg-slate-900 grid-bg min-h-screen">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative"
        >
          <div className="fixed inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent pointer-events-none" />
          <Hero />
          <Projects />
          <Experience />
          <Education />
        </motion.main>
      </div>
    </AnimatePresence>
  );
}

export default App;