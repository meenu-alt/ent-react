import React from "react";

export default function Blogs() {
  return (
    <div>
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
              <div
                className="owl-carousel owl-theme"
                data-dots="false"
                data-nav="false"
                data-desk_num="4"
                data-lap_num="2"
                data-tab_num="2"
                data-mob_num="1"
                data-mob_sm="1"
                data-autoplay="true"
                data-loop="true"
                data-margin="30"
              >
                <div className="item">
                  <div className="pq-blog-post pq-style-1">
                    <div className="pq-post-media">
                      <img src="images/blog/1.jpg" className="img-fluid" alt="Blog" />
                    </div>
                    <div className="pq-blog-contain">
                      <p className="pq-blog-title">What is Septoplasty Surgery</p>
                      <div className="pq-blog-info">
                        <p>
                          <b>Common Symptoms and Medications</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt-4">
                <a className="pq-button pq-button-flat" href="make-appointment.html">
                  <div className="pq-button-block">
                    <span className="pq-button-text">Read More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}