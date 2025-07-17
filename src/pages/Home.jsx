import React from 'react';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Projects } from '../components/projects';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { ScrollButtons } from '../components/scrollbuttons';

export const HomePage = () => {
  return (
    <main className="bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButtons />
    </main>
  );
}; 