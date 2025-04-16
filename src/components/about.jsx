import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Git", level: 85 }
];

const experiences = [
  {
    title: "Software Developer",
    company: "Company Name",
    period: "2022 - Present",
    description: "Description of your role and achievements...",
    technologies: ["React", "Node.js", "TypeScript"]
  },
  {
    title: "Web Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    description: "Description of your role and achievements...",
    technologies: ["JavaScript", "HTML/CSS", "Vue.js"]
  }
];

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Headshot Section */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Decorative elements */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              {/* Headshot image */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="./headshot.jpg"
                  alt="Jim Alvarez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Error loading image:", e);
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
              
              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Full Stack
              </motion.div>
              <motion.div
                className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                Developer
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.p 
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-400"
              whileHover={{ x: 5 }}
            >
              Hello! I'm a passionate developer with a strong focus on creating beautiful and functional web applications.
              I love solving complex problems and turning ideas into reality through code.
            </motion.p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="space-y-2"
                    variants={itemVariants}
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">{exp.title}</h4>
                <p className="text-gray-500 dark:text-gray-400">{exp.company} • {exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full text-sm"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.5)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 