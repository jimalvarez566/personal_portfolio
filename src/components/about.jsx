import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const skills = [
  // Languages
  { name: "C++", category: "Languages", level: 100 },
  { name: "Python", category: "Languages", level: 100 },
  { name: "SQL", category: "Languages", level: 100 },
  { name: "JavaScript", category: "Languages", level: 100 },
  { name: "TypeScript", category: "Languages", level: 100 },
  { name: "Java", category: "Languages", level: 100 },
  
  // Frameworks/Libraries
  { name: "React.js", category: "Frameworks/Libraries", level: 100 },
  { name: "Next.js", category: "Frameworks/Libraries", level: 100 },
  { name: "FastAPI", category: "Frameworks/Libraries", level: 100 },
  { name: "Tailwind CSS", category: "Frameworks/Libraries", level: 100 },
  
  // Databases/Infrastructure
  { name: "MongoDB", category: "Databases/Infrastructure", level: 100 },
  { name: "Redis", category: "Databases/Infrastructure", level: 100 },
  { name: "Prometheus", category: "Databases/Infrastructure", level: 100 },
  { name: "Linux", category: "Databases/Infrastructure", level: 100 },
  
  // Development Tools
  { name: "Git", category: "Development Tools", level: 100 },
  { name: "API Design", category: "Development Tools", level: 100 },
  { name: "Agile Methodology", category: "Development Tools", level: 100 },
  { name: "Async Programming", category: "Development Tools", level: 100 }
];

const education = {
  school: "California State University, Fullerton",
  degree: "Bachelor of Science",
  major: "Computer Science",
  minor: "Business Data Analytics",
  period: "August 2022 - Present",
};

const experience = [
  {
    title: "Software Engineering Intern",
    company: "LendAPI",
    location: "Irvine, CA",
    period: "Jun 2025 – Present",
    logo: "/lendapi-logo.png", // You can add the logo file to your public folder
    achievements: [
      "Architected a high-performance async microservice for financial onboarding platform, using FastAPI, Redis caching, MongoDB integration, and API key authentication to replace legacy Django systems.",
      "Built a production-ready REST API with 8+ endpoints for credit check workflows, achieving 100% test coverage through an automated test suite.",
      "Enabled system observability and performance insight by implementing structured logging (Structlog) and Prometheus metrics."
    ],
    technologies: ["FastAPI", "Redis", "MongoDB", "Django", "Structlog", "Prometheus", "REST API", "Microservices"]
  }
];

const organizations = [
  {
    name: "CSUF Theta Tau Professional Engineering Fraternity",
    period: "September 2023 - Present",
    role: "Professional Development Chair",
    rolePeriod: "Jul 2025 – Present",
    logo: "/theta-tau-logo.png",
    achievements: [
      "Organizing monthly career workshops and internship accountability systems for 40+ engineering members.",
      "Coordinating resume reviews, academic check-ins, and alumni mentorship to support member growth and placement.",
      "Tracked internship submissions, resume approvals, and professional compliance via spreadsheets and shared tooling."
    ]
  },
  {
    name: "CSUF Association for Computing Machinery (ACM)",
    period: "January 2024 - Present",
    logo: "/acm-logo.png",
    achievements: [
      "Attending workshops on algorithms, software development, and emerging technologies.",
      "Participating in technical discussions and networking events with computer science professionals.",
      "Engaging with industry speakers and learning about career opportunities in tech."
    ]
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

  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
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
        
        {/* Top Section - Profile and Experience */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 mb-12 items-end"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Profile */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            variants={itemVariants}
          >
            {/* Headshot Section */}
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto">
                {/* Headshot image */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/headshot.jpg"
                    alt="Jim Alvarez"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Error loading image:", e);
                      e.target.style.display = 'none';
                    }}
                  />
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
            </div>

            {/* Education */}
            <motion.div className="space-y-3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{education.school}</p>
                <p className="text-gray-600 dark:text-gray-400">{education.degree} in {education.major}</p>
                <p className="text-gray-600 dark:text-gray-400">Minor in {education.minor}</p>
                <p className="text-gray-500 dark:text-gray-500">{education.period}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience Only */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            {/* Experience */}
            <motion.div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 object-contain rounded"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<span class="text-blue-500 font-bold text-sm">LA</span>';
                              }}
                            />
                          ) : (
                            <span className="text-blue-500 font-bold text-sm">LA</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Job Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                            <p className="text-blue-500 font-medium">{exp.company}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        
                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded border border-blue-200 dark:border-blue-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Section - Full Width */}
        <motion.div 
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
        </motion.div>

        {/* Organizations Section - Horizontal Layout */}
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">Organizations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {organizations.map((org, index) => (
              <motion.div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                                  <div className="flex items-start gap-3 mb-3">
                    {/* Organization Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-600">
                      {org.logo ? (
                        <img 
                          src={org.logo} 
                          alt={`${org.name} logo`}
                          className="w-8 h-8 object-contain rounded"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallbackText = org.name.includes('Theta Tau') ? 'TT' : 'ACM';
                            e.target.parentElement.innerHTML = `<span class="text-blue-500 font-bold text-xs">${fallbackText}</span>`;
                          }}
                        />
                      ) : (
                        <span className="text-blue-500 font-bold text-xs">ACM</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Organization Details */}
                  <div className="flex-1">
                                          <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 dark:text-white">{org.name}</h4>
                          {org.role && <p className="text-blue-500 font-medium text-sm">{org.role}</p>}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full whitespace-nowrap">
                          {org.period}
                        </span>
                      </div>
                      
                      {org.role && org.rolePeriod && (
                        <div className="mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
                            {org.rolePeriod}
                          </span>
                        </div>
                      )}
                      
                      {org.achievements && (
                        <div className="space-y-0.5">
                          {org.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1 flex-shrink-0 text-xs">•</span>
                              <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 