import React from 'react';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';

export const ContactPage = () => {
  return (
    <main className="min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-16">
      <Contact />
      <Footer />
    </main>
  );
}; 