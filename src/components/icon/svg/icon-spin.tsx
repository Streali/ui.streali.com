interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconSpin(props: IconSVGProps) {
  const { width = 24, height = 24, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}>
      <rect
        width="12.728"
        height="12.728"
        x="21"
        y="12"
        fill="#fff"
        rx="2"
        transform="rotate(135 21 12)"></rect>
      <rect
        width="12.728"
        height="12.728"
        x="19.794"
        y="7.5"
        fill="#fff"
        fillOpacity="0.5"
        rx="2"
        transform="rotate(105 19.794 7.5)"></rect>
      <rect
        width="12.728"
        height="12.728"
        x="16.5"
        y="4.206"
        fill="#fff"
        fillOpacity="0.16"
        rx="2"
        transform="rotate(75 16.5 4.206)"></rect>
    </svg>
  );
}
