interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconBorderTop(props: IconSVGProps) {
  const { width = 24, height = 24, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}>
      <path stroke="#fff" strokeWidth="2" d="M6 3L18 3"></path>
      <path stroke="#fff" strokeWidth="2" d="M6 21L18 21" opacity="0.3"></path>
      <path stroke="#fff" strokeWidth="2" d="M3 18L3 6" opacity="0.3"></path>
      <path stroke="#fff" strokeWidth="2" d="M21 18L21 6" opacity="0.3"></path>
    </svg>
  );
}
