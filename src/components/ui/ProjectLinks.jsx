import React from 'react';
import { motion } from 'framer-motion';

export const ProjectLinks = ({ project }) => (
  <div className="flex gap-3">
    {project.liveLink && (
      <a 
        href={project.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        Live Demo
      </a>
    )}
    {project.codeLink && (
      <a 
        href={project.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-transparent text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        View Code
      </a>
    )}
  </div>
); 