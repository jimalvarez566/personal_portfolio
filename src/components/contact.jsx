import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_ex9svdk',
        'template_isnzi4k',
        form.current,
        'VdO95ijny29eFIBVM'
      )
      .then(
        (result) => {
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully! I will get back to you soon.'
          });
          form.current.reset();
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          setSubmitStatus({
            success: false,
            message: 'Something went wrong. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
            <motion.p 
              className="text-gray-400"
              whileHover={{ x: 5 }}
            >
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
            
          </motion.div>

          <motion.form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: formData.user_name ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: formData.user_email ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: formData.message ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </span>
              <motion.span 
                className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <AnimatePresence>
              {submitStatus.message && (
                <motion.p
                  className={`text-center ${
                    submitStatus.success ? 'text-green-500' : 'text-red-500'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}; 