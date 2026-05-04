'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Flame, Users, Star, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

function useCounter(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatItem({
  value,
  suffix = '',
  decimals = 0,
  label,
  active,
  Icon,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  active: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const current = useCounter(value, active);
  const display =
    decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
  return (
    <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
      <Icon className="h-6 w-6 text-flame" />
      <span className="font-heading text-4xl md:text-5xl text-cream-light tabular-nums">
        {display}
        <span className="text-flame">{suffix}</span>
      </span>
      <span className="text-xs md:text-sm uppercase tracking-wider text-cream/60">
        {label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const t = useTranslations('stats');

  return (
    <section
      ref={ref}
      className="border-y border-white/5 bg-charcoal-dark py-10 md:py-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:gap-10 md:px-8"
      >
        <StatItem
          Icon={Clock}
          value={SITE_CONFIG.stats.years}
          suffix="+"
          label={t('years')}
          active={inView}
        />
        <StatItem
          Icon={Users}
          value={SITE_CONFIG.stats.dailyGuests}
          suffix="+"
          label={t('guests')}
          active={inView}
        />
        <StatItem
          Icon={Star}
          value={SITE_CONFIG.stats.googleRating}
          decimals={1}
          suffix="/5"
          label={t('rating')}
          active={inView}
        />
        <StatItem
          Icon={Flame}
          value={100}
          suffix="%"
          label={t('woodFire')}
          active={inView}
        />
      </motion.div>
    </section>
  );
}
