import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Star, ChefHat, Users, Calendar, Award,
  Heart, Building2, TreePine, Home, Sparkles, Crown,
  Phone, CheckCircle2, MessageCircle,
} from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { stats, testimonials, services, siteConfig } from '@/data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Heart, Building2, TreePine, Home, Sparkles, Crown,
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <>
      <SEO path="/" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gray-950">
          <img
            src={`${import.meta.env.BASE_URL}assets/slider/wedding-dining-setup.jpg`}
            alt="Traditional Wedding Setup"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-maroon-950/70 to-gray-900/80" />
        </div>
        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative container-premium text-center py-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-6">
              Welcome to
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sri <span className="text-gold-400">Jayam</span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-200">
              Marriage Service
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="divider-ornament my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            At Sri Jayam Marriage Service, catering is a service rooted in tradition,
            discipline, and sincere hospitality. Serving families with authentic taste
            and dependable service for over 30 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 text-gray-950 font-semibold rounded-full hover:bg-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 text-lg"
            >
              Book Your Event
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Inquiry
            </a>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========== ABOUT PREVIEW ========== */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] gold-accent mb-3">
                About Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Legacy of <span className="text-gradient">Tradition & Taste</span>
              </h2>
              <div className="divider-ornament !mx-0 my-6" />
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
                Founded by Mr. R. Viswanathan, Sri Jayam Marriage Service offers pure vegetarian
                catering for a wide range of traditional and modern events across Tamil Nadu.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                With 30+ years of experience, our team specializes in Brahmin vegetarian catering,
                weddings, and large-scale celebrations, serving with the Arusuvai Rathna honor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={`${import.meta.env.BASE_URL}assets/others/statewide-service-banner.jpg`}
                  alt="Sri Jayam Catering Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-heading text-3xl font-bold text-gold-400">
                      30+ Years
                    </p>
                    <p className="text-ivory-200 mt-1">of Traditional Excellence</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-gold-500/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-maroon-500/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="relative py-20 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400 via-transparent to-transparent" />
        <div className="container-premium relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-premium">
          <SectionHeading
            label="Our Services"
            title="Pure Vegetarian Catering Excellence"
            subtitle="We specialize in premium vegetarian catering for every occasion, delivering tradition, taste, and elegance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? ChefHat;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-premium group p-8 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center mb-6 group-hover:bg-maroon-800 dark:group-hover:bg-gold-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-maroon-700 dark:text-gold-400 group-hover:text-white dark:group-hover:text-gray-950 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gold-600 dark:text-gold-400 font-medium mb-3">{service.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-maroon-700 dark:text-gold-400 mt-4 hover:gap-2 transition-all duration-300"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="Why Families Trust Us"
            title="The Sri Jayam Difference"
            subtitle="What makes us the most trusted vegetarian catering service in Tamil Nadu."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: '30+ Years Legacy', desc: 'Serving families with dedication across Tamil Nadu since 1991.' },
              { icon: ChefHat, title: 'Authentic Taste', desc: 'Cooked with fresh, handpicked ingredients and traditional methods.' },
              { icon: Users, title: 'Large-Scale Expertise', desc: 'Proven capability to manage events from 50 to 10,000 guests flawlessly.' },
              { icon: Calendar, title: 'End-to-End Service', desc: 'Complete arrangements from Mangala Vaathiyam to Return Gift Bags.' },
              { icon: Heart, title: 'Celebrity & VIP Trust', desc: 'Trusted by ashrams, respected families, and community leaders.' },
              { icon: TreePine, title: 'Statewide Presence', desc: 'Serving Chennai, Pondicherry, Pattukottai, Mayiladudurai, and beyond.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maroon-100 to-gold-100 dark:from-maroon-950 dark:to-gray-800 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-maroon-700 dark:text-gold-400" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ========== TESTIMONIALS PREVIEW ========== */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-premium">
          <SectionHeading
            label="Testimonials"
            title="Loved by Our Clients"
            subtitle="Hear from the families and organizations who trusted us with their most cherished moments."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-premium p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-heading font-semibold text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-gold-600 dark:text-gold-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-outline">
              View All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold-400 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.div {...fadeUp}>
            <span className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Let&apos;s Create Something Beautiful
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Plan Your <span className="text-gold-400">Perfect Event</span>?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Let us bring our tradition of culinary excellence to your next celebration.
              Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 text-gray-950 font-semibold rounded-full hover:bg-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 text-lg"
              >
                <CheckCircle2 className="w-5 h-5" />
                Get Free Quote
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
