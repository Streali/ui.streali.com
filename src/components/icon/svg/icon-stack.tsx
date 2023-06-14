interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconStack(props: IconSVGProps) {
  const { width = 24, height = 24, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}>
      <rect width="18" height="8" x="3" y="3" fill="#fff" rx="2"></rect>
      <rect width="18" height="8" x="3" y="13" fill="#fff" fillOpacity="0.5" rx="2"></rect>
    </svg>
  );
}
