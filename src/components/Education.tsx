import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Science",
    school: "Tech University",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Artificial Intelligence",
    achievements: [
      "Published research paper on ML algorithms",
      "Led student development team",
      "4.0 GPA"
    ]
  },
  {
    degree: "Bachelor of Computer Science",
    school: "State University",
    period: "2012 - 2016",
    description: "Focus on Web Development and Database Systems",
    achievements: [
      "Dean's List all semesters",
      "Web Development Club President",
      "Hackathon Winner"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-xl text-gray-400">Academic achievements</p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl p-6 md:p-8 hover-glow relative overflow-hidden"
            >
              <div className="absolute inset-0 animated-gradient opacity-5" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <GraduationCap className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-cyan-400">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    {edu.period}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{edu.description}</p>
                
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achieveIndex) => (
                    <motion.li
                      key={achieveIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + achieveIndex * 0.1 }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}