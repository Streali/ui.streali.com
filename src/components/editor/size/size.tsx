import { useEffect, useRef, useState } from 'react';
import { Button } from '../../button/button';
import { Input } from '../../forms/input/input';
import { IconSVG } from '../../icon/icon';
import { Text } from '../../text/text';

interface SizeProps {
  value?: [number, number, number, number];
  onValueChange?: (value: [number, number, number, number]) => void;
  type?: 'border' | 'radius';
  label?: string;
  labelClassName?: string;
  className?: string;
}

const defineIconCurrentChangeBorder = {
  '0': IconSVG['border-top'],
  '1': IconSVG['border-right'],
  '2': IconSVG['border-bottom'],
  '3': IconSVG['border-left'],
};

const defineIconCurrentChangeRadius = {
  '0': IconSVG['radius-top-left'],
  '1': IconSVG['radius-top-right'],
  '2': IconSVG['radius-bottom-right'],
  '3': IconSVG['radius-bottom-left'],
};

export default function Size(props: SizeProps) {
  const {
    value,
    onValueChange,
    type = 'border',
    label,
    labelClassName = '',
    className = '',
  } = props;
  const [defineAll, setDefineAll] = useState(true);
  const [currentValue, setCurrentValue] = useState(value || [0, 0, 0, 0]);
  const [currentChangeValue, setCurrentChangeValue] = useState(0);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleAllValuesChanges = (value: number) => {
    setCurrentValue([value, value, value, value]);
    onValueChange?.([value, value, value, value]);
  };

  const handleValueChange = (value: number, index: number) => {
    const newValue = [...currentValue];
    newValue[index] = value;
    setCurrentValue(newValue);
    onValueChange?.(newValue as [number, number, number, number]);
  };

  useEffect(() => {
    if (value && value[0] === value[1] && value[1] === value[2] && value[2] === value[3]) {
      setDefineAll(true);
    } else {
      setDefineAll(false);
    }
  }, [value]);

  return (
    <div className={className}>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}
      {defineAll && (
        <div className="flex gap-2">
          <Input
            type="number"
            suffix="px"
            min="0"
            defaultValue={currentValue[0]}
            onChange={(e) => {
              const value = e.target.valueAsNumber;
              handleAllValuesChanges(value);
            }}
          />
          <Button
            color="stroke"
            iconLeftSvg={type === 'border' ? IconSVG['split-border'] : IconSVG['split-radius']}
            iconSvgWidth={16}
            iconSvgHeight={16}
            onClick={() => {
              setDefineAll(false);
              handleAllValuesChanges(currentValue[0]);
              setTimeout(() => {
                firstInputRef.current?.focus();
              }, 100);
            }}
          />
        </div>
      )}
      {!defineAll && (
        <div className="flex gap-2">
          <div className="w-full">
            <div className="flex-1 h-10 border border-grey-400 bg-grey-600 overflow-hidden rounded items-center grid grid-cols-4">
              <input
                type="number"
                className="flex-1 h-10 bg-transparent px-2 appearance-none outline-none border-r border-grey-400 text-center"
                value={currentValue[0]}
                onFocus={() => setCurrentChangeValue(0)}
                ref={firstInputRef}
                onChange={(e) => {
                  const value = e.target.valueAsNumber;
                  handleValueChange(value, 0);
                }}
              />
              <input
                type="number"
                className="flex-1 h-10 bg-transparent px-2 appearance-none outline-none border-r border-grey-400 text-center"
                value={currentValue[1]}
                onFocus={() => setCurrentChangeValue(1)}
                onChange={(e) => {
                  const value = e.target.valueAsNumber;
                  handleValueChange(value, 1);
                }}
              />
              <input
                type="number"
                className="flex-1 h-10 bg-transparent px-2 appearance-none outline-none border-r border-grey-400 text-center"
                value={currentValue[2]}
                onFocus={() => setCurrentChangeValue(2)}
                onChange={(e) => {
                  const value = e.target.valueAsNumber;
                  handleValueChange(value, 2);
                }}
              />
              <input
                type="number"
                className="flex-1 h-10 bg-transparent px-2 appearance-none outline-none text-center"
                value={currentValue[3]}
                onFocus={() => setCurrentChangeValue(3)}
                onChange={(e) => {
                  const value = e.target.valueAsNumber;
                  handleValueChange(value, 3);
                }}
              />
            </div>
            <div className="flex-1 items-center grid grid-cols-4 text-center mt-2 text-grey-100">
              {type === 'border' && (
                <>
                  <Text type="little">T</Text>
                  <Text type="little">R</Text>
                  <Text type="little">B</Text>
                  <Text type="little">L</Text>
                </>
              )}
              {type === 'radius' && (
                <>
                  <Text type="little">TL</Text>
                  <Text type="little">TR</Text>
                  <Text type="little">BR</Text>
                  <Text type="little">BL</Text>
                </>
              )}
            </div>
          </div>
          <Button
            color="stroke"
            iconLeftSvg={
              type === 'border'
                ? defineIconCurrentChangeBorder[
                    currentChangeValue.toString() as keyof typeof defineIconCurrentChangeBorder
                  ]
                : defineIconCurrentChangeRadius[
                    currentChangeValue.toString() as keyof typeof defineIconCurrentChangeRadius
                  ]
            }
            iconSvgWidth={16}
            iconSvgHeight={16}
            onClick={() => setDefineAll(true)}
          />
        </div>
      )}
    </div>
  );
}
