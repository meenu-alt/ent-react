import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../../assets/rev/assets/1-51.jpg";
// import banner2 from "../../assets/rev/assets/2-52.jpg";
// import banner3 from "../../assets/rev/assets/3-53.jpg";

const BannerCarousel = () => {
  return (
    <section className="banner-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ height: "600px" }}>
        <SwiperSlide>
          <img
            src={banner1}
            alt="Banner 1"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner1}
            alt="Banner 2"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner1}
            alt="Banner 3"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
