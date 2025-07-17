import React from 'react';
import { Hero } from '../components/hero';
import { Footer } from '../components/footer';

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Hero />
      <Footer />
    </main>
  );
}; 