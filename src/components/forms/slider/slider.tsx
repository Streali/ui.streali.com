import * as SliderPrimitive from '@radix-ui/react-slider';
import Text from '../../text/text';
import { Input } from '../input/input';
import { useEffect, useState } from 'react';

interface SliderProps {
  value: number;
  onChange?: (value: number) => void;
  haveInput?: boolean;
  inputSuffix?: string;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  labelClassName?: string;
}

function Slider(props: SliderProps) {
  const {
    value,
    onChange,
    haveInput,
    min = 0,
    max = 100,
    step = 1,
    label,
    labelClassName,
    inputSuffix,
  } = props;

  const [val, setVal] = useState<number>(value);

  const handleSliderChange = (value: number) => {
    setVal(value);
    onChange && onChange(value);
  };

  const handleInputChange = (value: number) => {
    setVal(value);
    onChange && onChange(value);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div>
      {label && (
        <Text type="medium" className={`block ${haveInput ? 'mb-0' : 'mb-1'} ${labelClassName}`}>
          {label}
        </Text>
      )}
      <div className="flex gap-3 items-center">
        <SliderPrimitive.Root
          onValueChange={(v) => handleSliderChange(v[0])}
          className="relative flex items-center select-none touch-none flex-1 h-5"
          value={[val]}
          max={max}
          min={min}
          step={step}>
          <SliderPrimitive.Track className="bg-grey-400 relative grow rounded-full h-1">
            <SliderPrimitive.Range className="absolute bg-primary-500 rounded-full h-full" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block w-3 h-3 bg-white rounded-full hover:bg-primary-100 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary-500 transition-colors duration-200" />
        </SliderPrimitive.Root>
        {haveInput && (
          <Input
            containerClassName="!w-20 flex-0"
            min={min}
            max={max}
            value={val}
            suffix={inputSuffix}
            type="number"
            onChange={(e) => handleInputChange(e.target.valueAsNumber)}
          />
        )}
      </div>
    </div>
  );
}

export default Slider;
