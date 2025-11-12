'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  // Nie wyświetlaj headera na stronie bloga
  if (pathname === '/blog/blog' || pathname === '/blog' || pathname.startsWith('/blog/')) {
    return null;
  }

  return (
    <div className="w-full bg-black flex flex-col items-center gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <img 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-auto rounded-lg shadow-lg object-cover" 
        src="/images/itachi-uchiha-naruto-amoled-black-background-minimal-art-3840x2160-6478.jpg"
        alt="Itachi Uchiha"
      />
    </div>
  );
};

export default Header;