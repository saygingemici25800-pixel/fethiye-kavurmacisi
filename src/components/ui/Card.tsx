import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverable?: boolean;
};

export default function Card({
  children,
  className,
  hoverable = true,
  ...rest
}: CardProps) {
  return (
    <div
      {...rest}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal-light/60 backdrop-blur-sm transition-all duration-500',
        hoverable &&
          'hover:-translate-y-1 hover:border-flame/40 hover:shadow-[0_20px_40px_-20px_rgba(255,107,53,0.45)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
