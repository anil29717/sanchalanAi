import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-red-600 mb-6"
          >
            {subtitle}
          </motion.h2>
        )}
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}