interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

function IconGoogleFont(props: IconSVGProps) {
  const { width = 12, height = 9, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 9">
      <g clipPath="url(#clip0_13_205)">
        <path fill="#FBBC04" d="M0 8.895L5.718 0h3.549v1.238l-4.93 7.657"></path>
        <path fill="#1A73E8" d="M9.267 8.895h-3.55V0h3.55v8.895z"></path>
        <path
          fill="#34A853"
          d="M11.83 6.381c0 1.389-1.147 2.514-2.563 2.514V3.868c1.416 0 2.563 1.125 2.563 2.513z"></path>
        <path
          fill="#0D652D"
          d="M9.267 8.895c-1.416 0-2.563-1.125-2.563-2.514 0-1.388 1.147-2.513 2.563-2.513v5.027z"></path>
        <path
          fill="#1A73E8"
          d="M11.239 1.934c0 1.068-.883 1.934-1.972 1.934V0c1.09 0 1.972.866 1.972 1.934z"></path>
        <path
          fill="#174EA6"
          d="M9.267 3.868c-1.09 0-1.972-.866-1.972-1.934S8.178 0 9.267 0v3.868z"></path>
        <path
          fill="#EA4335"
          d="M.197 1.74C.197.78.992 0 1.972 0c.98 0 1.774.78 1.774 1.74 0 .961-.794 1.74-1.774 1.74S.197 2.702.197 1.74z"></path>
      </g>
      <defs>
        <clipPath id="clip0_13_205">
          <path fill="#fff" d="M0 0H11.83V8.895H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconGoogleFont;
