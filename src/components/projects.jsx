import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ui/ProjectCard';
import { ProjectModal } from './ui/ProjectModal';
import { animations } from '../animations/variants';

const projects = [
  {
    title: "Interactive Weather Application",
    description: "Developed a weather forecasting web app using HTML, CSS, and JavaScript, integrating APIs to provide real-time and 5-day forecasts. Implemented city-based search and geolocation-based weather retrieval for user convenience.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration", "UI/UX"],
    image: "https://via.placeholder.com/600x400",
    period: "October 2024 - December 2024",
    highlights: [
      "Developed a weather forecasting web app using HTML, CSS, and JavaScript",
      "Integrated APIs for real-time and 5-day forecasts",
      "Implemented city-based search and geolocation-based weather retrieval",
      "Followed Agile development practices for UI/UX improvements"
    ]
  },
  {
    title: "Data Structures Comparison",
    description: "Conducted comprehensive performance analysis of various data structures, focusing on insertion, deletion, and retrieval operations. Designed and ran benchmarking tests to quantify efficiency differences in real-world applications.",
    technologies: ["Data Structures", "Performance Analysis", "LibreOffice", "Benchmarking"],
    image: "https://via.placeholder.com/600x400",
    period: "April 2024 - May 2024",
    highlights: [
      "Conducted performance analysis of various data structures",
      "Designed and ran benchmarking tests",
      "Visualized time complexity results using graphs",
      "Quantified efficiency differences in real-world applications"
    ]
  },
  {
    title: "Food Waste Tracker",
    description: "Engineered a food wastage tracking application using object-oriented programming to calculate waste in monetary terms. Built a user-friendly interface for data collection and actionable insights on reducing waste.",
    technologies: ["Object-Oriented Programming", "UI Design", "Data Collection"],
    image: "https://via.placeholder.com/600x400",
    period: "October 2023 - December 2023",
    highlights: [
      "Engineered a food wastage tracking application",
      "Used object-oriented programming principles",
      "Built a user-friendly interface",
      "Implemented waste calculation in monetary terms"
    ]
  },
  {
    title: "Handheld Game Console",
    description: "Developed and programmed a handheld gaming device using Python, successfully integrating audio and power management. Optimized hardware selection for a lightweight, power-efficient design using the Pygame library.",
    technologies: ["Python", "Pygame", "Hardware Integration", "Power Management"],
    image: "https://via.placeholder.com/600x400",
    period: "September 2023 - December 2023",
    highlights: [
      "Developed a handheld gaming device using Python",
      "Integrated audio and power management",
      "Optimized hardware selection for efficiency",
      "Utilized Pygame for graphics and user input"
    ]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
  );
}; 