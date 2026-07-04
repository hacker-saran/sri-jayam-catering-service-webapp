import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Heart, Building2, TreePine, Home, Sparkles, Crown,
  ChefHat, Music, Flower2, Gift, BookOpen, Printer, CircleDot, Leaf,
  UtensilsCrossed, IceCreamCone, Phone,
} from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { services, traditionalServices } from '@/data/siteData';

const cateringIcons: Record<string, React.ElementType> = {
  Heart, Building2, TreePine, Home, Sparkles, Crown,
};

const tradIcons: Record<string, React.ElementType> = {
  Music, Flower2, Gift, BookOpen, Printer, CircleDot, Leaf,
  UtensilsCrossed, IceCreamCone, ChefHat,
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore Sri Jayam's premium vegetarian catering services – wedding catering, corporate events, outdoor catering, house functions, and more in Chennai."
        path="/services"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-maroon-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-gold-400">Services</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="divider-ornament my-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Pure vegetarian catering excellence for every occasion
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Catering Services */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Catering Services"
            title="Premium Catering for Every Occasion"
            subtitle="From grand weddings to intimate gatherings, we deliver exceptional vegetarian cuisine with impeccable service."
          />
          <div className="space-y-20">
            {services.map((service, i) => {
              const Icon = cateringIcons[service.icon] ?? ChefHat;
              const isReversed = i % 2 !== 0;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-14 h-14 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-maroon-700 dark:text-gold-400" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gold-600 dark:text-gold-400 font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.highlights.map(h => (
                        <li key={h} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-maroon-100 to-gold-100 dark:from-maroon-950 dark:to-gray-800">
                      <img
                        src={`${import.meta.env.BASE_URL}${service.image.startsWith('/') ? service.image.slice(1) : service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional Services */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-premium">
          <SectionHeading
            label="Traditional Services"
            title="Complete Wedding Arrangements"
            subtitle="Beyond catering — we provide everything you need for a traditional South Indian celebration."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {traditionalServices.map((s, i) => {
              const Icon = tradIcons[s.icon] ?? ChefHat;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="card-premium p-6 text-center hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-full bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-800 dark:group-hover:bg-gold-600 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-maroon-700 dark:text-gold-400 group-hover:text-white dark:group-hover:text-gray-950 transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{s.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Plan Your <span className="text-gold-400">Event</span>?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
              Get a customized catering quote tailored to your celebration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 text-gray-950 font-semibold rounded-full hover:bg-gold-500 transition-all duration-300 text-lg"
              >
                Get Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919444227423"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
