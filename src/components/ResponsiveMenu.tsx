import { useState } from "react";

export function ResponsiveMenu() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className="md:hidden" onClick={() => setIsOpened(!isOpened)}>
      <img src="/hamburguerMenu.svg" alt="Menu hamburguer" className="sm:w-8 sm:h-8" />

      {isOpened &&
        <nav className="absolute bg-light-green w-screen left-0 top-14 h-screen flex flex-col items-center pt-2 text-xl font-medium">
          <a className="text-black no-underline mb-4 hover:underline flex items-center justify-between w-1/6" href="#Services">Services <img src="/dropdown_arrow.svg" alt="" /></a>
          <a className="text-black no-underline mb-4 hover:underline" href="#About">About Us</a>
          <a className="text-black no-underline mb-4 hover:underline" href="#Contact">Contact Us</a>
          <button className="bg-transparent text-black mb-4 border-2 py-2 px-5 rounded-lg border-dark-green">Login</button>
          <button className="bg-dark-green text-white py-2 px-5 rounded-lg border-none">Register</button>
        </nav>
      }
    </nav>
  );
}