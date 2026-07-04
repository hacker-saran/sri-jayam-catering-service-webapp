import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { menuCategories } from '@/data/siteData';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Menu"
        description="Explore Sri Jayam's premium vegetarian menu — traditional South Indian meals, starters, buffet items, desserts, and beverages for weddings and events."
        path="/menu"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-maroon-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Culinary Excellence
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gold-400">Menu</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="divider-ornament my-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Authentic South Indian vegetarian cuisine crafted with love and tradition
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Explore Our Offerings"
            title="A Feast for Every Occasion"
            subtitle="Customizable menus featuring the finest vegetarian dishes from South Indian culinary tradition."
          />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {menuCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-maroon-800 text-white dark:bg-gold-600 dark:text-gray-950 shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-maroon-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Items */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {menuCategories[activeTab]?.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="card-premium p-6 group hover:-translate-y-1"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center shrink-0 group-hover:bg-maroon-800 dark:group-hover:bg-gold-600 transition-colors duration-300">
                      <UtensilsCrossed className="w-5 h-5 text-maroon-700 dark:text-gold-400 group-hover:text-white dark:group-hover:text-gray-950 transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-center mt-16">
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
              Our menus are fully customizable to suit your preferences and dietary requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Custom Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
