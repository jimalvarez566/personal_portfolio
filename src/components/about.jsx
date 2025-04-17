import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const skills = [
  { name: "C++", category: "Languages & Backend", level: 85 },
  { name: "Python", category: "Languages & Backend", level: 90 },
  { name: "JavaScript", category: "Languages & Backend", level: 85 },
  { name: "mySQL", category: "Languages & Backend", level: 80 },
  { name: "HTML", category: "Frontend", level: 90 },
  { name: "CSS", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 85 },
  { name: "Git Control", category: "Tools", level: 85 },
  { name: "Agile Methodology", category: "Tools", level: 80 },
  { name: "API Integration", category: "Tools", level: 85 }
];

const education = {
  school: "California State University, Fullerton",
  degree: "Bachelor of Science",
  major: "Computer Science",
  period: "August 2022 - Present",
  coursework: [
    "Object Oriented Programming",
    "Data Structures",
    "Python Programming",
    "Compilers and Languages",
    "Software Engineering",
    "File Systems & Databases",
    "Front-End Engineering",
    "Discrete Mathematics",
    "Linear Algebra"
  ]
};

const organizations = [
  {
    name: "CSUF Theta Tau Professional Engineering Fraternity",
    period: "September 2023 - Present"
  },
  {
    name: "CSUF Association for Computing Machinery (ACM)",
    period: "January 2024 - Present"
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
          className="grid md:grid-cols-2 gap-12 items-start"
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
                Computer Science
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

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://github.com/jimalvarez566"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jim-alvarez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-8 h-8" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{education.school}</p>
                <p className="text-gray-600 dark:text-gray-400">{education.degree} in {education.major}</p>
                <p className="text-gray-500 dark:text-gray-500">{education.period}</p>
              </div>
            </motion.div>

            <motion.div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {})).map(([category, categorySkills]) => (
                  <div key={category} className="space-y-2">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">{category}</h4>
                    {categorySkills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Organizations</h3>
              <div className="space-y-2">
                {organizations.map((org, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{org.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{org.period}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 