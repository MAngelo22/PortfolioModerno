import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio showing projects in a virtual gallery using Three.js and React Three Fiber",
    image: "https://i.ytimg.com/vi/F06lrLMFiK0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEOGqr5ZlH0sMq2hxBkiKg_1u5cA",
    tech: ["React", "Three.js", "TypeScript", "Blender"],
    live: "https://youtu.be/F06lrLMFiK0"
  },
  {
    title: "HandGame",
    description: "Website designed so that you can interactively play classic games against the machine",
    image: "https://i.ytimg.com/vi/0iOtOFw-e7o/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAApIFigIMCAAQARgkIFkocjAP&rs=AOn4CLDiyF5PJ047Zs6ToXtm_wjdCfPGIQ",
    tech: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/HANDgame.git",
    live: "https://gamesclassic.netlify.app/piedra2"
  },
  {
    title: "Motenimiento",
    description: "Website designed to generate motorcycle maintenance data according to the model",
    image: "https://i.ytimg.com/vi/6ughobPjAeI/oar2.jpg?sqp=-oaymwEdCIUFENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCN7ZU0VZdvzXWC9qThUnw93sGzrQ",
    tech: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Motenimiento.git",
    live: "https://www.youtube.com/shorts/6ughobPjAeI"
  },
  {
    title: "Redel",
    description: "Website designed to reserve paddle tennis courts in an urbanization",
    image: "https://i.ytimg.com/vi/BuNRfIk7z44/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAApIFigIMCAAQARhlIFIoRTAP&rs=AOn4CLAIiKg2cXpsqHhYQRaPmrDw8raJTA",
    tech: ["HTML", "JS", "CSS"],
    live: "https://www.youtube.com/watch?v=BuNRfIk7z44"
  },{
    title: "QRescato",
    description: "App on Android, through which your device was geolocated to find the protector",
    image: "https://i.ytimg.com/vi/6B9bn7RxE7k/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB3AGAAuADigIMCAAQARhyIFEoPTAP&rs=AOn4CLDQKb9-fPTZQVGkaesEc5S5FMihnw",
    tech: ["Android", "Java", "API Google Maps", "Android Studio"],
    github: "https://github.com/MAngelo22/QRastreo-TFG.git",
    live: "https://www.youtube.com/watch?v=6B9bn7RxE7k"
  },{
    title: "Juego 3D",
    description: "I play recreating the ITT where I studied, in first person",
    image: "https://i.ytimg.com/vi/E7xc8kuUAeQ/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBhAmAAtAFigIMCAAQARhlIFgoVjAP&rs=AOn4CLD_w1qmTyRsvBQofYgXX-gtHriREg",
    tech: ["Unity", "Java", "C#", "PhotoShop"],
    live: "https://www.youtube.com/watch?v=E7xc8kuUAeQ&t=34s"
  },{
    title: "Juego 2D",
    description: "Game based on 'The Avengers', rigging characters from static assets",
    image: "https://i.ytimg.com/vi/r-VIGDOk2UU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAsoFigIMCAAQARh_IBMoFDAP&rs=AOn4CLBbT-sO1Pz3NP831sLdrKtyhtUhew",
    tech: ["Unity", "Java", "C#", "PhotoShop"],
    live: "https://www.youtube.com/watch?v=r-VIGDOk2UU&t=2s"
  },{
    title: "Cronómetro Tabata",
    description: "Website to train calisthenics with a free tabata stopwatch",
    image: "  https://static.wixstatic.com/media/c6eee4_e41584d954fb4aff93e9ecf1c5f17b18~mv2.jpg",
    tech: ["HTML", "JS", "CSS"],
    github: "https://github.com/MAngelo22/Proyecto-Tamers.git",
    live: "https://proyectotamer.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Innovative solutions for modern challenges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden hover-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm glass-card text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}