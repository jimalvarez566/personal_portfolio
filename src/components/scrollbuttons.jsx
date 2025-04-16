import React from 'react';
import { useScroll } from '../hooks/useScroll';

export const ScrollButtons = () => {
  const { showScrollButton, scrollToTop, scrollToBottom } = useScroll();

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
      
      <button
        onClick={scrollToBottom}
        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
        aria-label="Scroll to bottom"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}; 