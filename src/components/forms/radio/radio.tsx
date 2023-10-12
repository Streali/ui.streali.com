'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';
import { Text } from '../../text/text';

type RadioItem = {
  label: string;
  value: string;
};

interface RadioProps {
  items: RadioItem[];
  name: string;
  defaultValue?: string;
  align?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
}

function Radio(props: RadioProps) {
  const { items, name, defaultValue, align = 'vertical', onChange } = props;

  return (
    <RadioGroup.Root
      name={name}
      onValueChange={(value) => onChange && onChange(value)}
      defaultValue={defaultValue}
      className={`flex gap-4 ${align === 'vertical' ? 'flex-col' : 'flex-row'}`}>
      {items.map((item) => (
        <div className="flex items-center gap-2" key={item.value}>
          <RadioGroup.Item
            id={item.value}
            key={item.value}
            value={item.value}
            className="w-5 h-5 bg-grey-700 border border-grey-300 rounded-full data-[state=checked]:bg-primary-500 transition-colors duration-200">
            <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-white" />
          </RadioGroup.Item>
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}

export default Radio;
