import React from 'react';
import { motion } from 'framer-motion';
import { animations } from '../../animations/variants';
import { TechStack } from './TechStack';
import { ProjectLinks } from './ProjectLinks';

export const ProjectCard = ({ project, onClick }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
    variants={animations.project}
    whileHover="hover"
    onClick={onClick}
  >
    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
      <motion.img 
        src={project.image} 
        alt={project.title}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        whileHover={{ scale: 1.1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <div className="p-6">
      <motion.h3 
        className="text-xl font-semibold mb-2"
        whileHover={{ x: 5 }}
      >
        {project.title}
      </motion.h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <TechStack technologies={project.technologies} />
      <ProjectLinks project={project} />
    </div>
  </motion.div>
); 