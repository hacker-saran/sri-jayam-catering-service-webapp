import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import SEO from '@/components/seo/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteData';

const faqs = [
  {
    q: 'What types of events do you cater?',
    a: 'We specialize in weddings, receptions, corporate functions, house functions (upanayanam, griha pravesham), large-scale temple functions, and community celebrations.',
  },
  {
    q: 'Do you provide services outside Chennai?',
    a: 'Yes! While we have branches in Chennai and Pondicherry, we serve families across Tamil Nadu including Pattukottai, Mayiladudurai, Karaikal, and beyond.',
  },
  {
    q: 'Is your kitchen 100% vegetarian?',
    a: 'Absolutely. We are a 100% pure vegetarian catering service, specialized in traditional Brahmin vegetarian catering and authentic South Indian cuisine.',
  },
  {
    q: 'Can we customize the menu?',
    a: 'Yes, we create bespoke menus tailored to your rituals, guest preferences, and budget, ensuring perfect food sequencing and timing.',
  },
  {
    q: 'What additional arrangements do you provide?',
    a: 'We offer a comprehensive hospitality package including Mangala Vaathiyam, flower garlands, Seer Patchanangal, Vaitheega Samangal, Aarthi plates, and snack/sweet stalls.',
  },
  {
    q: 'How can we get a quote?',
    a: 'You can call us directly at 9444227423 or use our WhatsApp chat button for quick inquiries. We provide free consultations and personalized quotes.',
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, send to backend/email service
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Contact R. Viswanathan at Sri Jayam Marriage Service for premium vegetarian catering inquiries. Visit our Chennai or Pondicherry branch."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-maroon-950 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/40 via-transparent to-transparent" />
        <div className="container-premium relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-gold-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact <span className="text-gold-400">Us</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2 }} className="divider-ornament my-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 max-w-2xl mx-auto text-lg">
            We&apos;d love to hear about your upcoming celebration
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-ivory-50 dark:fill-gray-950">
            <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let&apos;s Start a Conversation
                </h2>
                <div className="p-4 bg-gold-50 dark:bg-gray-800 rounded-xl border border-gold-200 dark:border-gray-700 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-500 mb-1">Proprietor</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">R. Viswanathan</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Reach out to us for catering inquiries, event planning, or any questions.
                  Our team is ready to help you create the perfect celebration.
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-premium p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                    {siteConfig.phone.map(p => (
                      <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-gold-400 transition-colors">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="card-premium p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    {siteConfig.email.map(e => (
                      <a key={e} href={`mailto:${e}`} className="block text-sm text-gray-600 dark:text-gray-400 hover:text-maroon-700 dark:hover:text-gold-400 transition-colors">
                        {e}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>


              {/* Branches */}
              {siteConfig.branches.map((b, i) => (
                <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.05 }} className="card-premium p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">{b.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{b.address}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Business Hours */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="card-premium p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-maroon-50 dark:bg-maroon-950 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-maroon-700 dark:text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-2">Business Hours</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sunday: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello, I would like to inquire about your catering services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="card-premium p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Us an Inquiry
                </h3>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-8">
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We&apos;ve received your inquiry and will contact you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', eventType: '', date: '', guests: '', message: '' }); }}
                      className="btn-outline mt-6"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name *</label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Phone *</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Event Type</label>
                        <select
                          id="eventType"
                          value={formData.eventType}
                          onChange={e => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="reception">Reception</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="house-function">House Function</option>
                          <option value="festival">Festival/Pooja</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Event Date</label>
                        <input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Expected Guests</label>
                        <input
                          id="guests"
                          type="number"
                          min="1"
                          value={formData.guests}
                          onChange={e => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                          placeholder="Number of guests"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-maroon-500 dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your event..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center text-lg py-4">
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container-premium py-12">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-maroon-50 to-gold-50 dark:from-gray-800 dark:to-gray-900 aspect-[2.5/1] flex items-center justify-center border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-maroon-300 dark:text-gray-600 mx-auto mb-3" />
              <p className="text-maroon-500 dark:text-gray-500 font-medium">Google Maps Embed</p>
              <p className="text-sm text-maroon-400 dark:text-gray-600 mt-1">Add your Google Maps API key to enable the map</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ivory-50 dark:bg-gray-950">
        <div className="container-premium">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our catering services."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-premium overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-heading font-semibold text-gray-900 dark:text-white">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-maroon-700 dark:text-gold-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
