'use client';
import { cn } from '@/lib/utils';
import { motion, Transition } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  delay?: number;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

export function BorderTrail({
  className,
  size = 60,
  transition,
  delay,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const isMobile = useIsMobile();

  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: isMobile ? 3 : 5, // Faster animation on mobile
    ease: 'linear',
  };

  // Adjust size for mobile
  const adjustedSize = isMobile ? size * 0.8 : size;

  return (
    <div className='pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'>
      <motion.div
        className={cn('absolute aspect-square bg-zinc-500', className)}
        style={{
          width: adjustedSize,
          offsetPath: `rect(0 auto auto 0 round ${adjustedSize}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          ...(transition ?? BASE_TRANSITION),
          delay: delay,
        }}
        onAnimationComplete={onAnimationComplete}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false }}
      />
    </div>
  );
}