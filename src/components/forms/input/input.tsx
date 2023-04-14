import { ComponentPropsWithoutRef, useState } from 'react';
import Text from '../../text/text';
import Icon from '../../icon/icon';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  iconLeft?: string;
  suffix?: string;
  type?: 'normal' | 'small' | 'large';
}

const defineFocusClassName = 'border-primary-500 shadow-outline';
const defineDisabledClassName = 'bg-grey-400 text-grey-100';
const defineTypeClassName = {
  normal: 'h-8',
  small: 'h-6 text-sm',
  large: 'h-10',
};

function Input(props: InputProps) {
  const { label, iconLeft, suffix, type = 'normal', ...rest } = props;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      {label && (
        <Text className="mb-2 block w-full" type="medium">
          {label}
        </Text>
      )}

      <div
        className={`w-full flex h-8 rounded bg-grey-600 border border-grey-400 items-center gap-2 px-3 transition-all duration-200 ${
          defineTypeClassName[type]
        } ${isFocus && defineFocusClassName} ${rest.disabled && defineDisabledClassName}`}>
        {iconLeft && <Icon name={iconLeft} />}
        <input
          className="placeholder:text-grey-300 font-sans bg-transparent flex-1 h-full outline-none"
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          {...rest}
        />
        {suffix && <Text className="text-grey-200 flex items-center leading-none">{suffix}</Text>}
      </div>
    </>
  );
}

export default Input;
