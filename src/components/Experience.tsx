import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Doers DF",
    position: "Intenrship Web Developer",
    period: "Sep 2024 - Present",
    description: "Intern Web Page Developer Position",
    technologies: ["React", "Node.js", "Wordpress", "Python", "Typescript", "Blender"]
  },
  {
    company: "Prosegur & Eulen",
    position: "Security Guard",
    period: "May 2021 - Sep 2024",
    description: "Security guard in prosegur alarm control center and for the Madrid city council",
    technologies: ["Windows 10", "Android", "Office 365"]
  },
  {
    company: "Papa Johns Spain",
    position: "Pizza Delivery Guy",
    period: "Mar 2021 - May 2021",
    description: "Built responsive web applications and implemented modern UI/UX designs.",
    technologies: ["Windows 10", "Google Maps"]
  },
  {
    company: "Telefónica Global Technlogy",
    position: "SalesForce Support",
    period: "Oct 2020 - Feb 2021",
    description: "Salesforce Administrator and Developer position in practice, Uploading and Unsubscribing of users, changes to user permissions, modification of clients. Meetings with clients for modifications in applications of Salesforce Lightning versions.Learning how code is displayed and loaded through the different levels of code scaling",
    technologies: ["Salesforce", "Windows 10", "Teams"]
  },
  {
    company: "Sage",
    position: "Support Technician",
    period: "Ene 2017 - Jun 2017",
    description: "System cloning, hardware and software testing, Office problem solving, helpdesk",
    technologies: ["Cloning", "Office 365", "helpdesk", "Testing"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Work Experience</h2>
          <p className="text-xl text-gray-400">Professional journey through tech</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl p-6 md:p-8 hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                  <Building2 className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 glass-card rounded-full text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}