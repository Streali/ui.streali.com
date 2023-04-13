interface IconProps {
  name: string;
  className?: string;
  spin?: boolean;
}

export default function Icon(props: IconProps) {
  const { name, className = '', spin } = props;

  return <i className={`ri-${name} ${spin ? 'animate-spin' : ''} ${className}`}></i>;
}
