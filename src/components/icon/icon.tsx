import IconAllBorder from './svg/icon-all-border';
import IconBorderBottom from './svg/icon-border-bottom';
import IconBorderLeft from './svg/icon-border-left';
import IconBorderRight from './svg/icon-border-right';
import IconBorderTop from './svg/icon-border-top';
import IconFade from './svg/icon-fade';
import IconFlex from './svg/icon-flex';
import IconFontshare from './svg/icon-fontshare';
import IconGoogleFont from './svg/icon-googlefont';
import IconInline from './svg/icon-inline';
import IconKick from './svg/icon-kick';
import IconPop from './svg/icon-pop';
import IconRadiusBottomRight from './svg/icon-radius-bottom-right';
import IconRadiusBottomLeft from './svg/icon-radius-bottomleft';
import IconRadiusTopRight from './svg/icon-radius-top-right';
import IconRadiusTopLeft from './svg/icon-radius-topleft';
import IconScaleUp from './svg/icon-scale-up';
import IconSlideDown from './svg/icon-slide-down';
import IconSlideLeft from './svg/icon-slide-left';
import IconSlideRight from './svg/icon-slide-right';
import IconSlideUp from './svg/icon-slide-up';
import IconSpin from './svg/icon-spin';
import IconSplitBorder from './svg/icon-split-border';
import IconSplitRadius from './svg/icon-split-radius';
import IconStack from './svg/icon-stack';

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
  'stack' = 'stack',
  'inline' = 'inline',
  'flex' = 'flex',
  'slide-right' = 'slide-right',
  'slide-left' = 'slide-left',
  'slide-up' = 'slide-up',
  'slide-down' = 'slide-down',
  'scale-up' = 'scale-up',
  'fade' = 'fade',
  'pop' = 'pop',
  'spin' = 'spin',
  'kick' = 'kick',
}

interface IconProps {
  name?: string;
  svg?: IconSVG;
  className?: string;
  spin?: boolean;
  width?: number;
  height?: number;
}

export function Icon(props: IconProps) {
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
    [IconSVG['stack']]: <IconStack width={width} height={height} className={className} />,
    [IconSVG['inline']]: <IconInline width={width} height={height} className={className} />,
    [IconSVG['flex']]: <IconFlex width={width} height={height} className={className} />,
    [IconSVG['slide-right']]: (
      <IconSlideRight width={width} height={height} className={className} />
    ),
    [IconSVG['slide-left']]: <IconSlideLeft width={width} height={height} className={className} />,
    [IconSVG['slide-up']]: <IconSlideUp width={width} height={height} className={className} />,
    [IconSVG['slide-down']]: <IconSlideDown width={width} height={height} className={className} />,
    [IconSVG['scale-up']]: <IconScaleUp width={width} height={height} className={className} />,
    [IconSVG['fade']]: <IconFade width={width} height={height} className={className} />,
    [IconSVG['pop']]: <IconPop width={width} height={height} className={className} />,
    [IconSVG['spin']]: <IconSpin width={width} height={height} className={className} />,
    [IconSVG['kick']]: <IconKick width={width} height={height} className={className} />,
  };

  if (svg) return svgIcon[svg];

  return <i className={`ri-${name} ${spin ? 'animate-spin' : ''} ${className}`}></i>;
}
