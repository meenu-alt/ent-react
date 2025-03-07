import React from 'react'
import logo from "../assets/images/logo.webp";
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
    <div>
      <footer id="pq-footer">
        <div class="pq-footer-style-1">
          <div class="pq-footer-top container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="pq-subscribe-details">
                  <h5>Subs To News Letter</h5>
                  <p>
                    Consetetur dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </p>
                </div>
              </div>
              <div class="col-lg-12 align-self-center">
                <div class="pq-subscribe-from">
                  <form id="form" class="form">
                    <div class="form-fields">
                      <input
                        class="w-100 pq-bg-transparent"
                        type="email"
                        name="EMAIL"
                        placeholder="Enter Your Email"
                        required=""
                      />
                      <input class="" type="submit" value="Sign up" />
                    </div>
                  </form>
                  <p>We’ll never share your email with anyone else.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="pq-subscribe align-items-center">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-12">
                  <div class="pq-subscribe-bg">
                    <div class="container">
                      <div class="row">
                        <div class="col-xl-2 col-md-2">
                          <div class="pq-footer-block">
                            <img
                              src={logo}
                              class="pq-footer-logo img-fluid"
                              alt="medicate-footer-logo"
                            />
                          </div>
                        </div>
                        <div class="col-xl-7  col-md-7">
                          <h4 class="footer-title">Quick Links</h4>
                          <div class="row">
                            <div class="col-xl-4 col-md-4">
                              <div class="spacce">
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
                            <div class="col-xl-4 col-md-4">
                              <div class="spacce">
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
                            <div class="col-xl-4 col-md-4">
                              <div class="spacce">
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
                        {/* <div class="col-xl-6  col-md-6">
                                       <div class="pq-footer-block">
                                          <h4 class="footer-title">Quick Links</h4>
                                          <div class="menu-useful-links-container">
                                             <ul id="menu-useful-links" class="menu">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li><a href="contact-us.html">Contact Us</a></li>
                                                <li><a href="our-services.html">Our Services</a></li>
                                                <li><a href="our-process.html">Our Process</a></li>
                                                <li><a href="doctor-1.html">Doctors 1</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="our-doctor.html">Doctors 2</a></li>
                                                <li><a href="home-visit.html">Departments</a></li>
                                                <li><a href="make-appoinment.html">Events</a></li>
                                                <li><a href="our-plan.html">Member</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div> */}

                        <div class="col-xl-3  col-md-3">
                          <div class="pq-footer-block">
                            <h4 class="footer-title">Contact Us</h4>
                            <div class="row">
                              <div class="col-sm-12">
                                <ul class="pq-contact">
                                  <li>
                                    {" "}
                                    <a href="tel:+1800001658">
                                      <i class="fas fa-phone"></i>
                                      <span> +1800-001-658</span>
                                    </a>{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="mailto:info@peacefulthemes.com">
                                      <i class="fas fa-envelope"></i>
                                      <span>info@peacefulthemes.com</span>
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <i class="fas fa-map-marker"></i>{" "}
                                    <span>
                                      Themeforest, Envato HQ 24 Fifth st., Los
                                      Angeles, USA{" "}
                                    </span>{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-md-12 ">
                          <div class="pq-footer-social">
                            <ul>
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-google-plus-g"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-pinterest"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pq-copyright-footer">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center ">
                  {" "}
                  <span class="pq-copyright">
                    {" "}
                    Copyright 2022 medicate All Rights Reserved
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
