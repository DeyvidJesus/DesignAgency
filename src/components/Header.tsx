import { ResponsiveMenu } from "./ResponsiveMenu";

export function Header() {
  return (
    <header className="max-w-full fixed z-[5000] w-screen flex items-center justify-between sm:px-10 lg:px-20 bg-light-green h-20">
      <img src="/logo.svg" alt="" className="w-40" />
      <ResponsiveMenu />
      <nav className="sm:hidden md:flex md:w-2/3 justify-between items-center font-medium">
        <a className="text-black no-underline hover:underline" href="#WhatWeDo">What We Do</a>
        <a className="text-black no-underline hover:underline" href="#OurPortfolio">Our Portfolio</a>
        <a className="text-black no-underline hover:underline" href="#Testimonials">Testimonials</a>
        <a className="text-black no-underline hover:underline" href="#Subscribe">Subscribe</a>
      </nav>
    </header>
  );
}
