interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconKick(props: IconSVGProps) {
  const { width = 24, height = 24, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 1h7.125v4.889H12.5V3.444h2.375V1H22v7.333h-2.375v2.445H17.25v2.444h2.375v2.445H22V23h-7.125v-2.445H12.5v-2.444h-2.375V23H3V1z"
        clipRule="evenodd"></path>
    </svg>
  );
}
