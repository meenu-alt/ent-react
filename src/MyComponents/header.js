import React from "react";
import logo from "../assets/images/logo-ent.png";
import "../App.css";
import "../App.js";
  

export default function Header() {
  return (
    <div>
      <header id="pq-header" className="pq-header-style-3 pq-has-sticky ">
        <div className="pq-top-header">
          <div className="container">
            <div className="row flex-row-reverse">
              <div className="col-md-6 text-right">
                <div className="pq-header-social text-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pq-header-contact ">
                  <ul>
                    <li>
                      <a href="tel:09871150032">
                        <i className="fas fa-phone"></i>
                        <span> +91 9871150032</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:09205585295">
                        <i className="fas fa-phone"></i>
                        <span> +91 9205585295</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:entdelhi@gmail.com">
                        <i className="fas fa-envelope"></i>
                        <span>entdelhi@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pq-bottom-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="index.html">
                    <img className="img-fluid logo" src={logo} alt="medicate" />
                  </a>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <div className="pq-menu-contain">
                      <div className="pq-menu-contain">
                        <ul id="pq-main-menu" className="navbar-nav ml-auto">
                          <li className="menu-item current-menu-item">
                            <a href="index.html">Home</a>
                          </li>
                          <li className="menu-item ">
                            <a href="#">Our Services</a>
                            <i className="fa fa-chevron-down pq-submenu-icon"></i>
                            <ul className="sub-menu">
                              <li className="menu-item ">
                                <a href="about-us.html">About Us</a>
                              </li>
                              <li className="menu-item ">
                                <a href="our-services.html">Our Services</a>
                              </li>
                              <li className="menu-item ">
                                <a href="our-process.html">Our Process</a>
                              </li>
                              <li className="menu-item ">
                                <a href="our-plan.html">Our Plans</a>
                              </li>
                              <li className="menu-item-has-children">
                                <a href="#">Our Doctors</a>
                                <i className="fa fa-chevron-down pq-submenu-icon"></i>
                                <ul className="sub-menu">
                                  <li className="menu-item ">
                                    <a href="doctor-1.html">Doctors 1</a>
                                  </li>
                                  <li className="menu-item ">
                                    <a href="our-doctor.html">
                                      Our Doctor Details
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item ">
                                <a href="make-appoinment.html"></a>
                              </li>
                              <li className="menu-item ">
                                <a href="faq.html"> </a>
                              </li>
                              <li className="menu-item ">
                                <a href="404.html"></a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item ">
                            <a href="#">About Us</a>
                          </li>
                          <li className="menu-item ">
                            <a href="#">Blog</a>
                          </li>
                          <li className="menu-item ">
                            <a href="#">Videos</a>
                          </li>
                          <li className="menu-item ">
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pq-header-info-box">
                    <div className="info-icon">
                      <div className="icon">
                        <i className="ti-headphone-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                    <a
                      className="pq-button pq-button-flat"
                      href="about-us.html">
                      <div className="pq-button-block">
                        <span className="pq-button-text">Book Appointment</span>{" "}
                      </div>
                    </a>
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
