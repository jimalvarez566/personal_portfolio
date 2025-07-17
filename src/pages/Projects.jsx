import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectModal } from '../components/ui/ProjectModal';
import { Footer } from '../components/footer';
import { animations } from '../animations/variants';

const projects = [
  {
    title: "TaskBuddy App",
    description: "Engineering a full-stack task management app using FastAPI (Python) for the backend and React Native/Expo for the mobile frontend. Designed and implemented a RESTful API with secure user authentication.",
    technologies: ["FastAPI", "React Native", "TypeScript", "JWT", "Expo", "Python"],
    image: "https://via.placeholder.com/600x400",
    period: "May 2025 – Present",
    codeLink: "https://github.com/jimalvarez566/task_buddy",
    highlights: [
      "Designed and implemented a RESTful API using FastAPI, enabling secure and scalable task management features",
      "Engineering a full-stack task management app using FastAPI (Python) for the backend and React Native/Expo for the mobile frontend",
      "Developed robust user authentication and authorization with JWT tokens, password hashing, and input validation using Pydantic"
    ]
  },
  {
    title: "Interactive Weather Application",
    description: "Developed a weather forecasting web app using HTML, CSS, and JavaScript, integrating APIs to provide real-time and 5-day forecasts. Implemented city-based search and geolocation-based weather retrieval for user convenience.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration", "UI/UX"],
    image: "https://via.placeholder.com/600x400",
    period: "October 2024 - December 2024",
    codeLink: "https://github.com/jimalvarez566/weatherapp",
    highlights: [
      "Developed a weather forecasting web app using HTML, CSS, and JavaScript",
      "Integrated APIs for real-time and 5-day forecasts",
      "Implemented city-based search and geolocation-based weather retrieval",
      "Followed Agile development practices for UI/UX improvements"
    ]
  },
  {
    title: "Alien Invasion",
    description: "Developed and programmed an Alien Invasion game using Python, successfully integrating audio and power management. Optimized hardware selection for a lightweight, power-efficient handheld gaming device using the Pygame library.",
    technologies: ["Python", "Pygame", "Hardware Integration", "Power Management", "Game Development"],
    image: "https://via.placeholder.com/600x400",
    period: "September 2023 - December 2023",
    codeLink: "https://github.com/jimalvarez566/AlienInvasion",
    highlights: [
      "Developed an Alien Invasion game using Python and Pygame",
      "Integrated audio and power management for handheld gaming device",
      "Optimized hardware selection for efficiency and portability",
      "Utilized Pygame for graphics, user input, and game mechanics"
    ]
  }
];

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="py-20 px-4 md:px-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={animations.container}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </main>
  );
}; 