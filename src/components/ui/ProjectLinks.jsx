import React from 'react';
import { motion } from 'framer-motion';

export const ProjectLinks = ({ project }) => (
  <div className="flex gap-4">
    <motion.a 
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="relative z-10">Live Demo</span>
      <motion.span 
        className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
    <motion.a 
      href={project.codeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 relative overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => e.stopPropagation()}
    >
      <span className="relative z-10">View Code</span>
      <motion.span 
        className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  </div>
); 