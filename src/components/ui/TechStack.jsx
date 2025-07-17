import React from 'react';
import { motion } from 'framer-motion';

export const TechStack = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech, index) => (
      <span 
        key={index}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full border border-gray-300 dark:border-gray-600"
      >
        {tech}
      </span>
    ))}
  </div>
); 