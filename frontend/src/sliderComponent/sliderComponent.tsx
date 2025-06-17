// SwiperComponent.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Swiper CSS
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';


export default function SwiperComponent() {
  // მაგიდის მაგალითი სურათები, შეგიძლია შეცვალო შენი მონაცემებით
  const slides = [
    'https://picsum.photos/id/1018/600/300',
    'https://picsum.photos/id/1015/600/300',
    'https://picsum.photos/id/1019/600/300',
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ type: 'progressbar' }}
      navigation={true}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
      style={{ width: '600px', height: '300px' }}
    >
      {slides.map((url, index) => (
        <SwiperSlide key={index}>
          <img
            src={url}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
