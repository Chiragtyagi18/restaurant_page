'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideDown } from '@/components/animations';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-background overflow-hidden smooth-colors">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-accent font-semibold text-lg mb-4 animate-in">Welcome to Fine Dining</p>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          Flavors & Fire
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Experience an extraordinary culinary journey where passion meets perfection. Discover innovative cuisine crafted with premium ingredients in an elegant atmosphere.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="/menu"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/50 btn-press group relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-accent transition-colors duration-300">Explore Menu</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </Link>
          <Link
            href="/reservations"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-press group relative hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="group-hover:text-primary-foreground transition-colors duration-300">Make Reservation</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center hover:border-accent transition-colors duration-300">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full mt-2 group-hover:bg-accent transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
