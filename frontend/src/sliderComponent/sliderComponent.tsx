import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./sliderStyles.css";

// Swiper CSS
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import type { IItems } from "../interface/Interface";


const SliderComponent = ({ animals }: { animals: IItems[] }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ type: "progressbar" }}
      navigation
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
      className="custom-swiper"
    >
      {animals.filter(animal => animal.isPopular).map((animal) => (
    <SwiperSlide key={animal.id} className="custom-slide">
      <img src={animal.img} alt={animal.name} className="slide-image" />
      <div className="text-overlay">
        <h3>{animal.name}</h3>
        <p>{animal.description || "Beautiful animal waiting for a home."}</p>
      </div>
    </SwiperSlide>
))}
    </Swiper>
  );
};

export default SliderComponent;
