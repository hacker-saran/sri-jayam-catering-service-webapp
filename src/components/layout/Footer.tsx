import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Heart } from 'lucide-react';
import { siteConfig } from '@/data/siteData';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/menu', label: 'Menu' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      {/* Top accent */}
      <div className="h-1 bg-gradient-to-r from-maroon-800 via-gold-500 to-maroon-800" />

      <div className="container-premium section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-heading text-2xl font-bold text-white">
                Sri <span className="text-gold-500">Jayam</span>
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase text-gold-500/80 mt-1">Marriage Service</p>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Premium pure vegetarian catering for weddings and events. Crafting culinary excellence with tradition and love since our founding.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-maroon-800 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-maroon-800 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Temple & Large Scale Functions</li>
              <li>House Functions</li>
              <li>Receptions & Modern Events</li>
              <li>Outdoor Catering</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  {siteConfig.phone.map(p => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-gray-400 hover:text-white transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  {siteConfig.email.map(e => (
                    <a key={e} href={`mailto:${e}`} className="block text-gray-400 hover:text-white transition-colors">
                      {e}
                    </a>
                  ))}
                </div>
              </li>
              {siteConfig.branches.map(branch => (
                <li key={branch.name} className="flex gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-white text-xs">{branch.name}</span>
                    <p className="text-gray-400 mt-0.5">{branch.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-premium py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sri Jayam Marriage Service. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-maroon-600 fill-maroon-600" /> tradition & excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
