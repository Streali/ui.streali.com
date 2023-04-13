type IconProps = {
  name: string;
  className?: string;
};

export default function Icon(props: IconProps) {
  const { name, className = '' } = props;

  return <i className={`ri-${name} ${className}`}></i>;
}
