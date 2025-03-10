import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "What is Septoplasty Surgery",
      subtitle: "Common Symptoms and Medications",
      image: "images/blog/1.jpg",
    },
    {
      id: 2,
      title: "Benefits of Regular Check-ups",
      subtitle: "Preventive Healthcare Explained",
      image: "images/blog/2.jpg",
    },
    {
      id: 3,
      title: "Understanding Rhinoplasty",
      subtitle: "Procedure, Risks, and Recovery",
      image: "images/blog/3.jpg",
    },
    {
      id: 4,
      title: "How to Maintain Good Posture",
      subtitle: "Tips for a Healthy Spine",
      image: "images/blog/4.jpg",
    },
    {
      id: 5,
      title: "Dietary Habits for a Healthy Heart",
      subtitle: "Essential Nutrition Guide",
      image: "images/blog/5.jpg",
    },
    {
      id: 6,
      title: "Managing Stress Effectively",
      subtitle: "Mindfulness and Relaxation Techniques",
      image: "images/blog/6.jpg",
    },
    {
      id: 7,
      title: "Importance of Hydration",
      subtitle: "How Water Benefits Your Body",
      image: "images/blog/7.jpg",
    },
    {
      id: 8,
      title: "Best Exercises for Joint Health",
      subtitle: "Stay Active and Pain-Free",
      image: "images/blog/8.jpg",
    },
  ];

  return (
    <section className="pq-blog pq-bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center">
              <span className="pq-section-sub-title">our blog</span>
              <h5 className="pq-section-title">OUR LATEST BLOGS</h5>
            </div>
          </div>
          <div className="col-lg-12">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              loop={true}
              autoplay={{ delay: 3000 }}>
              {blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className="pq-blog-post pq-style-1">
                    <div className="pq-post-media">
                      <img src={blog.image} className="img-fluid" alt="blog" />
                    </div>
                    <div className="pq-blog-contain">
                      <p className="pq-blog-title">{blog.title}</p>
                      <div className="pq-blog-info">
                        <p>
                          <b>{blog.subtitle}</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mt-4">
              <a
                className="pq-button pq-button-flat"
                href="make-appoinment.html">
                <div className="pq-button-block">
                  <span className="pq-button-text">Read More</span>
                </div>
              </a>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
