import { useEffect, useRef, useState } from 'react';
import { Input } from '../../forms/input/input';
import * as Portal from '@radix-ui/react-portal';
import { Text } from '../../text/text';
import { Icon, IconSVG } from '../../icon/icon';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickOutside } from '../../../hooks/use-click-outside';

export type Font = {
  family: string;
  variants: { weight: number; file: string }[];
  from: 'google' | 'fontshare' | 'custom';
};

interface FontPickerProps {
  value?: string;
  onChange?: (font: Font) => void;
  fonts: Font[];
  label?: string;
  labelClassName?: string;
}

const listAnimation = {
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

export default function FontPicker(props: FontPickerProps) {
  const { value = 'Roboto', onChange, fonts, label, labelClassName = '' } = props;
  const [val, setVal] = useState<string>(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [filteredFonts, setFilteredFonts] = useState<Font[]>(fonts);
  const inputRef = useRef<HTMLInputElement>(null);
  useClickOutside(inputRef, () => setIsOpen(false));

  const searchFont = (value: string) => {
    if (!value || value.length === 0) return setFilteredFonts(fonts);
    const filteredFonts = fonts.filter((font) =>
      font.family.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFonts(filteredFonts);
  };

  useEffect(() => {
    if (!value || value.length === 0) return setFilteredFonts(fonts);
    const filteredFonts = fonts.filter((font) =>
      font.family.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFonts(filteredFonts);
    setVal(value);
  }, [fonts, value]);

  return (
    <>
      <Input
        ref={inputRef}
        type="text"
        label={label}
        labelClassName={labelClassName}
        onFocus={() => setIsOpen(true)}
        value={val}
        onChange={(e) => {
          searchFont(e.target.value);
          setVal(e.target.value);
        }}
      />
      <AnimatePresence>
        {isOpen && (
          <Portal.Root>
            <motion.div
              variants={listAnimation}
              initial="initial"
              animate="in"
              exit="out"
              className={`w-full bg-grey-700 border border-grey-400 mt-3 rounded ${
                filteredFonts.length > 0
                  ? 'grid grid-cols-3 gap-3 p-3'
                  : 'flex justify-center items-center p-10'
              }`}>
              {filteredFonts.length > 0 ? (
                <>
                  {filteredFonts.map((font, index) => (
                    <FontCard
                      family={font.family}
                      from={font.from}
                      key={index}
                      onClick={() => {
                        onChange && onChange(font);
                        setVal(font.family);
                        setIsOpen(false);
                      }}
                    />
                  ))}
                </>
              ) : (
                <div className="w-full text-center">
                  <Text type="medium">No font found</Text>
                </div>
              )}
            </motion.div>
          </Portal.Root>
        )}
      </AnimatePresence>
    </>
  );
}

interface FontCardProps {
  onClick?: (family: string) => void;
  family: string;
  from: 'google' | 'fontshare' | 'custom';
}

function FontCard(props: FontCardProps) {
  const { onClick, family, from } = props;

  const handleClick = (family: string) => {
    onClick && onClick(family);
  };

  return (
    <div
      className="p-3 flex items-center flex-col gap-3 border border-grey-400 rounded hover:bg-primary-500 transition-colors duration-200 cursor-pointer relative"
      onClick={() => {
        handleClick(family);
      }}>
      <div className="p-1 absolute top-0 right-0">
        {from === 'google' && <Icon svg={IconSVG.googlefont} width={15} height={12} />}
        {from === 'fontshare' && <Icon svg={IconSVG.fontshare} width={50} height={12} />}
      </div>
      <span className="text-5xl">aA</span>
      <Text>{family}</Text>
    </div>
  );
}
