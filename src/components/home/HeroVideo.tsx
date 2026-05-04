'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Instagram, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import GradientMenu from '@/components/ui/gradient-menu';
import HeroSocialProof from '@/components/home/HeroSocialProof';
import DiscoverLabel from '@/components/home/DiscoverLabel';
import ChevronWave from '@/components/home/ChevronWave';

export default function HeroVideo() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      void videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.volume = 1;
        void videoRef.current.play().catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[620px] w-full overflow-hidden bg-charcoal"
    >
      {/* Background video — center-translate + %110 boyut: kenar boşluğu olmadan hafif uzaklaştırma */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ width: '110%', height: '110%' }}
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays: darken video + subtle flame center */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal-dark/70 via-charcoal/50 to-charcoal-dark/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.12)_0%,transparent_55%,rgba(15,15,15,0.45)_100%)]"
      />

      {/* Ambient flame flicker */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 z-10 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-flame/20 blur-3xl animate-flame-pulse"
      />

      {/* GradientMenu — TAM MERKEZDE (sabit) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 [filter:drop-shadow(0_15px_35px_rgba(0,0,0,0.5))]"
      >
        <GradientMenu />
      </motion.div>

      {/* DiscoverLabel + ChevronWave — Sol kenardan başlar, butona kadar uzanır */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="pointer-events-none absolute left-0 top-[calc(50%+10px)] z-20 hidden md:flex -translate-y-1/2 items-center gap-10 pl-20 md:gap-16 md:pl-40"
      >
        <DiscoverLabel />
        <ChevronWave />
      </motion.div>

      {/* Slogan — Tam yatay ortada, menu altında */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="pointer-events-none absolute left-1/2 top-[68%] z-20 -translate-x-1/2 text-center"
      >
        <p className="font-heading text-center px-4 sm:whitespace-nowrap text-base italic leading-relaxed text-cream/70 md:text-xl">
          {t('subtitle.before')}{' '}
          <span className="font-semibold text-flame">
            {t('subtitle.highlight')}
          </span>
          {t('subtitle.after')}
        </p>
      </motion.div>

      {/* Mute / unmute — tek başına, slogan altında */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2 md:bottom-28"
      >
        <button
          type="button"
          onClick={toggleMute}
          title={isMuted ? t('unmute') : t('mute')}
          aria-label={isMuted ? t('unmute') : t('mute')}
          aria-pressed={!isMuted}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 bg-cream/10 text-cream backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cream/20 md:h-14 md:w-14"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMuted ? (
              <motion.span
                key="muted"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <VolumeX className="h-5 w-5 md:h-6 md:w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="unmuted"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <Volume2 className="h-5 w-5 md:h-6 md:w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Instagram + Facebook — birleşik pill, merkezde */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="absolute left-1/2 top-28 z-20 flex -translate-x-1/2 items-center overflow-hidden rounded-full border border-cream/30 bg-cream/10 backdrop-blur-md md:top-32"
      >
        <a
          href={SITE_CONFIG.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center px-4 py-3 text-cream transition-all duration-300 hover:bg-[#e4405f] hover:text-white md:px-5 md:py-3.5"
        >
          <Instagram className="h-4 w-4 md:h-5 md:w-5" />
        </a>
        <div aria-hidden className="h-6 w-px bg-cream/30" />
        <a
          href={SITE_CONFIG.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="flex items-center justify-center px-4 py-3 text-cream transition-all duration-300 hover:bg-[#1877f2] hover:text-white md:px-5 md:py-3.5"
        >
          <Facebook className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </motion.div>

      {/* Avatar + Google rating — en altta, merkezde */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <HeroSocialProof />
      </motion.div>
    </section>
  );
}
