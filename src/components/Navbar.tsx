import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Menu, X} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const hash = location.hash;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [path, hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const isActive = (targetPath: string, targetHash?: string) => {
    if (targetHash !== undefined) {
      return path === targetPath && hash === targetHash;
    }
    if (targetPath === '/' && hash) {
      return false;
    }
    return path === targetPath;
  };

  const linkClass = (targetPath: string, targetHash?: string) =>
    isActive(targetPath, targetHash)
      ? 'text-primary font-semibold border-b border-primary pb-1 font-sans tracking-wide'
      : 'text-primary/70 font-medium font-sans tracking-wide hover:text-primary transition-colors duration-400';

  function handleContactClick() {
    if (path === '/' && hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <nav aria-label="Primary" className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-6 max-w-screen-2xl mx-auto gap-4">
        <Link
          className="text-xl sm:text-2xl font-serif italic tracking-tight text-primary shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm"
          to="/"
        >
          MIXED MEANING
        </Link>

        <div className="hidden md:flex gap-10 lg:gap-12 items-center">
          <Link className={linkClass('/')} to="/">
            Home
          </Link>
          <Link className={linkClass('/booking')} to="/booking">
            Services
          </Link>
          <Link className={linkClass('/gallery')} to="/gallery">
            Gallery
          </Link>
          <Link
            className={`${linkClass('/', '#contact')} inline-block`}
            to={{pathname: '/', hash: 'contact'}}
            onClick={handleContactClick}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <X aria-hidden className="w-6 h-6" /> : <Menu aria-hidden className="w-6 h-6" />}
          </button>
          <Link
            className="bg-primary-container text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-sans tracking-widest text-[10px] sm:text-xs uppercase hover:opacity-90 transition-all duration-400 ease-in-out active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary whitespace-nowrap"
            to="/booking"
          >
            Book now
          </Link>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-outline-variant/15 bg-surface/95 backdrop-blur-xl px-4 pb-6 pt-2" id="mobile-nav">
          <div className="flex flex-col gap-1 max-w-screen-2xl mx-auto">
            <Link className={`block py-3 w-fit ${linkClass('/')}`} to="/">
              Home
            </Link>
            <Link className={`block py-3 w-fit ${linkClass('/booking')}`} to="/booking">
              Services
            </Link>
            <Link className={`block py-3 w-fit ${linkClass('/gallery')}`} to="/gallery">
              Gallery
            </Link>
            <Link
              className={`block py-3 w-fit ${linkClass('/', '#contact')}`}
              to={{pathname: '/', hash: 'contact'}}
              onClick={handleContactClick}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
