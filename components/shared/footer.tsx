'use client';

import Link from 'next/link';
import { Heart, Star, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background smooth-colors border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4 group">
            <h3 className="font-heading text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary group-hover:from-primary group-hover:to-accent transition-all duration-300">
              Flavors & Fire
            </h3>
            <p className="text-background/80 group-hover:text-background/90 transition-colors duration-300">
              Experience culinary excellence in an elegant atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-flex items-center group">
                  Home
                  <span className="absolute ml-0 w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-300 ml-1"></span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-flex items-center group">
                  Menu
                  <span className="absolute ml-0 w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-300 ml-1"></span>
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-flex items-center group">
                  Reservations
                  <span className="absolute ml-0 w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-300 ml-1"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-flex items-center group">
                  About Us
                  <span className="absolute ml-0 w-0 group-hover:w-1.5 h-px bg-accent transition-all duration-300 ml-1"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li className="hover:text-background transition-colors duration-300">Phone: (555) 123-4567</li>
              <li className="hover:text-background transition-colors duration-300">Email: info@flavorsandfire.com</li>
              <li className="hover:text-background transition-colors duration-300">Hours: 5 PM - 11 PM (Closed Mondays)</li>
              <li className="hover:text-background transition-colors duration-300">123 Culinary Street, Food City, FC 12345</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
                aria-label="Like us on social"
              >
                <Heart size={20} className="text-accent transition-transform duration-300 hover:animate-pulse" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
                aria-label="Follow us"
              >
                <Star size={20} className="text-accent transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/40 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
                aria-label="Share"
              >
                <Share2 size={20} className="text-accent transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/80 hover:text-background/90 transition-colors duration-300">
            &copy; 2026 tyagichirag009@gmail.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
