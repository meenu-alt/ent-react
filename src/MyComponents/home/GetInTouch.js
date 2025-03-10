import React from "react";

export default function GetInTouch() {
  return (
    <div>
      <section className="get-in-touch">
        <div className="container">
          <div className="pq-bg-white pq-form-bg-white p-4">
            <div className="row align-items-center">
              <div className="col-xl-6 ps-xl-4 mt-4 mt-xl-0 pq-p-45">
                <div className="pq-section pq-style-1 text-left">
                  {/* <span className="pq-section-sub-title">Appointment</span> */}
                  <h5 className="pq-section-title">GET IN TOUCH</h5>
                  <p>
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                    Eu leo molestie vel, ornare non id blandit netus.
                  </p>
                  <div className="pq-section pq-style-1 text-left">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1814325306223!2d77.15069767613537!3d28.564314087174107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac3cbaeea1%3A0xda530ec64e7913b3!2sDr%20Rajesh%20Bhardwaj%20-%20Best%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1741353822175!5m2!1sen!2sin"
                    width="600"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>

                </div>
                </div>
              </div>
              <div className="col-xl-6 ps-xl-4 mt-4 mt-xl-0 pq-p-45">
              <div className="pq-applyform-whitebg p-4 ">
                    <form className="pq-applyform " noValidate>
                      <div className="row">
                        <div className="col-md-12">
                        <label for="email"><b>Name</b></label>
                          <input
                            type="text"
                            name="your-name"
                            id="first-name"
                            className="name-field"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="col-md-12">
                        <label for="email"><b>Email</b></label>
                          <input
                            type="email"
                            name="your-email"
                            id="email"
                            className="email-field"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="col-md-12">
                        <label for="email"><b>Phone Number</b></label>
                          <input
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="phone-number-field"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="col-md-12">
                        <label for="email"><b> How did you find us</b></label>
                          <input
                            type="text"
                            name="your-find"
                            id="media"
                            className="e-mail-field"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="col-md-12 pt-2">
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
          </div>
        </div>
      </section>
    </div>
  );
}