import { useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";

export function Header() {
  const [isHover, setIsHover] = useState(false);

  return (
    <header className="z-50 fixed max-w-full w-screen flex items-center justify-between sm:px-10 lg:px-20 bg-light-green h-20">
      <img src="/logo.svg" alt="" className="w-40" />
      <ResponsiveMenu />
      <nav className="sm:hidden md:flex md:w-2/3 justify-between items-center font-medium">
        <a className="text-black no-underline hover:underline flex items-center" href="#Services" 
        onMouseOver={() => setIsHover(!isHover)}>Services <img className="ml-3" src="/dropdown_arrow.svg" alt="" /></a>
        {isHover && (
          <nav className="absolute flex flex-col px-4 py-2 bg-white top-14 left-50">
            <a className="my-2 hover:underline" href="#">Customer Relationship Management</a>
            <a className="my-2 hover:underline" href="#">Customer Support</a>
            <a className="my-2 hover:underline" href="#">Email Marketing</a>
          </nav>
        )}
        <a className="text-black no-underline hover:underline" href="#About">About Us</a>
        <a className="text-black no-underline hover:underline" href="#Contact">Contact Us</a>
        <button className="bg-transparent text-black border-2 py-[6px] px-5 rounded-lg border-dark-green">Login</button>
        <button className="bg-dark-green text-white py-2 px-5 rounded-lg border-none">Register</button>
      </nav>
    </header>
  );
}