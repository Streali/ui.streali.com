import * as PopoverPrimitive from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';

const popoverAnimation = {
  initial: {
    y: 10,
    x: 0,
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      type: 'spring',
    },
  },
  out: {
    x: 0,
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.3,
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
};

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  triggerClassName?: string;
  contentClassName?: string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover(props: PopoverProps) {
  const {
    trigger,
    children,
    side = 'bottom',
    align = 'start',
    triggerClassName = '',
    className = '',
    contentClassName = '',
    open = false,
    onOpenChange,
  } = props;

  return (
    <AnimatePresence>
      <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <PopoverPrimitive.Trigger className={`w-auto ${triggerClassName}`}>
          {trigger}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Anchor />
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            collisionPadding={12}
            align={align}
            side={side}
            sideOffset={10}
            className={contentClassName}>
            <motion.div
              className={`w-80 p-3 bg-grey-700 border border-grey-400 rounded ${className}`}
              variants={popoverAnimation}
              initial="initial"
              animate="in"
              exit="out">
              {children}
            </motion.div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </AnimatePresence>
  );
}
