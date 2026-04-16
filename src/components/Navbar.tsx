import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const hash = location.hash;

  const isActive = (targetPath: string, targetHash?: string) => {
    if (targetHash) {
      return path === targetPath && hash === targetHash;
    }
    if (targetPath === '/' && hash) {
      return false;
    }
    return path === targetPath;
  };

  const linkClass = (targetPath: string, targetHash?: string) =>
    isActive(targetPath, targetHash)
      ? 'text-primary font-bold border-b border-primary pb-1 font-sans tracking-wide'
      : 'text-primary/70 font-medium font-sans tracking-wide hover:text-primary transition-colors duration-400';

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-serif italic tracking-tight text-primary">
          MIXED MEANING
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/booking" className={linkClass('/booking')}>
            Services
          </Link>
          <Link to="/gallery" className={linkClass('/gallery')}>
            Gallery
          </Link>
          <Link
            to="/#contact"
            className={linkClass('/', '#contact')}
          >
            Contact
          </Link>
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
