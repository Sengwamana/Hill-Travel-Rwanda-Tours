import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Refined navigation link styles with premium underline animation
  const navLinkClasses = "relative text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-sage py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-sage after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <div className="flex flex-col min-h-screen font-body bg-sandstone">
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-forest/95 text-white shadow-lg backdrop-blur-md py-3' : 'bg-transparent text-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with interactive hover effects */}
          <Link to="/" className="flex items-center gap-3 group z-50 focus:outline-none" aria-label="Hill Travel Home">
            <div className={`p-1.5 border-2 rounded-sm transition-all duration-300 group-hover:border-sage group-hover:text-sage group-focus:ring-2 group-focus:ring-sage ${scrolled ? 'border-white text-white' : 'border-white text-white'}`}>
               <span className="material-symbols-outlined text-3xl transform group-hover:rotate-12 transition-transform duration-300">travel_explore</span>
            </div>
            <div className="flex flex-col leading-none text-white transition-colors duration-300 group-hover:text-sage">
               <span className="font-serif text-xl font-bold tracking-tight uppercase">Hill Travel</span>
               <span className="text-[10px] tracking-[0.3em] font-light uppercase opacity-90 group-hover:opacity-100">Rwanda</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/about" className={navLinkClasses}>About</Link>
            <Link to="/destinations" className={navLinkClasses}>Destinations</Link>
            <Link to="/services" className={navLinkClasses}>Services</Link>
            <Link to="/experiences" className={navLinkClasses}>Experiences</Link>
            <Link to="/community" className={navLinkClasses}>Community</Link>
            <Link to="/portfolio" className={navLinkClasses}>Portfolio</Link>
          </nav>
          
          {/* Tablet Nav (condensed) */}
          <nav className="hidden md:flex xl:hidden items-center gap-6">
             <Link to="/destinations" className={navLinkClasses}>Destinations</Link>
             <Link to="/experiences" className={navLinkClasses}>Experiences</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/booking" className={`flex items-center justify-center px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 ${
              scrolled ? 'bg-sandstone text-forest hover:bg-white hover:text-earth' : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
            }`}>
              Book Your Trip
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sage active:scale-95 duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-4xl transition-transform duration-300" style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-forest z-40 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <Link to="/" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Home</Link>
            <Link to="/about" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">About</Link>
            <Link to="/destinations" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Destinations</Link>
            <Link to="/services" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Services</Link>
            <Link to="/experiences" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Experiences</Link>
            <Link to="/community" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Community</Link>
            <Link to="/portfolio" className="text-3xl font-serif text-white hover:text-sage transition-colors transform hover:scale-105 duration-300">Portfolio</Link>
            <Link to="/booking" className="px-10 py-4 bg-sandstone text-forest rounded-sm font-bold uppercase tracking-widest mt-8 shadow-xl hover:bg-white transition-colors transform hover:-translate-y-1">
              Book Your Trip
            </Link>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-earth text-sandstone/80 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 space-y-6">
              <div className="flex items-center gap-3 text-white">
                 <div className={`p-1.5 border-2 border-white rounded-sm`}>
                    <span className="material-symbols-outlined text-3xl">travel_explore</span>
                 </div>
                 <div className="flex flex-col leading-none text-white">
                    <span className="font-serif text-xl font-bold tracking-tight uppercase">Hill Travel</span>
                    <span className="text-[10px] tracking-[0.3em] font-light uppercase opacity-90">Rwanda</span>
                 </div>
              </div>
              <p className="text-sm leading-relaxed">
                Curating regenerative travel experiences that honor Rwanda's heritage, empower local communities, and preserve our natural wonders for generations to come.
              </p>
              <div className="flex gap-4">
                {['facebook', 'photo_camera', 'alternate_email'].map((icon) => (
                  <a key={icon} href="#" className="w-10 h-10 rounded-full border border-sandstone/20 flex items-center justify-center hover:bg-forest hover:border-forest transition-colors text-white transform hover:-translate-y-1 duration-300">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-serif text-lg mb-6">Discover</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> About Us</Link></li>
                <li><Link to="/destinations" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Destinations</Link></li>
                <li><Link to="/services" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Our Services</Link></li>
                <li><Link to="/portfolio" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Impact Portfolio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Our Impact</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/community" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Community Projects</Link></li>
                <li><Link to="/community" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Women's Cooperatives</Link></li>
                <li><Link to="/experiences" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Conservation Partners</Link></li>
                <li><Link to="/experiences" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Carbon Offsetting</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
              <p className="text-sm mb-2">Kigali Heights, 4th Floor</p>
              <p className="text-sm mb-4">Kigali, Rwanda</p>
              <p className="text-sm font-bold text-white">+250 788 123 456</p>
              <Link to="/contact" className="text-sm hover:text-sage cursor-pointer block">info@hilltravelrwanda.com</Link>
            </div>
          </div>
          
          <div className="border-t border-sandstone/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
            <p>&copy; 2024 Hill Travel Rwanda Tours. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;