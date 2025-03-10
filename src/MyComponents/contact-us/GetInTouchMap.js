import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="pq-contact-us form-map">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-8 pq-form-box">
            <div className="form-container">
              <div className="pq-section pq-style-1 text-center p-0">
                <span className="pq-section-sub-title">Contact Us</span>
                <h5 className="pq-section-title">Get in touch with us</h5>
              </div>
            </div>
            <div className="pq-applyform-whitebg text-start">
              <form className="pq-applyform">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="first-name"
                      name="your-name"
                      className="name-field"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="email"
                      id="e-mail"
                      name="your-email"
                      className="e-mail-field"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="phone-number"
                      name="phone-number"
                      className="phone-number-field"
                      placeholder="Enter Your Phone Number"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <input
                      type="text"
                      id="subject"
                      name="your-Subject"
                      className="subject-field"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <textarea
                      name="your-message"
                      id="message"
                      cols="40"
                      rows="5"
                      placeholder="Write Your Message"
                      required></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="pq-button form-btn">
                      <span className="pq-button-text">Send Message</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map pt-0">
        <div className="pq-bg-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1814325306223!2d77.15069767613541!3d28.564314087174107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dac3cbaeea1%3A0xda530ec64e7913b3!2sDr%20Rajesh%20Bhardwaj%20-%20Best%20ENT%20Clinic!5e0!3m2!1sen!2sin!4v1741609904082!5m2!1sen!2sin"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
