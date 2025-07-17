import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../animations/variants';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';

export const ProjectModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    // Save the original overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scrolling when modal closes
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

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
        className="fixed inset-0 bg-black/70 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      
      {/* Content container with proper scrolling */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header - fixed at top */}
          <div className="flex-shrink-0 p-6 pb-4 border-b border-gray-200 dark:border-gray-700 relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
              onClick={onClose}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold pr-8 text-gray-900 dark:text-white">{project.title}</h3>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Demo container */}
            <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-6 overflow-hidden">
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
            <div className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </div>
            
            {/* Key Highlights */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Key Highlights:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{highlight}</li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Technologies:</h4>
              <TechStack technologies={project.technologies} />
            </div>
            
            {/* Time period */}
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {project.period}
            </div>
            
            {/* Project Links */}
            <div className="flex justify-center pt-2">
              <ProjectLinks project={project} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};