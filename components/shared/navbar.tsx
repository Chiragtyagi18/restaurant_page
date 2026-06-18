'use client';

import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/orders', label: 'Your Orders' },
    { href: '/reservations', label: 'Reservations' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-lg border-b border-border sticky top-0 z-50 smooth-colors shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/apple-icon.png"
              alt="Flavors & Fire"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span className="hidden sm:inline font-heading font-bold text-xl text-primary transition-colors duration-300 group-hover:text-accent">
              Flavors & Fire
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground relative group smooth-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle, Auth & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            {isSignedIn && (
              <Link
                href="/admin"
                className="hidden sm:inline px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Admin
              </Link>
            )}
            
            <UserButton afterSignOutUrl="/" />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-all duration-200 hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {isSignedIn && (
              <div className="px-4 py-2">
                <Link
                  href="/admin"
                  className="block px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Dashboard
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
