import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderStyles.css";

type Animal = {
  id: string | number | undefined;
  img: string;
  name: string;
  description?: string;
};

const SliderComponent = ({ animals }: { animals: Animal[] }) => {
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
      {animals.map((animal) => (
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
