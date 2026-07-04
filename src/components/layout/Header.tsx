import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { siteConfig } from '@/data/siteData';
const logo = `${import.meta.env.BASE_URL}assets/sri-jayam-logo.png`;

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/menu', label: 'Menu' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-10 flex items-center gap-3"
            onClick={() => setIsMobileOpen(false)}
          >
            <img
              src={logo}
              alt="Sri Jayam"
              className="h-12 w-auto object-contain"
            />

            <div>
              <h1 className="font-heading text-xl md:text-2xl font-bold">
                <span className={isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}>
                  Sri{' '}
                </span>
                <span className="text-gold-500">Jayam</span>
              </h1>

              <p
                className={`text-[10px] tracking-[0.15em] uppercase ${
                  isScrolled
                    ? 'text-maroon-700 dark:text-gold-500/80'
                    : 'text-gold-300'
                }`}
              >
                Marriage Service
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? 'bg-maroon-800 text-white dark:bg-gold-600 dark:text-gray-950'
                        : 'bg-white/20 text-white backdrop-blur-sm'
                      : isScrolled
                        ? 'text-gray-700 hover:text-maroon-800 dark:text-gray-300 dark:hover:text-gold-400'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <a
              href={`tel:${siteConfig.phone[0]?.replace(/\s/g, '') || ''}`}
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled
                  ? 'bg-maroon-800 text-white hover:bg-maroon-900 dark:bg-gold-600 dark:text-gray-950 dark:hover:bg-gold-500'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative z-10 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white dark:bg-gray-950 z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
              <div className="mb-4">
                <img
                  src={logo}
                  alt="Sri Jayam"
                  className="h-20 w-auto object-contain mx-auto mb-3"
                />

                <h2 className="font-heading text-3xl font-bold text-center">
                  <span className="text-gray-900 dark:text-white">Sri </span>
                  <span className="text-gold-500">Jayam</span>
                </h2>

                <p className="text-xs tracking-[0.15em] uppercase text-maroon-700 dark:text-gold-500/80 text-center mt-1">
                  Marriage Service
                </p>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-heading font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-maroon-800 dark:text-gold-400'
                          : 'text-gray-600 dark:text-gray-400 hover:text-maroon-800 dark:hover:text-gold-400'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={`tel:${siteConfig.phone[0]?.replace(/\s/g, '') || ''}`}
                className="btn-primary mt-6"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone[0]}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
