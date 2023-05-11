import IconAllBorder from './svg/icon-all-border';
import IconBorderBottom from './svg/icon-border-bottom';
import IconBorderLeft from './svg/icon-border-left';
import IconBorderRight from './svg/icon-border-right';
import IconBorderTop from './svg/icon-border-top';
import IconFontshare from './svg/icon-fontshare';
import IconGoogleFont from './svg/icon-googlefont';
import IconRadiusBottomRight from './svg/icon-radius-bottom-right';
import IconRadiusBottomLeft from './svg/icon-radius-bottomleft';
import IconRadiusTopRight from './svg/icon-radius-top-right';
import IconRadiusTopLeft from './svg/icon-radius-topleft';
import IconSplitBorder from './svg/icon-split-border';
import IconSplitRadius from './svg/icon-split-radius';

export enum IconSVG {
  'googlefont' = 'googlefont',
  'fontshare' = 'fontshare',
  'all-border' = 'all-border',
  'split-border' = 'split-border',
  'border-top' = 'border-top',
  'border-right' = 'border-right',
  'border-bottom' = 'border-bottom',
  'border-left' = 'border-left',
  'split-radius' = 'split-radius',
  'radius-top-left' = 'radius-top-left',
  'radius-top-right' = 'radius-top-right',
  'radius-bottom-right' = 'radius-bottom-right',
  'radius-bottom-left' = 'radius-bottom-left',
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
    [IconSVG['all-border']]: <IconAllBorder width={width} height={height} className={className} />,
    [IconSVG['split-border']]: (
      <IconSplitBorder width={width} height={height} className={className} />
    ),
    [IconSVG['border-top']]: <IconBorderTop width={width} height={height} className={className} />,
    [IconSVG['border-right']]: (
      <IconBorderRight width={width} height={height} className={className} />
    ),
    [IconSVG['border-bottom']]: (
      <IconBorderBottom width={width} height={height} className={className} />
    ),
    [IconSVG['border-left']]: (
      <IconBorderLeft width={width} height={height} className={className} />
    ),
    [IconSVG['split-radius']]: (
      <IconSplitRadius width={width} height={height} className={className} />
    ),
    [IconSVG['radius-top-left']]: (
      <IconRadiusTopLeft width={width} height={height} className={className} />
    ),
    [IconSVG['radius-top-right']]: (
      <IconRadiusTopRight width={width} height={height} className={className} />
    ),
    [IconSVG['radius-bottom-right']]: (
      <IconRadiusBottomRight width={width} height={height} className={className} />
    ),
    [IconSVG['radius-bottom-left']]: (
      <IconRadiusBottomLeft width={width} height={height} className={className} />
    ),
  };

  if (svg) return svgIcon[svg];

  return <i className={`ri-${name} ${spin ? 'animate-spin' : ''} ${className}`}></i>;
}
