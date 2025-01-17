"use client"

import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  // Add event listener on component mount
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      id="backToTop"
      className={`fixed bottom-4 right-4 bg-[#FF9F0D] hover:bg-orange-500 text-white font-bold py-2 px-2 rounded-full ${
        isVisible ? '' : 'hidden'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronUp className='text-white font-bold' />

    </button>
  );
};

export default BackToTopButton;