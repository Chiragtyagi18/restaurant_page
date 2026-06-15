'use client';

import { SlideUp } from '@/components/animations';
import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  {
    label: 'Years of Excellence',
    value: '25',
  },
  {
    label: 'Award Wins',
    value: '47',
  },
  {
    label: 'Happy Guests',
    value: '50K+',
  },
  {
    label: 'Chef Specialties',
    value: '120+',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <SlideUp key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <motion.div
                  className="text-5xl sm:text-6xl font-heading font-bold text-accent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-lg text-background/80">{stat.label}</p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
