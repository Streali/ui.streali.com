import IconFontshare from './svg/icon-fontshare';
import IconGoogleFont from './svg/icon-googlefont';

export enum IconSVG {
  'googlefont' = 'googlefont',
  'fontshare' = 'fontshare',
}

interface IconProps {
  name?: string;
  svg?: IconSVG;
  className?: string;
  spin?: boolean;
  width?: number;
  height?: number;
}

export default function Icon(props: IconProps) {
  const { name, className = '', spin, svg, width, height } = props;

  const svgIcon = {
    [IconSVG.googlefont]: <IconGoogleFont width={width} height={height} className={className} />,
    [IconSVG.fontshare]: <IconFontshare width={width} height={height} className={className} />,
  };

  if (svg) return svgIcon[svg];

  return <i className={`ri-${name} ${spin ? 'animate-spin' : ''} ${className}`}></i>;
}
