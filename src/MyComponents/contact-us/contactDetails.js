import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="pq-contact-us">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaMapMarkerAlt />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Our Location</h4>
                <p className="pq-contact-box-description">
                  The Queen's Walk, Bishop's, London SE1 7PB, United Kingdom.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-md-0 mt-4">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaPhoneAlt />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Our Contact</h4>
                <p className="pq-contact-box-description">
                  + (567) 1234-567-8900
                  <br />+ (567) 1234-567-8901
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
            <div className="pq-contact-box">
              <div className="pq-contact-box-icon">
                <div className="icon animation-grow">
                  <FaEnvelope />
                </div>
              </div>
              <div className="pq-contact-box-info">
                <h4 className="pq-contact-box-title">Mail Us</h4>
                <p className="pq-contact-box-description">
                  info@peacefulthemes.com
                  <br />
                  info2@peacefulthemes.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
