import Icon from '../icon/icon';
import type { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'transparent' | 'warning' | 'success' | 'stroke';
  link?: string;
  external?: boolean;
  size: 'normal' | 'small';
  loading?: boolean;
  iconLeft?: string;
  iconRight?: string;
}

const defineColorClassName = {
  primary: 'bg-primary-500 hover:bg-primary-600 focus-visible:bg-primary-500 outline-primary-500',
  secondary:
    'bg-secondary-500 hover:bg-secondary-600 text-grey-700 focus-visible:bg-secondary-500 outline-secondary-500',
  error: 'bg-error-500 focus-visible:bg-error-500 outline-error-500 hover:bg-error-600',
  transparent: 'bg-transparent hover:bg-grey-400 focus-visible:bg-transparent outline-grey-100',
  warning:
    'bg-warning-500 text-grey-700 focus-visible:bg-warning-500 outline-warning-500 hover:bg-warning-600',
  success: 'bg-success-500 focus-visible:bg-success-500 outline-success-500 hover:bg-success-600',
  stroke:
    'bg-transparent border border-grey-400 hover:bg-grey-400 focus-visible:bg-transparent outline-grey-100',
};

const defineDisableClassName = `bg-grey-100 text-grey-400 hover:bg-grey-100 focus-visible:bg-grey-400 outline-grey-100 cursor-not-allowed`;

const defineSizeClassName = {
  normal: 'h-8 px-2',
  small: 'h-5 px-2.5 text-sm rounded-full',
};

function Button(props: ButtonProps) {
  const {
    children,
    color = 'primary',
    link,
    external = false,
    size = 'normal',
    loading = false,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  const content = (
    <>
      {loading && <Icon name="loader-4-line" spin />}
      {iconLeft && !loading && <Icon name={iconLeft} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </>
  );

  const defineClassName = `rounded inline-flex justify-center gap-2 items-center transition-color duration-200 focus-visible:outline-1 focus-visible:outline focus-visible:outline-offset-2 ${
    defineColorClassName[color]
  } ${defineSizeClassName[size]} ${rest.disabled && defineDisableClassName} ${rest.className}`;

  if (link && !external) {
    return <p className={defineClassName}>{content}</p>;
  }

  if (link && external) {
    return (
      <a href={link} className={defineClassName} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={defineClassName} {...rest}>
      {content}
    </button>
  );
}

export default Button;
