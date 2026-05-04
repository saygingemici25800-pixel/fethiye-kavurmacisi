'use client';

import { motion } from 'framer-motion';

const DESKTOP_ARROWS = 6;
const MOBILE_ARROWS = 3;

export default function ChevronWave() {
  return (
    <>
      {/* Desktop: 6 arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="mr-12 hidden items-center gap-4 md:flex"
      >
        {Array.from({ length: DESKTOP_ARROWS }).map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="select-none text-xl font-bold leading-none text-flame"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.15, 1],
              textShadow: [
                '0 0 0px rgba(255, 107, 53, 0)',
                '0 0 12px rgba(255, 107, 53, 0.8)',
                '0 0 0px rgba(255, 107, 53, 0)',
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          >
            »
          </motion.span>
        ))}
      </motion.div>

      {/* Mobile: 3 arrows, smaller + faster */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="mr-6 flex items-center gap-2.5 md:hidden"
      >
        {Array.from({ length: MOBILE_ARROWS }).map((_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="select-none text-base font-bold leading-none text-flame"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.15, 1],
              textShadow: [
                '0 0 0px rgba(255, 107, 53, 0)',
                '0 0 8px rgba(255, 107, 53, 0.8)',
                '0 0 0px rgba(255, 107, 53, 0)',
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          >
            »
          </motion.span>
        ))}
      </motion.div>
    </>
  );
}
