'use client';

import { useTheme } from '@/components/ThemeProvider';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 right-6"
    >
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`
          relative inline-flex h-8 w-8 items-center justify-center rounded-full
          border-2 border-zinc-700/50 bg-zinc-800/50 backdrop-blur-md
          hover:bg-zinc-700/50 transition-colors
          dark:border-zinc-700/50 dark:bg-zinc-800/50
          dark:hover:bg-zinc-700/50
        `}
      >
        <span className="sr-only">Toggle theme</span>
        {theme === 'dark' ? (
          <SunIcon className="h-5 w-5 text-zinc-100" />
        ) : (
          <MoonIcon className="h-5 w-5 text-zinc-100" />
        )}
      </button>
    </motion.div>
  );
} 