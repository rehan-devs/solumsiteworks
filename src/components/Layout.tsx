import { Outlet, Link, useLocation } from 'react-router-dom';
import { HardHat, Menu, X, MapPin, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-[#222222] text-[#e5e0d8] py-2 px-4 text-xs md:text-sm font-medium hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6 max-w-7xl mx-auto w-full">
          <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> bids@solumsitework.com</span>
          <span className="flex items-center ml-auto"><MapPin className="w-4 h-4 mr-2" /> Nationwide Commercial Services</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-[#3b2f28] p-2 rounded-sm group-hover:bg-[#475569] transition-colors">
              <HardHat className="w-6 h-6 text-[#e5e0d8]" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#111111] tracking-tight leading-none">SOLUM</h1>
              <p className="text-[10px] md:text-xs font-semibold text-[#475569] tracking-widest uppercase">Site Work</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  location.pathname === link.path ? 'text-[#3b2f28] border-b-2 border-[#3b2f28]' : 'text-gray-500 hover:text-[#111111]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-[#3b2f28] hover:bg-[#111111] text-white px-6 py-2.5 rounded-sm font-semibold text-sm transition-colors flex items-center">
              Request a Bid <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#111111] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-4 text-base font-bold uppercase tracking-wide border-b border-gray-50 ${
                    location.pathname === link.path ? 'text-[#3b2f28]' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link to="/contact" className="w-full bg-[#3b2f28] text-white px-3 py-4 rounded-sm font-bold text-center flex items-center justify-center">
                  Request a Bid <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#3b2f28] p-2 rounded-sm">
                <HardHat className="w-6 h-6 text-[#e5e0d8]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight leading-none">SOLUM</h1>
                <p className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">Site Work</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Precision earthwork, site preparation, and infrastructure development for commercial projects nationwide.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Site Preparation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mass Excavation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Underground Utilities</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Demolition</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Fine Grading</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Safety & OSHA</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Equipment Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#475569] shrink-0" />
                <span>Headquarters: <br/>1000 Industrial Pkwy, <br/>Dallas, TX 75201</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#475569] shrink-0" />
                <span>bids@solumsitework.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Solum Site Work. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Licensed</span>
            <span>&bull;</span>
            <span>Bonded</span>
            <span>&bull;</span>
            <span>Insured</span>
            <span>&bull;</span>
            <span>OSHA Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}