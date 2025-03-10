import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const PatientReviews = () => {
  const videoLinks = [
    "2VR2BCE1Fa4",
    "6Uhq6o30pUA",
    "H5sVTYpJPQs",
    "KwY_wKROmVs",
    "MgtkibBG8N8",
    "H5sVTYpJPQs",
    "64bFLbBI-Dw",
  ];

  return (
    <section className="our-work">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <h5 className="pq-section-title">PATIENT'S REVIEWS</h5>
            </div>
          </div>
          <div className="col-lg-12">
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
              {videoLinks.map((videoId, index) => (
                <SwiperSlide key={index}>
                  <div className="pq-portfoliobox pq-style-1">
                    <div className="pq-portfolio-block">
                      <div
                        className="pq-portfolio-img"
                        style={{
                          position: "relative",
                          paddingTop: "177.77%",
                          overflow: "hidden",
                        }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          frameBorder="0"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}></iframe>
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

export default PatientReviews;