export default function Footer() {
  return (
    <footer className="w-full py-24 px-12 bg-surface-container">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        <div className="flex flex-col gap-6">
          <div className="font-serif italic text-lg text-primary">Edward Sepeda</div>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary/40">
            © 2024 Edward Sepeda. The Modern Apothecary.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-[12px] uppercase tracking-widest text-primary mb-2 font-bold">Navigation</h5>
          <div className="flex flex-col gap-3 font-sans text-[12px] uppercase tracking-widest">
            <a className="opacity-60 hover:opacity-100 transition-opacity duration-500 text-primary" href="#">Private Parties</a>
            <a className="opacity-60 hover:opacity-100 transition-opacity duration-500 text-primary" href="#">Restaurants</a>
            <a className="opacity-60 hover:opacity-100 transition-opacity duration-500 text-primary" href="#">Classes</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-sans text-[12px] uppercase tracking-widest text-primary mb-2 font-bold">Connect</h5>
          <div className="flex flex-col gap-3 font-sans text-[12px] uppercase tracking-widest">
            <a className="opacity-60 hover:opacity-100 transition-opacity duration-500 text-primary" href="#">Instagram</a>
            <a className="opacity-60 hover:opacity-100 transition-opacity duration-500 text-primary" href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
