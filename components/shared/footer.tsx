'use client';

import Link from 'next/link';
import { Heart, Star, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Flavors & Fire</h3>
            <p className="text-background/80">
              Experience culinary excellence in an elegant atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-accent transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@flavorsandfire.com</li>
              <li>Hours: 5 PM - 11 PM (Closed Mondays)</li>
              <li>123 Culinary Street, Food City, FC 12345</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 transition-all"
                aria-label="Like us on social"
              >
                <Heart size={20} className="text-accent" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 transition-all"
                aria-label="Follow us"
              >
                <Star size={20} className="text-accent" />
              </a>
              <a
                href="#"
                className="p-2 bg-accent/20 rounded-full hover:bg-accent/30 transition-all"
                aria-label="Share"
              >
                <Share2 size={20} className="text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/80">
            &copy; 2026 tyagichirag009@gmail.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
