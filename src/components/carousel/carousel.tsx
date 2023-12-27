import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SwiperOptions } from 'swiper/types';

type Props = {
  options: SwiperOptions;
  slides: React.ReactNode[];
};

export function Carousel(props: Props) {
  const { options, slides } = props;

  return (
    <Swiper {...options}>
      {slides.map((slide, index) => (
        <SwiperSlide key={(slide ? slide.toString() : 'slide') + index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
}
