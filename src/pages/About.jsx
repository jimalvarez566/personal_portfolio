import React from 'react';
import { About } from '../components/about';
import { Footer } from '../components/footer';

export const AboutPage = () => {
  return (
    <main className="min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-16">
      <About />
      <Footer />
    </main>
  );
}; 