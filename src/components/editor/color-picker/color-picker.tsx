'use client';

import { RefObject, forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Input } from '../../forms/input/input';
import { Alpha, EditableInputHSLA, EditableInputRGBA, Hue, Saturation } from '@uiw/react-color';
import { hexToHsva, hsvaToHex, hsvaToHexa } from '@uiw/color-convert';
import EditableInput from '@uiw/react-color-editable-input';
import './color-picker.scss';
import { Icon } from '../../icon/icon';
import { Portal } from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import { Text } from '../../text/text';

const pickerAnimation = {
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
      ease: 'easeInOut',
    },
  },
};

interface ColorPickerProps {
  value?: string;
  haveInput?: boolean;
  onChange?: (color: string) => void;
  errorMessage?: string;
  label?: string;
  labelClassName?: string;
  side?: 'left' | 'right';
  containerClassName?: string;
}

export function ColorPicker(props: ColorPickerProps) {
  const {
    value,
    haveInput = false,
    onChange,
    errorMessage,
    label,
    labelClassName,
    side = 'left',
    containerClassName = '',
  } = props;
  const [val, setVal] = useState<string>(value || '#fff');
  const [hsva, setHsva] = useState(value ? hexToHsva(value) : { h: 0, s: 0, v: 0, a: 1 });
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [containerPos, setContainerPos] = useState({ x: 0, y: 0 });

  const handleHSVAChange = (newColor: { h: number; s: number; v: number; a: number }) => {
    setHsva(newColor);
    setVal(hsvaToHexa(newColor));
    onChange && onChange(hsvaToHexa(newColor));
  };

  const handleInputChange = (hexa: string) => {
    setVal(hexa);
    setHsva(hexToHsva(hexa));
    onChange && onChange(hexa);
  };

  useEffect(() => {
    setVal(value || '#ffffff');
  }, [value]);

  return (
    <div className={`relative ${containerClassName}`}>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      <div className="flex gap-2 items-center">
        <div
          className="h-10 w-10 rounded border cursor-pointer border-grey-400 bg-grey-700 flex justify-center items-center shrink-0 relative"
          onClick={() => setIsPickerOpen(!isPickerOpen)}>
          <div className="h-6 w-6 rounded-sm relative z-10" style={{ backgroundColor: val }} />
          <div className="w-6 h-6 overflow-hidden rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <TransparentGrid />
          </div>
        </div>
        {haveInput && (
          <Input
            value={val}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
        )}
      </div>
      {errorMessage && (
        <Text type="medium" className="text-error-500">
          {errorMessage}
        </Text>
      )}
      <AnimatePresence>
        {isPickerOpen && (
          <Picker
            hsva={hsva}
            onHsva={handleHSVAChange}
            onOverlayClick={() => setIsPickerOpen(false)}
            side={side}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function TransparentGrid() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="#fff" d="M0 0H24V24H0z"></path>
      <path fill="#CDCDCD" d="M0 0H12V12H0z"></path>
      <path fill="#CDCDCD" d="M12 12H24V24H12z"></path>
    </svg>
  );
}

interface PickerProps {
  hsva: { h: number; s: number; v: number; a: number };
  onHsva: (hsva: { h: number; s: number; v: number; a: number }) => void;
  onOverlayClick: () => void;
  side?: 'left' | 'right';
}

const Picker = forwardRef((props: PickerProps, ref) => {
  const { hsva, onHsva, onOverlayClick, side = 'left' } = props;
  const [currentInput, setCurrentInput] = useState<'Hex' | 'RGB' | 'HSL'>('Hex');

  return (
    <>
      <div className="w-screen h-screen top-0 left-0 fixed z-[500]" onClick={onOverlayClick}></div>
      <motion.div
        variants={pickerAnimation}
        animate="in"
        initial="initial"
        exit="out"
        ref={ref as RefObject<HTMLDivElement>}
        className={`p-2 border border-grey-400 bg-grey-600 rounded w-fit max-w-[226px] mt-2 absolute z-[600]`}
        style={{ translateX: side === 'left' ? 0 : 'calc(-100% + 40px)' }}>
        <Saturation
          className="!w-52 !h-52 mb-2"
          hsva={hsva}
          onChange={(newColor) => {
            onHsva({ ...hsva, ...newColor, a: hsva.a });
          }}
        />
        <Hue
          className="!h-2 mb-2"
          hue={hsva.h}
          onChange={(newHue) => {
            onHsva({ ...hsva, ...newHue });
          }}
        />
        <Alpha
          className="!h-2 mb-2"
          hsva={hsva}
          onChange={(newAlpha) => {
            onHsva({ ...hsva, ...newAlpha });
          }}
        />
        <div className="w-full">
          <button
            className="flex justify-between text-sm uppercase w-full mb-1"
            onClick={() => {
              currentInput === 'Hex'
                ? setCurrentInput('RGB')
                : currentInput === 'RGB'
                ? setCurrentInput('HSL')
                : setCurrentInput('Hex');
            }}>
            {currentInput}
            <Icon name="expand-up-down-line" />
          </button>
          {currentInput === 'Hex' && (
            <EditableInput
              value={hsvaToHex(hsva)}
              onChange={(hex) => {
                onHsva(hexToHsva(hex.target.value));
              }}
            />
          )}
          {currentInput === 'RGB' && (
            <EditableInputRGBA
              className="!grid grid-cols-4 max-w-full"
              hsva={hsva}
              onChange={(newColor) => {
                onHsva({ ...hsva, ...newColor.hsva });
              }}
            />
          )}
          {currentInput === 'HSL' && (
            <EditableInputHSLA
              className="!grid grid-cols-4 max-w-full"
              hsva={hsva}
              onChange={(newColor) => {
                onHsva({ ...hsva, ...newColor.hsva });
              }}
            />
          )}
        </div>
      </motion.div>
    </>
  );
});
