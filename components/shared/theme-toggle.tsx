'use client';

import { useTheme } from '@/lib/theme-provider';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-all duration-300 hover:shadow-md hover:scale-105 focus-ring group"
      aria-label={`Switch theme (current: ${theme})`}
      title={`Current: ${theme === 'system' ? 'system' : theme}`}
    >
      <div className="relative w-5 h-5">
        <AnimatePresence mode="wait" initial={false}>
          {resolvedTheme === 'dark' ? (
            <motion.div
              key="dark"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Moon size={18} className="group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Sun size={18} className="group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
