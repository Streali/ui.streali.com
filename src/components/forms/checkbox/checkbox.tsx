'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Text } from '../../text/text';

interface CheckboxProps {
  label: string | React.ReactNode;
  value: string;
  checked?: boolean;
  onChange?: (checked: boolean | 'indeterminate') => void;
  containerClassName?: string;
  errorMessage?: string;
  name?: string;
}

export function Checkbox(props: CheckboxProps) {
  const { label, value, checked, onChange, containerClassName, errorMessage, name } = props;

  return (
    <div className={containerClassName}>
      <div className={`flex items-center gap-3`}>
        <CheckboxPrimitive.Root
          name={name}
          defaultChecked={checked}
          id={value}
          value={value}
          onCheckedChange={(checked) => onChange && onChange(checked)}
          className="w-5 h-5 bg-grey-700 border border-grey-300 rounded data-[state=checked]:bg-primary-500 transition-colors duration-200">
          <CheckboxPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-sm after:bg-white" />
        </CheckboxPrimitive.Root>
        <label htmlFor={value}>{label}</label>
      </div>
      {errorMessage && (
        <Text type="medium" className="text-error-500">
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
