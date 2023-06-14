interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconFlex(props: IconSVGProps) {
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
        width="8"
        height="8"
        x="3"
        y="11"
        fill="#fff"
        rx="2"
        transform="rotate(-90 3 11)"></rect>
      <path
        fill="#fff"
        fillOpacity="0.5"
        fillRule="evenodd"
        d="M12.818 5v7.818H5a2 2 0 00-2 2V19a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4.182a2 2 0 00-2 2z"
        clipRule="evenodd"></path>
    </svg>
  );
}
