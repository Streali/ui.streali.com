import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperOptions } from 'swiper/types';

type Props = {
  options: SwiperOptions;
  children: React.ReactNode;
};

export function Carousel(props: Props) {
  const { options, children } = props;

  return <Swiper {...options}>{children}</Swiper>;
}

export function Slide(props: { children: React.ReactNode }) {
  return <SwiperSlide>{props.children}</SwiperSlide>;
}
