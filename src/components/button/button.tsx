type ButtonProps = {
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'transparent' | 'warning' | 'success' | 'stroke';
  link?: string;
  external?: boolean;
  size: 'normal' | 'small';
  loading?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const defineColorClassName = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500 text-grey-700',
  error: 'bg-error-500',
  transparent: 'bg-transparent',
  warning: 'bg-warning-500',
  success: 'bg-success-500',
  stroke: 'bg-transparent border border-grey-400',
};

const defineSizeClassName = {
  normal: 'h-8 px-2',
  small: 'h-5 px-2 text-sm',
};

function Button(props: ButtonProps) {
  const {
    children,
    color = 'primary',
    link,
    external = false,
    size = 'normal',
    loading = false,
    ...rest
  } = props;

  if (link && !external) {
    return <p>{children}</p>;
  }

  return <div>Button</div>;
}

export default Button;
