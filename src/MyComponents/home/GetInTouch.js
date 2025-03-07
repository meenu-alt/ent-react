import React from "react";

export default function GetInTouch() {
  return (
    <div>
      <section className="get-in-touch">
        <div className="container">
          <div className="pq-bg-white pq-form-bg-white p-5">
            <div className="row align-items-center">
              <div className="col-xl-6 ps-xl-4 mt-4 mt-xl-0 pq-p-45">
                <div className="pq-section pq-style-1 text-left">
                  {/* <span className="pq-section-sub-title">Appointment</span> */}
                  <h5 className="pq-section-title">GET IN TOUCH</h5>
                  <p>
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                    Eu leo molestie vel, ornare non id blandit netus.
                  </p>
                  <div className="pq-applyform-whitebg mt-5">
                    <form className="pq-applyform" noValidate>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="your-name"
                            id="first-name"
                            className="name-field"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="your-gender"
                            id="gender"
                            className="gender-field"
                            placeholder="Gender"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="phone-number-field"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <input
                            type="email"
                            name="your-email"
                            id="e-mail"
                            className="e-mail-field"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="pq-button form-btn">
                            <div className="pq-button-block">
                              <span className="pq-button-text me-0">
                                SEND MESSAGE
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 ps-xl-4 mt-4 mt-xl-0 pq-p-45">
                <div className="pq-section pq-style-1 text-left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5523063800465!2d77.1001897!3d28.7030359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x457337d44efc2e7d%3A0x15c2d6e26dcaa6e1!2sPerformdigi%20Monetize!5e0!3m2!1sen!2sin!4v1741166366670!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
