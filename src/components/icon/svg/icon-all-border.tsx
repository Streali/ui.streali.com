interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconAllBorder(props: IconSVGProps) {
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
        stroke="#fff"
        strokeWidth="2"
        d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z"></path>
    </svg>
  );
}
