interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconScaleUp(props: IconSVGProps) {
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
        width="11"
        height="11"
        x="17.5"
        y="11"
        fill="#fff"
        rx="2"
        transform="rotate(90 17.5 11)"></rect>
      <rect
        width="16"
        height="16"
        x="20"
        y="6"
        fill="#fff"
        fillOpacity="0.5"
        rx="2"
        transform="rotate(90 20 6)"></rect>
      <rect
        width="20"
        height="20"
        x="22"
        y="2"
        fill="#fff"
        fillOpacity="0.2"
        rx="2"
        transform="rotate(90 22 2)"></rect>
    </svg>
  );
}
