import React from "react";
import { motion } from "framer-motion";

export const Mobilemenu = ({ menuOpen, setMenuOpen, scrollToSection }) => {
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
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
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};