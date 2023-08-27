import { Link } from '@inertiajs/react';
import { Icon, IconSVG } from '../icon/icon';
import { ComponentPropsWithoutRef, RefObject, forwardRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'transparent' | 'warning' | 'success' | 'stroke';
  link?: string;
  external?: boolean;
  size?: 'normal' | 'small';
  loading?: boolean;
  iconLeft?: string;
  iconLeftSvg?: IconSVG;
  iconRight?: string;
  iconRightSvg?: IconSVG;
  iconSvgWidth?: number;
  iconSvgHeight?: number;
  iconSvgClassName?: string;
}

const defineColorClassName = {
  primary:
    '!bg-primary-500 hover:!bg-primary-600 focus-visible:!bg-primary-500 outline-primary-500',
  secondary:
    '!bg-secondary-500 hover:!bg-secondary-600 text-grey-700 focus-visible:!bg-secondary-500 outline-secondary-500',
  error: '!bg-error-500 focus-visible:!bg-error-500 outline-error-500 hover:!bg-error-600',
  transparent: 'bg-transparent hover:!bg-grey-400 focus-visible:!bg-transparent outline-grey-100',
  warning:
    '!bg-warning-500 text-grey-700 focus-visible:!bg-warning-500 outline-warning-500 hover:!bg-warning-600',
  success:
    '!bg-success-500 focus-visible:!bg-success-500 outline-success-500 hover:!bg-success-600',
  stroke:
    'bg-transparent border border-grey-400 hover:!bg-grey-400 focus-visible:bg-transparent outline-grey-100',
};

const defineDisableClassName = `bg-grey-100 text-grey-400 hover:bg-grey-100 focus-visible:bg-grey-400 outline-grey-100 cursor-not-allowed`;

const defineSizeClassName = {
  normal: 'h-10 px-3',
  small: 'h-5 px-2.5 text-sm rounded-full',
};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    children,
    color = 'primary',
    link,
    external = false,
    size = 'normal',
    loading = false,
    iconLeft,
    iconRight,
    iconLeftSvg,
    iconRightSvg,
    iconSvgWidth,
    iconSvgHeight,
    iconSvgClassName = '',
    ...rest
  } = props;

  const content = (
    <>
      {loading && <Icon name="loader-4-line" spin />}
      {iconLeft && !loading && <Icon name={iconLeft} />}
      {iconLeftSvg && !loading && (
        <Icon
          svg={iconLeftSvg}
          width={iconSvgWidth}
          height={iconSvgHeight}
          className={iconSvgClassName}
        />
      )}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          width={iconSvgWidth}
          height={iconSvgHeight}
          className={iconSvgClassName}
        />
      )}
      {iconRightSvg && <Icon svg={iconRightSvg} />}
    </>
  );

  const defineClassName = `!cursor-pointer rounded inline-flex justify-center gap-2 items-center transition-color duration-200 focus-visible:outline-1 focus-visible:outline focus-visible:outline-offset-2 ${
    defineColorClassName[color]
  } ${defineSizeClassName[size]} ${rest.disabled && defineDisableClassName} ${rest.className}`;

  if (link && !external) {
    return (
      <Link href={link} className={defineClassName}>
        {content}
      </Link>
    );
  }

  if (link && external) {
    return (
      <a href={link} className={defineClassName} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button {...rest} className={defineClassName} ref={ref as RefObject<HTMLButtonElement>}>
      {content}
    </button>
  );
});
