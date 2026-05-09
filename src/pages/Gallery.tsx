import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { galleryImages } from '@/data/siteData';

const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse our stunning gallery of wedding setups, traditional South Indian meals, event decorations, and premium buffet arrangements by Sri Jayam Marriage Service."
        path="/gallery"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-maroon-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Visual Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-gold-400">Gallery</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="divider-ornament my-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 max-w-2xl mx-auto text-lg">
            A visual journey through our finest events, dishes, and celebrations
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Explore"
            title="Moments We've Crafted"
            subtitle="Every image tells a story of tradition, taste, and celebration."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-maroon-800 text-white dark:bg-gold-600 dark:text-gray-950'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-maroon-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxImage(img.src)}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-maroon-100 to-gold-100 dark:from-maroon-950 dark:to-gray-800">
                    <div className={`aspect-${i % 3 === 0 ? '[3/4]' : i % 3 === 1 ? 'square' : '[4/3]'} flex items-center justify-center`}
                      style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/3' }}
                    >
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
                          <ZoomIn className="w-6 h-6 text-maroon-400 dark:text-gray-600" />
                        </div>
                        <p className="text-sm text-maroon-400 dark:text-gray-600 font-medium">{img.alt}</p>
                        <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-white/30 dark:bg-white/5 text-maroon-600 dark:text-gray-500">
                          {img.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full rounded-2xl overflow-hidden bg-gradient-to-br from-maroon-100 to-gold-100 dark:from-maroon-950 dark:to-gray-800 aspect-video flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="text-center p-12">
                <ZoomIn className="w-16 h-16 text-maroon-300 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-maroon-500 dark:text-gray-500 text-lg">
                  {galleryImages.find(img => img.src === lightboxImage)?.alt}
                </p>
                <p className="text-sm text-maroon-400 dark:text-gray-600 mt-2">Image placeholder — add your actual photos</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
