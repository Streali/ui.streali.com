interface IconSVGProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function IconRadiusTopLeft(props: IconSVGProps) {
  const { width = 24, height = 24, className = '' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className}>
      <mask
        id="mask0_111_1136"
        style={{ maskType: 'alpha' }}
        width="20"
        height="20"
        x="2"
        y="2"
        maskUnits="userSpaceOnUse">
        <path
          stroke="#fff"
          strokeWidth="2"
          d="M6 3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z"></path>
      </mask>
      <g mask="url(#mask0_111_1136)">
        <path fill="#fff" d="M2 2H10V10H2z"></path>
      </g>
      <g opacity="0.3">
        <mask
          id="mask1_111_1136"
          style={{ maskType: 'alpha' }}
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse">
          <path
            stroke="#fff"
            strokeWidth="2"
            d="M21 6v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3z"></path>
        </mask>
        <g mask="url(#mask1_111_1136)">
          <path fill="#fff" d="M22 2H30V10H22z" transform="rotate(90 22 2)"></path>
        </g>
      </g>
      <g opacity="0.3">
        <mask
          id="mask2_111_1136"
          style={{ maskType: 'alpha' }}
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse">
          <path
            stroke="#fff"
            strokeWidth="2"
            d="M18 21H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3z"></path>
        </mask>
        <g mask="url(#mask2_111_1136)">
          <path fill="#fff" d="M22 22H30V30H22z" transform="rotate(-180 22 22)"></path>
        </g>
      </g>
      <g opacity="0.3">
        <mask
          id="mask3_111_1136"
          style={{ maskType: 'alpha' }}
          width="20"
          height="20"
          x="2"
          y="2"
          maskUnits="userSpaceOnUse">
          <path
            stroke="#fff"
            strokeWidth="2"
            d="M3 18V6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3z"></path>
        </mask>
        <g mask="url(#mask3_111_1136)">
          <path fill="#fff" d="M2 22H10V30H2z" transform="rotate(-90 2 22)"></path>
        </g>
      </g>
    </svg>
  );
}
