import { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';

export function ResponsiveMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="md:hidden" onClick={() => setIsOpened(!isOpened)}>

      <div className={`fixed top-5 right-6 z-50 cursor-pointer ${isOpened ? 'open' : ''}`}>
        <div className="icon-container" onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
        {isOpened &&
          <nav className="fixed bg-light-green w-screen left-0 top-14 h-screen flex flex-col items-center pt-8 text-xl font-medium">
            <div className="flex flex-col h-1/2 justify-between items-center">
              <a className="text-black no-underline hover:underline" href="#WhatWeDo">What We Do</a>
              <a className="text-black no-underline hover:underline" href="#OurPortfolio">Our Portfolio</a>
              <a className="text-black no-underline hover:underline" href="#Testimonials">Testimonials</a>
              <a className="text-black no-underline hover:underline" href="#Subscribe">Subscribe</a>
            </div>
          </nav>
        }
      </div>
    </nav>
  );
}
