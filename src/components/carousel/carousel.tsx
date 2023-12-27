import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperOptions } from 'swiper/types';

interface Props extends SwiperOptions {
  children: React.ReactNode;
  className?: string;
}

export function Carousel(props: Props) {
  const { children, className = '', ...rest } = props;

  return (
    <Swiper className={className} {...rest}>
      {children}
    </Swiper>
  );
}

export function Slide(props: { children: React.ReactNode }) {
  return <SwiperSlide>{props.children}</SwiperSlide>;
}
