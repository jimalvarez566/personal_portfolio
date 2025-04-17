import React from 'react';
import { motion } from 'framer-motion';

export const TechStack = ({ technologies }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {technologies.map((tech, index) => (
      <motion.span 
        key={index}
        className="px-3 py-1 bg-gray-700 text-sm rounded-full"
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
); 