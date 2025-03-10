import React from 'react'
import logo from "../assets/images/logo-ent.png";
import "../App.css";
import "../App.js";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/animations.min.css";
import "../assets/css/responsive.css";
import "../assets/css/ionicons.min.css";
import "../assets/css/jquery.mCustomScrollbar.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/progressbar.css";


export default function Footer() {
  return (
      <footer id="pq-footer">
        <div className="pq-footer-style-1">
          <div className="pq-footer-top container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="pq-subscribe-details">
                  <h5 className="pq-section-title">Subs To News Letter</h5>
                  <p>
                    Consetetur dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div className="col-lg-12 align-self-center">
                <div className="pq-subscribe-from">
                  <form id="form" className="form">
                    <div className="form-fields">
                      <input
                        className="w-100 pq-bg-transparent"
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Your Email"
                        required=""
                      />
                      <input className="" type="submit" value="Subscribe" />
                    </div>
                  </form>
                  <p>We’ll never share your email with anyone else.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pq-subscribe align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="pq-subscribe-bg">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-3 col-md-2">
                          <div className="pq-footer-block">
                            <img
                              src={logo}
                              className="pq-footer-logo img-fluid"
                              alt="medicate-footer-logo"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6  col-md-7">
                          <h4 className="footer-title">Quick Links</h4>
                          <div className="row">
                            <div className="col-xl-3 col-md-4">
                              <div className="spacce">
                                <ul>
                                  <li>
                                    <a href="about-us.html">Tonsillectomy </a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">Adenoidectomy</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">Myringoplasty</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">Myringotomy</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xl-3 col-md-4">
                              <div className="spacce">
                                <ul>
                                  <li>
                                    <a href="about-us.html">Septoplasty </a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">Turbinectomy</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">FESS</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">
                                      Nasal Polypectomy
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xl-6 col-md-4">
                              <div className="spacce">
                                <ul>
                                  <li>
                                    <a href="about-us.html">
                                      Snoring & Sleep Apnea Surgery{" "}
                                    </a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">
                                      MastoidectomyAbout Us
                                    </a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">MLS</a>
                                  </li>
                                  <li>
                                    <a href="about-us.html">
                                      Removal of Neck Swelling
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-3  col-md-3">
                          <div className="pq-footer-block">
                            <h4 className="footer-title">Contact Us</h4>
                            <div className="row">
                              <div className="col-sm-12">
                                <ul className="pq-contact">
                                  <li>
                                    {" "}
                                    <a href="tel:+1800001658">
                                      <i className="fas fa-phone"></i>
                                      <span>+91 98711 50032</span>
                                      <br></br>
                                      <span>+91 9205585295</span>
                                    </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="mailto:info@peacefulthemes.com">
                                      <i class="fa-solid fa-clock"></i>
                                      <span>
                                        Monday To Saturday<br></br>Sunday closed
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="mailto:info@peacefulthemes.com">
                                      <i className="fas fa-map-marker"></i>
                                      <span>
                                        MedFirst ENT Centre D 3/14, Ground Floor
                                        Vasant Vihar New Delhi 110057
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 col-md-12 ">
                          <div className="pq-footer-social">
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
                        <div className="col-xl-12 col-md-12 ">
                          <div className="footer-container">
                            <p className="copyright">
                              Copyright © 1999 - 2025 ENTMedfirst. All Rights
                              Reserved.
                            </p>
                            <div className="footer-links">
                              <a href="#">Privacy Policy</a>
                              <span className="separator"></span>
                              <a href="#">Terms & Conditions</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pq-copyright-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center ">
                  {" "}
                  <span className="pq-copyright">
                    {" "}
                    Copyright 2022 medicate All Rights Reserved
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
