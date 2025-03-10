import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {
  return (
      <section className="testimonial pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pq-section pq-style-1 text-center">
                <h5 className="pq-section-title"> TESTIMONIALS</h5>
              </div>

              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                loop={true}
                autoplay={{ delay: 3000 }}>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <SwiperSlide key={index}>
                    <div className="pq-testimonial-box pq-style-1">
                      <div className="pq-testimonial-info">
                        <div className="pq-testimonial-content">
                          <div className="pq-testimonial-icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomized
                            words which don’t look even believable. There are
                            many variations of passages.
                          </p>
                        </div>
                      </div>
                      <div className="pq-testimonial-media">
                        <div className="pq-testimonial-meta">
                          <h5>Dr. John Martin</h5>
                          <span>Cancer Research</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <style>
                {`
                .swiper-button-prev,
                .swiper-button-next {
                  background: rgba(0, 0, 0, 0.5);
                  color: white;
                  border: none;
                  padding: 10px;
                  border-radius: 50%;
                  font-size: 20px;
                  cursor: pointer;
                }
              `}
              </style>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
