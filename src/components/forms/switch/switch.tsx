import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Text } from '../../text/text';
import { useState } from 'react';

interface SwitchProps {
  label?: string;
  labelClassName?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'normal' | 'small';
}

const defineSizeClassNameRoot = {
  normal: 'w-12 h-7',
  small: 'w-10 h-6',
};

const defineSizeClassNameThumb = {
  normal: 'w-4 h-4 data-[state=checked]:translate-x-5',
  small: 'w-3 h-3 data-[state=checked]:translate-x-[17px]',
};

const defineDisabledClassName = 'bg-grey-300';

export function Switch(props: SwitchProps) {
  const {
    label,
    labelClassName = '',
    checked = false,
    disabled = false,
    onChange,
    size = 'normal',
  } = props;

  const [isSwitchChecked, setIsSwitchChecked] = useState<boolean>(checked);

  const handleCheckedChange = (checked: boolean) => {
    setIsSwitchChecked(checked);
    onChange && onChange(checked);
  };

  return (
    <div className="flex items-center gap-3">
      <SwitchPrimitive.Root
        checked={isSwitchChecked}
        disabled={disabled}
        onCheckedChange={handleCheckedChange}
        className={`p-1 bg-grey-600 rounded-full relative border border-grey-400 focus:shadow-outline focus:border-primary-500 data-[state=checked]:bg-primary-500 outline-none cursor-default ${
          defineSizeClassNameRoot[size]
        } ${disabled && defineDisabledClassName}`}>
        <SwitchPrimitive.Thumb
          className={`block w-4 h-4 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform ${defineSizeClassNameThumb[size]}`}
        />
      </SwitchPrimitive.Root>
      {label && (
        <Text className={labelClassName} onClick={() => setIsSwitchChecked(!isSwitchChecked)}>
          {label}
        </Text>
      )}
    </div>
  );
}
