'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface TitleRotateProps {
  elements: React.ReactNode[];
  className?: string;
  slideClassName?: string;
}

export function TitleRotate(props: TitleRotateProps) {
  const { elements, className = '', slideClassName = '' } = props;

  return (
    <Swiper
      direction="vertical"
      loop
      slidesPerView={1}
      spaceBetween={0}
      init
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false,
      }}
      className={`h-20 !w-fit bg-grey-900 !inline-flex flex-col gap-2 !px-8 rounded-full border border-grey-400 text-4xl overflow-hidden ${className}`}>
      {elements.map((element) => (
        <SwiperSlide
          className={`h-20 !flex min-h-[5rem] items-center gap-2 ${slideClassName}`}
          key={Math.random()}>
          {element}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
