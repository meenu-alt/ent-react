import React from 'react';
import aboutimg from "../../assets/images/About-us/2.jpg";

export default function AboutDoctor() {
  return (
      <section className="pq-home2-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mt-4 mt-lg-0 contentr-button">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">About the Doctor</span>
                <h5
                  className="pq-section-title"
                  style={{     color: '#131313bd'
                    , fontSize: '45px' }}
                >
                  Dr. (Major) Rajesh Bhardwaj MBBS (AFMC), MS, DNB, DLO, DHA
                </h5> <br/>
                <p className="pq-section-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales 
                </p>
              </div>

              <a className="pq-button pq-button-flat" href="about-us.html">
                <div className="pq-button-block">
                  <span className="pq-button-text">Read More</span>{' '}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </div>
              </a>
            </div>

            <div className="col-lg-5">
              <div className="about-us-img">
                <img
                  src={aboutimg}
                  className="img-fluid pq-image1 wow fadeInRight"
                  alt="home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

