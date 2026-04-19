import {motion} from 'motion/react';
import {Image as ImageIcon} from 'lucide-react';
import {galleryItems} from '../data/gallery';

export default function Gallery() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.8}}
      className="pt-28 pb-16 md:pb-24 px-4 sm:px-6 min-h-screen bg-surface"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.h1
          initial={{y: 20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{delay: 0.2}}
          className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-tight mb-4 text-center text-primary"
        >
          Gallery
        </motion.h1>
        <p className="text-center text-primary/60 text-sm sm:text-base max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          A growing collection of cocktails, events, and atmosphere. New photography and films will
          appear here as they are produced.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 list-none p-0 m-0">
          {galleryItems.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{y: 24, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.08 * i + 0.15}}
              className="min-w-0"
            >
              {item.kind === 'placeholder' ? (
                <div className="aspect-square bg-surface-container rounded-xl border border-outline-variant/15 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <ImageIcon aria-hidden className="w-10 h-10 text-primary/25" strokeWidth={1.25} />
                  <span className="text-xs uppercase tracking-[0.2em] font-sans text-primary/45">
                    Reserved for upcoming work
                  </span>
                </div>
              ) : item.kind === 'image' ? (
                <figure className="m-0 flex flex-col rounded-xl overflow-hidden border border-outline-variant/15 bg-surface-container shadow-sm">
                  <div className="aspect-square relative w-full bg-surface-high">
                    <img
                      alt={item.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      src={item.src}
                    />
                  </div>
                  {item.caption ? (
                    <figcaption className="px-3 py-2 text-xs text-primary/55 text-center border-t border-outline-variant/10">
                      {item.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ) : (
                <div className="aspect-square rounded-xl overflow-hidden border border-outline-variant/15 bg-black shadow-sm">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                  />
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
