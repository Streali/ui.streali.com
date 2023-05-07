import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

interface CheckboxProps {
  label: string;
  value: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Checkbox(props: CheckboxProps) {
  const { label, value, checked, onChange } = props;

  return (
    <div className="flex items-center gap-3">
      <CheckboxPrimitive.Root
        checked={checked}
        id={value}
        value={value}
        onChange={() => onChange && onChange}
        className="w-5 h-5 bg-grey-700 border border-grey-300 rounded data-[state=checked]:bg-primary-500 transition-colors duration-200">
        <CheckboxPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-sm after:bg-white" />
      </CheckboxPrimitive.Root>
      <label htmlFor={value}>{label}</label>
    </div>
  );
}