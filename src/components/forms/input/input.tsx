import { ComponentPropsWithoutRef, RefObject, forwardRef, useState } from 'react';
import { Text } from '../../text/text';
import { Icon } from '../../icon/icon';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  labelClassName?: string;
  containerClassName?: string;
  iconLeft?: string;
  suffix?: string;
  shape?: 'normal' | 'small' | 'large';
  errorMessage?: string;
}

const defineFocusClassName = 'border-primary-500 shadow-outline';
const defineDisabledClassName = 'bg-grey-400 text-grey-100';
const defineShapeClassName = {
  normal: 'h-10',
  small: 'h-8 text-sm',
  large: 'h-12',
};
const defineErrorClassName = 'border-error-500';

export const Input = forwardRef((props: InputProps, ref) => {
  const {
    label,
    labelClassName = '',
    containerClassName = '',
    iconLeft,
    suffix,
    shape = 'normal',
    errorMessage,
    ...rest
  } = props;
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      {label && (
        <Text className={`mb-2 block w-full ${labelClassName}`} type="medium">
          {label}
        </Text>
      )}

      <div
        className={`w-full flex h-10 rounded justify-between bg-grey-600 border border-grey-400 items-center gap-2 px-3 transition-all duration-200 ${
          defineShapeClassName[shape]
        } ${isFocus && defineFocusClassName} ${rest.disabled && defineDisabledClassName} ${
          errorMessage && defineErrorClassName
        } ${containerClassName}`}>
        {iconLeft && <Icon name={iconLeft} className="-mt-0.5" />}
        <input
          {...rest}
          className={`placeholder:text-grey-300 font-sans bg-transparent flex-1 h-full outline-none -mt-0.5 appearance-none w-full ${rest.className}`}
          ref={ref as RefObject<HTMLInputElement>}
          onBlur={(e) => {
            rest.onBlur?.(e);
            setIsFocus(false);
          }}
          onFocus={(e) => {
            setIsFocus(true);
            rest.onFocus?.(e);
          }}
        />
        {suffix && (
          <Text className="text-grey-200 flex items-center leading-none -mt-0.5">{suffix}</Text>
        )}
      </div>
      {errorMessage && (
        <Text type="medium" className="text-error-500">
          {errorMessage}
        </Text>
      )}
    </>
  );
});
