import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="relative min-h-screen flex flex-col">
        <a
          className="absolute left-[-9999px] top-4 z-[100] rounded-md bg-primary px-4 py-3 text-sm font-medium text-white shadow-lg outline-none ring-2 ring-white ring-offset-2 ring-offset-surface transition-[left,transform] focus:left-4 focus:translate-x-0"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="flex-grow" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
