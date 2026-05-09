import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-3 ${
          light ? 'text-gold-400' : 'gold-accent'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? 'text-white' : 'text-gray-900 dark:text-white'
      }`}>
        {title}
      </h2>
      <div className="divider-ornament my-5" />
      {subtitle && (
        <p className={`max-w-2xl text-lg leading-relaxed ${center ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
