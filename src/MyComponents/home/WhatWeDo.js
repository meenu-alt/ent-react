import React from "react";
import img1 from "../../assets/images/service.png";

export default function WhatWeDo() {
  const surgeries = [
    { image: img1, alt: "Tonsillectomy" },
    { image: img1, alt: "Adenoidectomy" },
    { image: img1, alt: "Myringoplasty" },
    { image: img1, alt: "Myringotomy" },
    { image: img1, alt: "Septoplasty" },
    { image: img1, alt: "Turbinectomy" },
    { image: img1, alt: "FESS" },
    { image: img1, alt: "Nasal Polypectomy" },
    { image: img1, alt: "Snoring & Sleep Apnea Surgery" },
    { image: img1, alt: "Mastoidectomy" },
    { image: img1, alt: "MLS" },
    { image: img1, alt: "Removal of Neck Swelling" },
  ];

  return (
    <section className="pq-home2-about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mt-4 mt-lg-0">
            <div className="pq-section pq-style-1 text-left">
              <span className="pq-section-sub-title">What we do</span>
              <h5
                className="pq-section-title"
                style={{ color: "#4C906F", fontSize: "40px" }}>
                ENT Consultation, Surgeries & Treatment
              </h5>
              <p className="pq-section-description">
                MedFirst ENT Centre was established in 1997. Since then, it has
                undergone regular improvements and upgrades to become a centre
                of excellence for the diagnosis and management of ENT disorders
                in the NCR. We get patients from all over India and overseas as
                well.
                <br />
                We offer the latest technology and equipment and expertise in
                the management of ENT diseases.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 text-center">
          {surgeries.map((surgery, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className="surgery-box">
                <img src={surgery.image} alt={surgery.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
