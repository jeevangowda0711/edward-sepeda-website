import {Link} from 'react-router-dom';
import {CONTACT_EMAIL, SITE_NAME, SITE_OWNER} from '../constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-16 md:py-24 px-6 sm:px-10 lg:px-12 bg-surface-container border-t border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-serif italic text-xl text-primary">{SITE_NAME}</div>
            <p className="mt-1 text-sm text-primary/55">{SITE_OWNER}, owner &amp; curator</p>
          </div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary/40 leading-relaxed">
            © {year} {SITE_OWNER}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-[12px] uppercase tracking-widest text-primary mb-1 font-semibold">
            Navigate
          </h2>
          <nav aria-label="Footer" className="flex flex-col gap-3 font-sans text-[13px] uppercase tracking-widest">
            <Link className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit" to="/">
              Home
            </Link>
            <Link className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit" to="/booking">
              Services
            </Link>
            <Link className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit" to="/gallery">
              Gallery
            </Link>
            <Link
              className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit"
              to={{pathname: '/', hash: 'contact'}}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-sans text-[12px] uppercase tracking-widest text-primary mb-1 font-semibold">
            Connect
          </h2>
          <div className="flex flex-col gap-3 font-sans text-[13px] uppercase tracking-widest">
            <a
              className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary break-all"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            <a
              className="opacity-70 hover:opacity-100 transition-opacity text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit"
              href="https://www.instagram.com/yumyuckers_ent/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
