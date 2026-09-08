import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import AIAssistant from '../components/AIAssistant';
import logo from '../assets/logo.png';

const PublicLayout: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Pages with a dark hero image behind the transparent header
  const hasDarkHero = ['/', '/about', '/destinations', '/services', '/events', '/community', '/portfolio']
    .some(p => location.pathname === p || location.pathname.startsWith(p + '/'));

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/services', label: 'Services' },
    { to: '/events', label: 'Events' },
    { to: '/community', label: 'Community' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to: string): boolean =>
    to === '/' ? location.pathname === '/' : location.pathname === to || location.pathname.startsWith(to + '/');

  // Refined navigation link styles with premium underline animation
  const navLinkClasses = "relative text-xs xl:text-sm font-bold uppercase tracking-[0.08em] xl:tracking-[0.12em] whitespace-nowrap transition-colors duration-300 hover:text-sage py-2 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-sage after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <div className="flex flex-col min-h-screen font-body bg-sandstone">
      <AIAssistant />
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
          !hasDarkHero || scrolled ? 'bg-forest/95 text-white shadow-lg backdrop-blur-md py-3' : 'bg-transparent text-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Logo with interactive hover effects */}
          <Link to="/" className="flex items-center gap-3 group z-50 shrink-0 focus:outline-none" aria-label="Hill Travel Home">
            <img
              src={logo}
              alt="Hill Travel Rwanda"
              className="h-11 md:h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </Link>

          {/* Always-visible nav — centered on wide screens, horizontally scrollable on narrow ones */}
          <div className="flex flex-1 min-w-0 items-center justify-center overflow-hidden py-2">
            <nav className="flex overflow-x-auto scrollbar-hide">
              <ul className="m-auto flex items-center whitespace-nowrap gap-x-5 lg:gap-x-6 xl:gap-x-8 px-2">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      aria-current={isActive(link.to) ? 'page' : undefined}
                      className={`${navLinkClasses} ${isActive(link.to) ? 'text-sage after:scale-x-100 after:origin-bottom-left' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Link to="/booking" className={`shrink-0 flex items-center justify-center px-4 md:px-6 py-2.5 rounded-sm text-[11px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 ${
            scrolled ? 'bg-sandstone text-forest hover:bg-white hover:text-earth' : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
          }`}>
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
            <div className="space-y-6">
              <Link to="/" className="inline-flex items-center" aria-label="Hill Travel Home">
                <img src={logo} alt="Hill Travel Rwanda" className="h-12 w-auto object-contain" />
              </Link>
              <p className="text-sm leading-relaxed">
                Curating regenerative travel experiences that honor Rwanda's heritage, empower local communities, and preserve our natural wonders for generations to come.
              </p>
              <div className="flex gap-4">
                {[
                  {
                    label: 'Facebook',
                    href: 'https://facebook.com',
                    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
                  },
                  {
                    label: 'Instagram',
                    href: 'https://instagram.com',
                    path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z'
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-sandstone/20 flex items-center justify-center hover:bg-forest hover:border-forest transition-colors text-white transform hover:-translate-y-1 duration-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d={item.path} />
                    </svg>
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
                <li><Link to="/events" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Events & Occasions</Link></li>
                <li><Link to="/portfolio" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Impact Portfolio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Community & Impact</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/community" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Community Projects</Link></li>
                <li><Link to="/community/nyamirambo-womens-center" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Nyamirambo Women's Center</Link></li>
                <li><Link to="/community/red-rocks-initiative" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Red Rocks Initiative</Link></li>
                <li><Link to="/community/akagera-guides" className="hover:text-sage transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-px bg-sage transition-all duration-300"></span> Akagera Community Guides</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
              <p className="text-sm mb-2">Kigali Heights, 4th Floor</p>
              <p className="text-sm mb-4">Kigali, Rwanda</p>
              <p className="text-sm font-bold text-white">+250 788 123 456</p>
              <Link to="/contact" className="text-sm hover:text-sage cursor-pointer block">info@hilltravelrwanda.com</Link>
              <Link
                to="/booking"
                className="mt-6 inline-block px-6 py-2.5 bg-sage text-earth text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
              >
                Book Your Trip
              </Link>
            </div>
          </div>
          
          <div className="border-t border-sandstone/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase">
              <p>&copy; {new Date().getFullYear()} Hill Travel Rwanda Tours. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
            <p className="mt-6 text-xs tracking-normal text-center md:text-right">
              Designed &amp; developed by&nbsp;
              <a
                href="https://icetechrwanda.com"
                target="_blank"
                rel="noreferrer"
                className="text-white font-bold hover:text-sage transition-colors"
              >
                Ice Tech Rwanda
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;