import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-serif italic tracking-tight text-primary">
          Edward Sepeda
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link to="/" className="text-primary font-bold border-b border-primary pb-1 font-sans tracking-wide">
            Home
          </Link>
          <Link to="/booking" className="text-primary/70 font-medium font-sans tracking-wide hover:text-primary transition-colors duration-400">
            Services
          </Link>
          <a href="#" className="text-primary/70 font-medium font-sans tracking-wide hover:text-primary transition-colors duration-400">
            Gallery
          </a>
          <a href="#" className="text-primary/70 font-medium font-sans tracking-wide hover:text-primary transition-colors duration-400">
            Contact
          </a>
        </div>
        <Link 
          to="/booking"
          className="bg-primary-container text-white px-8 py-3 rounded-lg font-sans tracking-widest text-xs uppercase hover:opacity-80 transition-all duration-400 ease-in-out active:scale-95"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
