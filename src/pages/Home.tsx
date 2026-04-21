import type {FormEvent} from 'react';
import {motion} from 'motion/react';
import {User} from 'lucide-react';
import {CONTACT_EMAIL, SITE_OWNER, TEASER_VIDEO_ID} from '../constants';

export default function Home() {
  function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const interest = String(data.get('interest') ?? '').trim();
    const subject = encodeURIComponent(
      name ? `Inquiry from ${name} — Mixed Meaning` : 'Inquiry — Mixed Meaning',
    );
    const lines = [
      name && `Name: ${name}`,
      email && `Email: ${email}`,
      interest && `Interest: ${interest}`,
      '',
      '(Written via mixedmeaning.com contact form)',
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
    >
      <section className="pt-28 pb-16 md:py-24 lg:py-32 flex flex-col items-center justify-center min-h-[55vh] md:min-h-[65vh] bg-surface-low px-4 sm:px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl italic mb-10 md:mb-16 text-primary tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center px-2">
          Mixed Meaning
        </h1>

        <div className="w-full max-w-4xl px-2 sm:px-4 md:px-0">
          <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm bg-black">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${TEASER_VIDEO_ID}`}
              title="Mixed Meaning teaser video"
            />
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-primary/50">
            Teaser film
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-5 relative mx-auto w-full max-w-md md:max-w-none">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg">
              <img
                alt={`${SITE_OWNER}, owner and curator of Mixed Meaning`}
                className="w-full h-full object-cover"
                decoding="async"
                src="/edward-sepeda-portrait.png"
              />
            </div>
            {/* <div className="absolute right-4 md:-right-8 top-1/2 z-10 -translate-y-1/2 bg-secondary-container text-primary px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-sm flex items-center gap-2 max-w-[calc(100%-2rem)]">
              <User aria-hidden size={16} />
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold whitespace-nowrap">
                Owner &amp; Curator
              </span>
            </div> */}
          </div>
          <div className="md:col-span-7 flex flex-col gap-8 md:gap-12 text-center md:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary/45 mb-3">{SITE_OWNER}</p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
                Edward <br className="hidden sm:block" />
                Sepeda
              </h2>
            </div>
            <div className="max-w-xl mx-auto md:mx-0 flex flex-col gap-6">
              <p className="text-primary/70 text-base sm:text-lg leading-relaxed">
              Edward Sepeda found a love of cocktail bartending some dozen or so years ago and has since been honing his craft in bars & restaurants across the US and abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-surface-low">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl italic mb-6 md:mb-8 text-primary">
              Mixed Meaning
            </h2>
            <div className="space-y-6">
              <p className="text-primary/70 text-base sm:text-lg leading-relaxed">
              Mixed Meaning aims to demystify the alchemy you see behind the bar and provide you with the skillset to make all manner of cocktails at home.
              </p>
              {/* <p className="text-primary/70 text-base sm:text-lg leading-relaxed">
                Whether it is an intimate gathering or a hands-on masterclass, the goal is the same:
                genuine connection and discovery in every sip.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 lg:py-32 bg-surface overflow-hidden scroll-mt-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-8 md:mb-12 italic">
              Let us curate <br />
              your evening.
            </h2>
            <div className="flex flex-col gap-10">
              {/* <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">
                  Studio
                </span>
                <p className="text-xl sm:text-2xl font-light leading-snug">
                  Edward&apos;s Domain,
                  <br />
                  2513 W Le Moyne St, Chicago, IL 60622
                </p>
              </div> */}
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-primary/40 block mb-4">
                  Inquiries
                </span>
                <a
                  className="text-xl sm:text-2xl font-light editorial-underline inline-block text-primary hover:text-primary-container transition-colors"
                  href={`mailto:${CONTACT_EMAIL}`}
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex justify-center lg:justify-start gap-8 pt-2">
                <a
                  className="text-primary/60 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  href="https://www.instagram.com/yumyuckers_ent/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="bg-surface-container p-8 sm:p-12 md:p-16 rounded-lg">
            <form className="flex flex-col gap-10 md:gap-12" noValidate onSubmit={handleInquirySubmit}>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50"
                  htmlFor="inquiry-name"
                >
                  Full Name
                </label>
                <input
                  autoComplete="name"
                  className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-lg sm:text-xl placeholder:text-primary/20"
                  id="inquiry-name"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50"
                  htmlFor="inquiry-email"
                >
                  Email Address
                </label>
                <input
                  autoComplete="email"
                  className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-lg sm:text-xl placeholder:text-primary/20"
                  id="inquiry-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/50"
                  htmlFor="inquiry-interest"
                >
                  Experience interest
                </label>
                <select
                  className="bg-transparent border-0 border-b border-outline-variant/40 py-4 focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-lg sm:text-xl text-primary appearance-none cursor-pointer"
                  defaultValue=""
                  id="inquiry-interest"
                  name="interest"
                  required
                >
                  <option disabled value="">
                    Select an option…
                  </option>
                  <option value="Mixology class">Mixology class</option>
                  <option value="Private event / bar service">Private event / bar service</option>
                  <option value="Restaurant consulting">Restaurant consulting</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>
              <button
                className="bg-primary text-white py-5 sm:py-6 rounded-lg font-sans tracking-widest uppercase text-sm mt-4 hover:bg-primary-container transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                type="submit"
              >
                Send request
              </button>
              <p className="text-[11px] text-primary/45 leading-relaxed">
                Opens your email app to send a message to {CONTACT_EMAIL}. You can edit before sending.
              </p>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
