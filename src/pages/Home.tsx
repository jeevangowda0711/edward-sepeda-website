import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="py-32 flex flex-col items-center justify-center min-h-[70vh] bg-surface-low">
        <h1 className="font-serif text-5xl md:text-7xl italic mb-16 text-primary tracking-[0.2em] uppercase">Mixed Meaning</h1>

        <div className="w-full max-w-4xl px-6 md:px-0">
          <div className="aspect-video bg-surface-container rounded-xl flex items-center justify-center border border-outline-variant/20 relative overflow-hidden group cursor-pointer shadow-sm">
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-500">
              <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <span className="absolute top-6 left-6 text-sm tracking-[0.2em] uppercase font-bold text-primary/70">Teaser...</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-24 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg">
              <img
                alt="Edward Sepeda"
                className="w-full h-full object-cover"
                src="/Screenshot 2026-03-22 at 12.51.36 PM.png"
              />
            </div>
            <div className="absolute -right-8 top-1/2 bg-secondary-container text-primary px-6 py-3 rounded-full shadow-sm flex items-center gap-2">
              <User size={16} />
              <span className="text-xs uppercase tracking-widest font-bold">The Creator</span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-12">
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              Edward <br />Sepeda
            </h2>
            <div className="max-w-xl flex flex-col gap-6">
              <p className="text-primary/70 text-lg leading-relaxed">
                Cocktail maker, creator, and teacher. Curating rare spirits and sensory precision for private events and culinary consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Meaning Section */}
      <section className="py-32 bg-surface-low">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl italic mb-8 text-primary">Mixed Meaning...</h2>
            <div className="space-y-6">
              <p className="text-primary/70 text-lg leading-relaxed">
                More than just a drink, it's an experience that challenges expectations. We blend traditional techniques with avant-garde concepts to create moments of genuine connection and sensory discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-32 bg-surface overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-6xl mb-12 italic">Let us curate <br />your evening.</h2>
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">Studio</span>
                <p className="text-2xl font-light">Edwards Domain, <br />2513 W Le Moyne St, Chicago, IL 60622</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">Inquiries</span>
                <p className="text-2xl font-light editorial-underline inline-block">hello@mixedmeaning.com</p>
              </div>
              <div className="flex gap-8 pt-4">
                <a className="text-primary/60 hover:text-primary transition-colors" href="https://www.instagram.com/yumyuckers_ent/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="text-primary/60 hover:text-primary transition-colors" href="#">Journal</a>
              </div>
            </div>
          </div>
          <div className="bg-surface-container p-12 md:p-16 rounded-lg">
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50">Full Name</label>
                <input
                  className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-xl placeholder:text-primary/20"
                  placeholder="Gideon Sterling"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50">Email Address</label>
                <input
                  className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-xl placeholder:text-primary/20"
                  placeholder="gideon@sterling.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50">Experience Interest</label>
                <select className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-xl text-primary/40 appearance-none cursor-pointer">
                  <option>Mixology Class</option>
                </select>
              </div>
              <button className="bg-primary text-white py-6 rounded-lg font-sans tracking-widest uppercase text-sm mt-8 hover:bg-primary-container transition-all">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
