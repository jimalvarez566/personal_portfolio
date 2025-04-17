import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../animations/variants';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';

export const ProjectModal = ({ project, onClose }) => (
  <>
    <motion.div
      className="fixed inset-0 bg-black/50 z-[56]"
      variants={animations.overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    />
    <motion.div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 z-[57]"
      variants={animations.modal}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative">
        <button
          className="absolute top-0 right-0 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <TechStack technologies={project.technologies} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  </>
); 