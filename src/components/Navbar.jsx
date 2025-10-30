import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Pavan Kumar PS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900 transition">About</a>
            <a href="#experience" className="hover:text-gray-900 transition">Experience</a>
            <a href="#skills" className="hover:text-gray-900 transition">Skills</a>
            <a href="#projects" className="hover:text-gray-900 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:pavan.kumar@nerdsandgeeks.in" className="px-4 py-2 text-sm font-medium rounded-md bg-gray-900 text-white hover:bg-gray-800">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
