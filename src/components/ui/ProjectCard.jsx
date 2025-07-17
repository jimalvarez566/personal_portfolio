import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../animations/variants';
import { TechStack } from './TechStack';

export const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 cursor-pointer shadow-lg border border-gray-200 dark:border-gray-700"
    whileHover={{ 
      y: -8, 
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeInOut" }
    }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
  >
    <div className="p-6">
      <motion.h3 
        className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.15 }}
      >
        {project.title}
      </motion.h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
      
      <TechStack technologies={project.technologies} />
    </div>
  </motion.div>
); 