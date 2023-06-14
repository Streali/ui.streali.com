interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconFade(props: IconSVGProps) {
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
        width="16"
        height="16"
        x="20"
        y="4"
        fill="url(#paint0_linear_201_983)"
        rx="2"
        transform="rotate(90 20 4)"></rect>
      <defs>
        <linearGradient
          id="paint0_linear_201_983"
          x1="20"
          x2="32"
          y1="12"
          y2="12"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
