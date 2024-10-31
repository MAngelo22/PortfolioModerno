import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-xl gradient-text">MANTRIX</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Projects', 'Experience', 'Education'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1 }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white hover:glow transition-all"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: 'https://github.com/MAngelo22' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/miguelangelnunezlopez/' },
              { Icon: Mail, href: 'mailto:miguelangelnunez.developer@gmail.com' }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 hover:glow transition-all"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}