import React from "react";
import img1 from "../../assets/images/service.png";
// import img2 from "../../assets/images/adenoidectomy.png";
// import img3 from "../../assets/images/myringoplasty.png";
// import img4 from "../../assets/images/myringotomy.png";
// import img5 from "../../assets/images/septoplasty.png";
// import img6 from "../../assets/images/turbinectomy.png";
// import img7 from "../../assets/images/fess.png";
// import img8 from "../../assets/images/nasal-polypectomy.png";
// import img9 from "../../assets/images/snoring-sleep-apnea.png";
// import img10 from "../../assets/images/mastoidectomy.png";
// import img11 from "../../assets/images/mls.png";
// import img12 from "../../assets/images/neck-swelling.png";

export default function Surgeries() {
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
    <section>
      <div className="container text-center mt-4">
        <h3 className="fw-bold">ALL ENT SURGERIES</h3>
        <div className="row">
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
