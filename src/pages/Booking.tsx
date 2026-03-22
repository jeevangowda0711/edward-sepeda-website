import { motion } from 'motion/react';
import { Droplets, Pill, Sun, Sprout } from 'lucide-react';

export default function Booking() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-40 pb-24 px-6 min-h-screen bg-surface"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Section / Context */}
        <div className="mb-24 flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-2/3">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-5xl md:text-6xl italic leading-tight mb-8"
            >
              Crafting your <br/>personal elixir.
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-sans text-lg text-primary/70 max-w-lg leading-relaxed"
            >
              Whether for a private soirée or an intimate mixology class, I believe a cocktail is a conversation. Please share your leanings and cravings so I may tailor a welcome experience exclusively for your event.
            </motion.p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 h-64 bg-surface-container overflow-hidden rounded-xl border border-outline-variant/15"
            >
              <img 
                alt="A moody crystal glass with botanical garnishes" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6qqnOTi1-K6JWfpv8sh-pgHiF0BWgqIp5VpJ68Fv34TmBBYIzmOsb7L9rvFvaULVLCwbbaqRORCPjbhE9IqK4LS7jJZN7ZovzxPE6YzZGgeNPhD7nc5I9Ij7ivakAitDL7qD5-II3BbuI8fmOeeI1O2BMJc6T_ZrU0et03uSvSFXYhkEq89BGZhKZ8A9b7Ulm3aX6TNTsxEwukI1WJr644wzM9wNceEPYoqmbcs-sUp8SHgtA3wXK_75w1OgyHnSXa2y6iVz6s6pt"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Form Container */}
        <motion.section 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-surface-low p-12 md:p-20 rounded-xl relative overflow-hidden"
        >
          <form className="space-y-16 relative z-10" onSubmit={(e) => e.preventDefault()}>
            {/* Consultation Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4 group">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">Nature of Gathering</label>
                <div className="relative">
                  <select className="appearance-none w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all cursor-pointer">
                    <option disabled selected value="">Select experience...</option>
                    <option value="private_party">Private Party</option>
                    <option value="mixology_class">Mixology Class</option>
                    <option value="corporate_event">Corporate Event</option>
                    <option value="dinner_pairing">Curated Dinner Pairing</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2 group">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">Preferred Date</label>
                <input className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all" type="date"/>
              </div>
            </div>

            {/* Identification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-2 group">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">Host Name</label>
                <input className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all placeholder:text-outline-variant/40" placeholder="Edward Sepeda" type="text"/>
              </div>
              <div className="flex flex-col gap-2 group">
                <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">Email Address</label>
                <input className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all placeholder:text-outline-variant/40" placeholder="host@example.com" type="email"/>
              </div>
            </div>

            {/* Favorite Cocktail */}
            <div className="flex flex-col gap-4 group">
              <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">What's your personal favorite cocktail?</label>
              <div className="relative">
                <select className="appearance-none w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all cursor-pointer">
                  <option disabled selected value="">Select an inspiration...</option>
                  <option value="negroni">Classic Negroni</option>
                  <option value="old_fashioned">Old Fashioned</option>
                  <option value="french_75">French 75</option>
                  <option value="last_word">The Last Word</option>
                  <option value="vesper">Vesper Martini</option>
                  <option value="custom">Something entirely bespoke</option>
                </select>
              </div>
            </div>

            {/* Flavor Profile Selection */}
            <div className="space-y-8">
              <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60">Target Flavor Profiles for the Group</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Sweet", icon: <Droplets size={20} /> },
                  { label: "Bitter", icon: <Pill size={20} /> },
                  { label: "Sour", icon: <Sun size={20} /> },
                  { label: "Herbal", icon: <Sprout size={20} /> }
                ].map((flavor, i) => (
                  <label key={i} className="relative group cursor-pointer">
                    <input className="peer hidden" name="flavor" type="checkbox" value={flavor.label.toLowerCase()}/>
                    <div className="bg-surface border border-outline-variant/20 peer-checked:bg-primary-container peer-checked:text-white p-6 rounded-lg transition-all duration-400 flex flex-col items-center gap-3">
                      {flavor.icon}
                      <span className="font-sans text-sm uppercase tracking-wider">{flavor.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Allergies Area */}
            <div className="flex flex-col gap-4 group">
              <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 group-focus-within:text-primary transition-colors">Any guest allergies or preferences Edward should note?</label>
              <textarea className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-lg font-sans transition-all placeholder:text-outline-variant/40 resize-none" placeholder="Peanuts, stone fruit, dairy, botanical sensitivities, or no-ABV requests..." rows={4}></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-12 flex justify-center">
              <button className="bg-primary text-white px-16 py-5 rounded-lg font-sans uppercase tracking-[0.3em] text-sm hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-500 shadow-xl shadow-primary/10" type="submit">
                Request Consultation
              </button>
            </div>
          </form>
        </motion.section>

        {/* Secondary Content */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="p-8 bg-surface-high rounded-xl">
              <h3 className="font-serif italic text-2xl mb-4">The Personal Touch</h3>
              <p className="font-sans text-sm leading-relaxed text-primary/70">
                I use only seasonal botanicals and small-batch tinctures. Every profile submitted is treated with the same reverence I bring to my private events, ensuring your party is as safe as it is delightful.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block"></div>
          <div className="md:col-span-5 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] block text-primary/40">Next Steps</span>
            <h4 className="font-serif text-3xl">Personalized Review.</h4>
            <p className="font-sans text-primary/70 italic">Within 24 hours of submission, I will personally review your preferences and reach out to discuss the vision for your event.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
