import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';

export const Mobilemenu = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      <motion.div
        className="fixed top-0 right-0 w-64 h-screen bg-white dark:bg-gray-900 z-[70] p-4 shadow-lg"
        variants={menuVariants}
        initial="hidden"
        animate={menuOpen ? "visible" : "hidden"}
        exit="hidden"
      >
        <div className="flex flex-col space-y-4 mt-20">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ x: 5 }}
            >
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left px-4 py-2 text-lg font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};