import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/siteData';

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(prev => (prev + 1) % testimonials.length);
  const prev = () => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <SEO
        title="Testimonials"
        description="Read what our clients say about Sri Jayam Marriage Service. Trusted by thousands for premium vegetarian catering at weddings and events in Chennai."
        path="/testimonials"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-maroon-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Client Love
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="text-gold-400">Testimonials</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="divider-ornament my-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Stories of trust, tradition, and exceptional catering experiences
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Featured Review"
            title="What Our Clients Say"
          />
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="card-premium p-10 md:p-14 text-center relative"
            >
              <Quote className="w-10 h-10 text-gold-300 dark:text-gold-700 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current]!.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed italic mb-8">
                &ldquo;{testimonials[current]!.text}&rdquo;
              </p>
              <div>
                <p className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                  {testimonials[current]!.name}
                </p>
                <p className="text-gold-600 dark:text-gold-400 font-medium mt-1">
                  {testimonials[current]!.role}
                </p>
              </div>
            </motion.div>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-maroon-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-maroon-700 dark:bg-gold-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-maroon-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-premium">
          <SectionHeading
            label="All Reviews"
            title="Trusted by Hundreds of Families"
            subtitle="Read more stories from the families and organizations who chose Sri Jayam."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-premium p-8 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon-200 to-gold-200 dark:from-maroon-900 dark:to-gray-700 flex items-center justify-center">
                    <span className="font-heading font-bold text-maroon-700 dark:text-gold-400 text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gold-600 dark:text-gold-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Video Testimonials"
            title="Hear From Our Clients"
            subtitle="Watch real families share their Sri Jayam experience."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {['Wedding Celebration Story', 'Corporate Event Highlight' ].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-premium overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-maroon-100 to-gold-100 dark:from-maroon-950 dark:to-gray-800 flex items-center justify-center relative cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-maroon-700 dark:text-gold-400 ml-1" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Video testimonial placeholder</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
