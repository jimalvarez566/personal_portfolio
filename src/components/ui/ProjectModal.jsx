import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../animations/variants';
import { TechStack } from './TechStack';

export const ProjectModal = ({ project, onClose }) => {
  // Simple animation variants if you need to override existing ones
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  return (
    <>
      {/* Full-screen overlay - clicking this will close the modal */}
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      {/* Content container with explicit positioning and sizing */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-auto my-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h3 className="text-2xl font-bold mb-4 pr-8">{project.title}</h3>
              
              {/* Demo container */}
              <div className="relative aspect-video bg-gray-700 rounded-lg mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center bg-black/60 text-white py-2 px-4 rounded">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Demo Coming Soon
                  </div>
                </div>
              </div>
              
              {/* Project description */}
              <div className="text-gray-300 mb-6">
                {project.description}
              </div>
              
              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Key Highlights:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-300">{highlight}</li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies:</h4>
                <TechStack technologies={project.technologies} />
              </div>
              
              {/* Time period */}
              <div className="text-sm text-gray-400 mb-6">
                {project.period}
              </div>
              
              {/* Just the "View Code" button */}
              <div className="flex justify-center pt-2">
                <button 
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg transition-colors duration-300 border border-gray-600"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};