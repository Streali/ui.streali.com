interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconPop(props: IconSVGProps) {
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
        width="19.5"
        height="19.5"
        x="21.75"
        y="2.25"
        stroke="#fff"
        strokeOpacity="0.2"
        strokeWidth="0.5"
        rx="3.75"
        transform="rotate(90 21.75 2.25)"></rect>
      <rect
        width="15.5"
        height="15.5"
        x="19.75"
        y="4.25"
        stroke="#fff"
        strokeOpacity="0.53"
        strokeWidth="0.5"
        rx="2.75"
        transform="rotate(90 19.75 4.25)"></rect>
      <rect
        width="12"
        height="12"
        x="18"
        y="6"
        fill="#fff"
        rx="2"
        transform="rotate(90 18 6)"></rect>
    </svg>
  );
}
