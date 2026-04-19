import type {FormEvent} from 'react';
import {motion} from 'motion/react';
import {Droplets, Pill, Sprout, Sun, Wine} from 'lucide-react';
import {CONTACT_EMAIL, SITE_OWNER} from '../constants';

export default function Booking() {
  function handleConsultationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const gathering = String(data.get('gathering') ?? '').trim();
    const date = String(data.get('eventDate') ?? '').trim();
    const hostName = String(data.get('hostName') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const cocktail = String(data.get('cocktail') ?? '').trim();
    const flavors = data.getAll('flavor').map(String);
    const notes = String(data.get('notes') ?? '').trim();

    const subject = encodeURIComponent(
      hostName ? `Consultation request — ${hostName} (Mixed Meaning)` : 'Consultation request (Mixed Meaning)',
    );
    const lines = [
      `Nature of gathering: ${gathering || '—'}`,
      `Preferred date: ${date || '—'}`,
      `Host: ${hostName || '—'}`,
      `Email: ${email || '—'}`,
      `Favorite cocktail direction: ${cocktail || '—'}`,
      flavors.length ? `Flavor profiles: ${flavors.join(', ')}` : 'Flavor profiles: —',
      '',
      'Notes / allergies / preferences:',
      notes || '—',
      '',
      '(Sent via mixedmeaning.com booking form)',
    ];
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  const flavorChoices = [
    {key: 'sweet', label: 'Sweet', icon: Droplets},
    {key: 'bitter', label: 'Bitter', icon: Pill},
    {key: 'sour', label: 'Sour', icon: Sun},
    {key: 'herbal', label: 'Herbal', icon: Sprout},
  ] as const;

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      className="pt-28 pb-16 md:pb-24 px-4 sm:px-6 min-h-screen bg-surface"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start gap-10 md:gap-12">
          <div className="md:w-2/3 w-full">
            <motion.h1
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.2}}
              className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-tight mb-6 md:mb-8 text-primary"
            >
              Crafting your <br />
              personal elixir.
            </motion.h1>
            <motion.p
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.3}}
              className="font-sans text-base sm:text-lg text-primary/70 max-w-lg leading-relaxed"
            >
              For a private event or an intimate class, a cocktail is a conversation. Share the tone
              of your gathering so {SITE_OWNER} can shape an experience that feels authored for your
              guests alone.
            </motion.p>
          </div>
          <div className="md:w-1/3 w-full flex md:justify-end">
            <motion.div
              initial={{scale: 0.96, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{delay: 0.4}}
              className="w-full max-w-xs sm:max-w-sm md:max-w-[12rem] lg:max-w-none md:w-48 h-52 md:h-64 bg-surface-container overflow-hidden rounded-xl border border-outline-variant/15 flex items-center justify-center"
              aria-hidden
            >
              <Wine className="w-16 h-16 text-primary/15" strokeWidth={1} />
            </motion.div>
          </div>
        </div>

        <motion.section
          initial={{y: 40, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.5}}
          className="bg-surface-low p-6 sm:p-12 md:p-16 lg:p-20 rounded-xl relative overflow-hidden"
          aria-labelledby="booking-form-heading"
        >
          <h2 className="sr-only" id="booking-form-heading">
            Consultation request form
          </h2>
          <form className="space-y-12 md:space-y-16 relative z-10" noValidate onSubmit={handleConsultationSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="flex flex-col gap-3">
                <label
                  className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60"
                  htmlFor="gathering"
                >
                  Nature of gathering
                </label>
                <select
                  required
                  className="appearance-none w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all cursor-pointer text-primary"
                  defaultValue=""
                  id="gathering"
                  name="gathering"
                >
                  <option disabled value="">
                    Select experience…
                  </option>
                  <option value="Mixology class">Mixology class</option>
                  <option value="Private event / bar service">Private event / bar service</option>
                  <option value="Restaurant consulting">Restaurant consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60"
                  htmlFor="event-date"
                >
                  Preferred date
                </label>
                <input
                  className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all text-primary"
                  id="event-date"
                  name="eventDate"
                  type="date"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="flex flex-col gap-3">
                <label
                  className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60"
                  htmlFor="host-name"
                >
                  Host name
                </label>
                <input
                  autoComplete="name"
                  className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all placeholder:text-primary/25 text-primary"
                  id="host-name"
                  name="hostName"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60"
                  htmlFor="booking-email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all placeholder:text-primary/25 text-primary"
                  id="booking-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60" htmlFor="cocktail">
                Personal favorite cocktail (or direction)
              </label>
              <select
                className="appearance-none w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all cursor-pointer text-primary"
                defaultValue=""
                id="cocktail"
                name="cocktail"
              >
                <option value="">Select an inspiration…</option>
                <option value="Classic Negroni">Classic Negroni</option>
                <option value="Old Fashioned">Old Fashioned</option>
                <option value="French 75">French 75</option>
                <option value="The Last Word">The Last Word</option>
                <option value="Vesper Martini">Vesper Martini</option>
                <option value="Something bespoke">Something bespoke</option>
              </select>
            </div>

            <fieldset className="space-y-6 border-0 p-0 m-0 min-w-0">
              <legend className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60 mb-2">
                Target flavor profiles for the group
              </legend>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {flavorChoices.map(({key, label, icon: Icon}) => (
                  <label
                    key={key}
                    className="relative cursor-pointer rounded-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-surface-low"
                  >
                    <input className="peer sr-only" name="flavor" type="checkbox" value={label} />
                    <span className="bg-surface border border-outline-variant/20 peer-checked:bg-primary-container peer-checked:text-white peer-checked:border-primary-container p-5 sm:p-6 rounded-lg transition-all duration-300 flex flex-col items-center gap-3 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
                      <Icon aria-hidden className="w-5 h-5" />
                      <span className="font-sans text-xs sm:text-sm uppercase tracking-wider text-center leading-tight">
                        {label}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-3">
              <label className="font-sans text-xs uppercase tracking-[0.2em] text-primary/60" htmlFor="notes">
                Allergies, dietary needs, or preferences we should know
              </label>
              <textarea
                className="bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-3 text-base sm:text-lg font-sans transition-all placeholder:text-primary/25 resize-none text-primary min-h-[7rem]"
                id="notes"
                name="notes"
                placeholder="Peanuts, stone fruit, dairy, botanical sensitivities, no-ABV requests…"
                rows={4}
              />
            </div>

            <div className="pt-4 flex flex-col items-center gap-4">
              <button
                className="bg-primary text-white px-12 sm:px-16 py-4 sm:py-5 rounded-lg font-sans uppercase tracking-[0.25em] text-xs sm:text-sm hover:opacity-90 active:scale-[0.99] transition-all duration-500 shadow-xl shadow-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full sm:w-auto"
                type="submit"
              >
                Request consultation
              </button>
              <p className="text-[11px] text-primary/45 text-center max-w-md leading-relaxed">
                Opens your email app to reach <a className="underline underline-offset-2 hover:text-primary" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You can edit before sending.
              </p>
            </div>
          </form>
        </motion.section>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="p-6 sm:p-8 bg-surface-high rounded-xl border border-outline-variant/10">
              <h3 className="font-serif italic text-xl sm:text-2xl mb-3 text-primary">The personal touch</h3>
              <p className="font-sans text-sm leading-relaxed text-primary/70">
                Seasonal botanicals and small-batch ingredients, approached with the same care as a
                private service—so your guests feel considered, safe, and delighted.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:block" aria-hidden />
          <div className="md:col-span-5 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] block text-primary/40">Next steps</span>
            <h4 className="font-serif text-2xl sm:text-3xl text-primary">Personalized follow-up.</h4>
            <p className="font-sans text-primary/70 leading-relaxed">
              {SITE_OWNER} reviews each request personally. Expect a thoughtful reply at{' '}
              <a className="underline underline-offset-2 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>{' '}
              to align on date, menu direction, and details.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
