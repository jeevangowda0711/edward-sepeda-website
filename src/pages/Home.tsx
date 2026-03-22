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
      <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Cinematic close-up of a dark cocktail" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq24NHn2lSodq3bXgSZ7dGBmB93jOCDqQdqmWHh2o9jnva0WeDcS0yt7Z4TAc-4EATTovWQ0LQfN-2KpHDARmGbbxICshFOMh9oNHSFTjcieyzM3WfRnq1nSAcGXLT2qWuywuci4IaYZKir66_lK6PbhAugeRGB56TT59Y8ZKPRCNKMUj21sP7DbrizAl532s2d8jDDd8xhGW-27rzMYgo5OzwFJq_5lc2X6GZt8VBV3JnMoBsV6hOEI1HyyXMXAlR01t59Xj13en0"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        </div>
        <div className="relative z-10 px-12 md:px-24 max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-6xl md:text-8xl text-white italic leading-tight tracking-tight"
            >
              Edward <br/>Sepeda
            </motion.h1>
            <motion.p 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-surface-high text-lg max-w-md font-light leading-relaxed"
            >
              Cocktail maker, creator, and teacher. Curating rare spirits and sensory precision for private events and culinary consultation.
            </motion.p>
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <Link to="/booking" className="bg-white text-primary px-10 py-4 rounded-lg font-sans font-semibold hover:bg-surface-low transition-colors duration-500">
                Book an Experience
              </Link>
              <a className="text-white font-serif italic editorial-underline text-xl" href="#">View Portfolio</a>
            </motion.div>
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
                src="https://lh3.googleusercontent.com/aida/ADBb0ujSa3Onkk7_6lPSLs2WushhS3AkIzfOYb3BOohpJ3zvwSCzrl7OUyvXWJD4UkK8o31Yy1OFzNG0i0c2-jpA55P8Xc4Mg2HTMMABZmmcT72kaUxmF9qODu7vs3aBsC4FWLdOZ6Ia3kx6CqLPeNIBperhEAkef4yp-uBddz9VLmAHYdcPdRtg3XPBg4tXqtYnGPQEQrQvPtu1XSEoyF-JC0CaIbBtanVxvVjvyJJvnu8_hsmuDyuMLlgJyAl5sC5F6S6LwATUCdi0dTA"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -right-8 top-1/2 bg-secondary-container text-primary px-6 py-3 rounded-full shadow-sm flex items-center gap-2">
              <User size={16} />
              <span className="text-xs uppercase tracking-widest font-bold">The Creator</span>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-12">
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-primary/40">The Craft</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight">
              Elevated <br/>Liquid Art
            </h2>
            <div className="max-w-xl flex flex-col gap-6">
              <p className="text-primary/70 text-lg leading-relaxed">
                With a focus on private parties, restaurant consulting, and immersive cocktail classes, I bring a deliberate, editorial approach to every glass. My work is a balance of seasonal storytelling and technical precision.
              </p>
              <p className="text-primary/70 text-lg leading-relaxed">
                Whether I am redesigning a high-end bar program or teaching a masterclass in clarified spirits, the goal is always the same: to create a remedy for the mundane.
              </p>
            </div>
            <div className="pt-8">
              <a className="font-serif text-2xl italic text-primary editorial-underline" href="#">Explore My Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-low py-32">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex justify-between items-end mb-24">
            <h3 className="font-serif text-4xl italic">Core Services</h3>
            <p className="text-xs uppercase tracking-widest text-primary/50 mb-2">Bespoke Engagements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Private Parties",
                desc: "Tailored beverage experiences for intimate gatherings and grand celebrations, featuring seasonal ingredients and artisan service.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFRSJcRwNhEnQ1rZW1ksZP51d8xrwHBUlKi2LA8wuDgcwEcTz9q76fJKT-0gilb6h4xxt_skyAazHJH4l3yvl3thGzKvjUz9mjcqQS3ljym1A9AY0e7856Y0Z5FDeW1tu5Pm4cr3uE4kyOSnZPjYeeegXtQ39WBTSdJJxjy8IIUp7BYJ_bY6gpQkP1gsMh1Lh8EBOo3MXjVCpkPv2RcNDj-z7ECpOu0Mpa3OXTo8zjCzKIn5djhLYZrotUVNsaRD-mDgInlOOvK6pd"
              },
              {
                title: "Restaurant Consulting",
                desc: "Menu development, staff training, and operational refinement to elevate beverage programs to world-class standards.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDshnOAM8vV3CTTNBh8bz3MmrQh7p7sE2FNSRDDOVgqtnEkq3N_bkIvDpYlZJ0PTsKfRbIo00kxMmb3w72-VL3eUx-R2gMxTMRcR4cPAbiuhBsyIEAZ4kGs6YWMgjfx9LJy3_a5r4CoXUJ7Hj5bwzgilcKuavYpn-3w_uqC4qemQ-JgXUoS5xiqJqg-Ywu-6DNcGZww276KXCStGSS3-B5h7skukipc6awR-pronzuQ0CUD_-z1cmsjOTgEKMY_h6DJgyATDyUHXT-e"
              },
              {
                title: "Cocktail Classes",
                desc: "Interactive masterclasses teaching the art and science of mixology, from classic foundations to contemporary techniques.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFB6jwD0SRLe1o2FO_5b9caCFW4NgvkvFSeMPO5b8mP0CAaMnoiPs_xoqffn7GazJe0_ChN78iK2qhJaWIbMEJB-oTTqWotLX5YZbYoPAVlQAseuyoL90gIGLA_dUTtd2TbuAAn2bced3kyC913A2rU4Rt2pj6B0YMeBCKDxq_FisoGsFGXre0m9AkB_TrKEzdOAZfetSebHcRv07zva6ahRCedgErBhd4866z6hhm_NN_SXKOq2BNl5Rwyt6SpDGGBXtsyxJJiDL"
              }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-white p-4 rounded-lg mb-8 transition-all duration-500 group-hover:-translate-y-2 border border-outline-variant/15">
                  <div className="aspect-square bg-surface-high overflow-hidden rounded-md mb-6">
                    <img 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      src={service.img}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="font-serif text-2xl italic mb-2">{service.title}</h4>
                  <p className="text-sm text-primary/60 font-sans leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-6xl mb-12 italic">Let us curate <br/>your evening.</h2>
            <div className="flex flex-col gap-10">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">Studio</span>
                <p className="text-2xl font-light">The Heritage District, <br/>14th Studio Ave, London</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">Inquiries</span>
                <p className="text-2xl font-light editorial-underline inline-block">hello@edwardsepeda.com</p>
              </div>
              <div className="flex gap-8 pt-4">
                <a className="text-primary/60 hover:text-primary transition-colors" href="#">Instagram</a>
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
                  <option>Private Party</option>
                  <option>Restaurant Consulting</option>
                  <option>Cocktail Class</option>
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
