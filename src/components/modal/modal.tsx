import * as Dialog from '@radix-ui/react-dialog';
import { Text } from '../text/text';
import { Button } from '../button/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  buttons?: React.ReactNode;
  title: string;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  contentClassName?: string;
}

const modalAnimation = {
  initial: {
    y: 30,
    x: 0,
    translateX: '-50%',
    translateY: '-50%',
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 60,
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

export function Modal(props: ModalProps) {
  const { children, trigger, title, buttons, onOpenChange, open, contentClassName } = props;
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild onClick={() => setIsOpen(true)}>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <AnimatePresence>
          <Dialog.Overlay
            className="w-screen h-screen bg-black/60 fixed top-0 left-0 backdrop-blur z-[990]"
            onClick={() => setIsOpen(false)}
          />
          <Dialog.Content className="fixed top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 w-[calc(100vw_-_48px)] lg:w-3/5 z-[999]">
            <motion.div
              variants={modalAnimation}
              initial="initial"
              animate="in"
              exit="out"
              className={`w-full p-10 bg-grey-700 border border-grey-400 rounded-lg !translate-x-0 !translate-y-0 ${contentClassName}`}>
              <div className="flex justify-between items-center mb-5">
                <Dialog.Title>
                  <Text type="h1">{title}</Text>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <Button
                    iconLeft="close-line"
                    color="transparent"
                    onClick={() => setIsOpen(false)}
                  />
                </Dialog.Close>
              </div>
              {children}
              <div className="flex justify-end mt-4">{buttons}</div>
            </motion.div>
          </Dialog.Content>
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
