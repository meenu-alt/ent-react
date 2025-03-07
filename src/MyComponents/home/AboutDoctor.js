import React from 'react';

export default function AboutDoctor() {
  return (
    <div>
      <section className="pq-home2-about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="pq-section pq-style-1 text-left">
                <span className="pq-section-sub-title">About the Doctor</span>
                <h5
                  className="pq-section-title"
                  style={{ color: '#4C906F', fontSize: '40px' }}
                >
                  Dr. (Major) Rajesh Bhardwaj MBBS (AFMC), MS, DNB, DLO, DHA
                </h5>
                <p className="pq-section-description">
                  Dr. (Major) Bhardwaj graduated from Armed Forces Medical
                  College (AFMC), Pune in 1982 and served in the Indian Army for
                  15 years, where he gained vast clinical experience as an ENT
                  specialist. He has served in the largest and busiest hospitals
                  of the armed forces including Command Hospitals at Pune and
                  Chandigarh and at the Army Hospital (R&R), Delhi Cantt.
                </p>
              </div>

              <a className="pq-button pq-button-flat" href="about-us.html">
                <div className="pq-button-block">
                  <span className="pq-button-text">Read More</span>{' '}
                  <i className="ion ion-plus-round"></i>
                </div>
              </a>
            </div>

            <div className="col-lg-6">
              <div className="about-us-img">
                <img
                  src="images/About-us/2.jpg"
                  className="img-fluid pq-image1 wow fadeInRight"
                  alt="home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

