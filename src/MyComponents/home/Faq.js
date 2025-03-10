import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const faqs = [
  {
    question: "What is Septoplasty surgery?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What is Septoplasty surgery?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What is Septoplasty surgery?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pq-section pq-style-1 text-center" >
              <span className="pq-section-sub-title">FAQ</span>
              <h5 className="pq-section-title">FREQUENTLY ASKED QUESTIONS</h5>
            </div>
          </div>

          {[0, 1].map((col) => (
            <div key={col} className=" faq-res col-xl-6 mt-xl-0 mt-5 ps-xl-3">
              <div className="pq-accordion-block mt-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="pq-accordion-box">
                    <div
                      className="pq-ad-title"
                      onClick={() => toggleFAQ(index + col * faqs.length)}>
                      <h6 className="ad-title-text">
                        {faq.question} {faq.question}
                        <i
                          className={`fa ${
                            openIndex === index + col * faqs.length
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}></i>
                      </h6>
                    </div>
                    {openIndex === index + col * faqs.length && (
                      <div className="pq-accordion-details">
                        <p className="pq-detail-text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
