import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  container?: boolean;
  padded?: boolean;
};

export default function Section({
  children,
  className,
  container = true,
  padded = true,
  ...rest
}: SectionProps) {
  return (
    <section
      {...rest}
      className={cn(
        padded && 'py-20 md:py-28',
        'relative',
        className,
      )}
    >
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="font-accent text-sm md:text-base tracking-[0.25em] text-flame mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-5xl text-cream-light text-balance leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-cream/70 text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
