import React from 'react';
import { motion } from 'framer-motion';

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        {/* We'll move the projects content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
        </div>
      </div>
    </div>
  );
}; 