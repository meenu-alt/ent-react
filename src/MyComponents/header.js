import React from 'react'
import logo from "../assets/images/logo.webp";
import "../App.css";
import "../App.js";



export default function header() {
  return (
    <div className="pq-bottom-header">
    <div className="pq-header-infobox">
       <div className="container">
          <div className="row">
             <div className="col-lg-12">
                <div className="pq-header-top-wrapper">
                   <div className="pq-site-logo">
                      <a className="navbar-brand" href="index.html">
                         <img className="img-fluid logo" src={logo} alt="medicate"/>
                      </a>
                   </div>
                   <div className="pq-top-info-content">
                      <div className="pq-header-info">
                         <div className="pq-header-info-box">
                            <div className="info-icon">
                               <div className="icon">
                                  <i className="ti-headphone"></i>
                               </div>
                            </div>
                            <div className="info-icon-content">
                               <p><b>+91-9871150032</b></p>
                               <p>+91-9205585295</p>
                            </div>
                         </div>
                         <div className="pq-header-info-box address">
                            <div className="info-icon">
                               <div className="icon">
                                  <i className="ti-location-pin"></i>
                               </div>
                            </div>
                            <div className="info-icon-content">
                               <p><b>Monday to Saturday</b></p>
                               <p>Sunday Closed</p>
                            </div>
                         </div>
                         <div className="pq-header-info-box">
                            <div className="info-icon">
                               <div className="icon">
                                  <i className="ti-email"></i>
                               </div>
                            </div>
                            <div className="info-icon-content">
                               <p><b>entdelhi@gmail.com</b></p>
                               <p>www.entdelhi.com</p>
                            </div>
                         </div>

                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    <div className="pq-header-menu">
       <div id="site-header-menu" className="site-header-menu">
          <div className="container">
             <div className="row">
                <div className="col-lg-12">
                   <nav className="navbar navbar-expand-lg">
                      <a className="navbar-brand" href="index.html">
                         <img className="img-fluid logo" src="images/logo.webp" alt="medicate"/>
                      </a>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <div className="pq-menu-contain">
                            <div className="pq-menu-contain">
                               <ul id="pq-main-menu" className="navbar-nav">
                                  <li className="menu-item current-menu-item">
                                     <a href="index.html">Home</a><i
                                        className="fa fa-chevron-down pq-submenu-icon"></i>
                                     <ul className="sub-menu">
                                        <li className="menu-item">
                                           <a href="storage/index.html">Home 1</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-2.html">Home 2</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-3.html">Home 3</a>
                                        </li>
                                        <li className="menu-item current-menu-item">
                                           <a href="storage/index-4.html" aria-current="page">Home 4</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-5.html">Home 5</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-6.html">Home 6</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-7.html">Home 7</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-8.html">Home 8</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="storage/index-9.html">Home 9</a>
                                        </li>
                                     </ul>
                                  </li>
                                  <li className="menu-item">
                                     <a href="#">Pages</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                     <ul className="sub-menu">
                                        <li className="menu-item">
                                           <a href="about-us.html">About Us</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="our-services.html">Our Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="our-process.html">Our Process</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="our-plan.html">Our Plans</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Our Doctors</a><i
                                              className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="doctor-1.html">Doctors 1</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="our-doctor.html">Our Doctor Details</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item">
                                           <a href="make-appoinment.html">Make Appointments</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="faq.html">FAQ</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="404.html">404</a>
                                        </li>
                                     </ul>
                                  </li>
                                  <li className="menu-item">
                                     <a href="#">Services</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                     <ul className="sub-menu">
                                        <li className="menu-item">
                                           <a href="angioplasty-services.html">Angioplasty Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="cardiology-services.html">Cardiology Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="dental-services.html">Dental Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="endocrinology-services.html">Endocrinology Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="eye-care-services.html">Eye Care Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="nurology-services.html">Neurology Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="orthopaedics-services.html">Orthopaedics Services</a>
                                        </li>
                                        <li className="menu-item">
                                           <a href="rmi-services.html">RMI Services</a>
                                        </li>
                                     </ul>
                                  </li>
                                  <li className="menu-item">
                                     <a href="#">Projects</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                     <ul className="sub-menu">
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Types</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="standard.html">Standard</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="masonry.html">Masonry</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Columns</a><i
                                              className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="2-column.html">2 Column</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="3-column.html">3 Column</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="3-column-wide.html">3 Column Wide</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="4-column-wide.html">4 Column Wide</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Slider</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="2-column-slider.html">2 Column Slider</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="3-column-slider.html">3 Column Slider</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="3-column-slider-wide.html">3 Column Slider Wide</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="4-column-slider.html">4 Column Slider</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="4-column-slider-wide.html">4 Column Slider Wide</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item">
                                           <a href="home-visit.html">Projects Details</a>
                                        </li>
                                     </ul>
                                  </li>
                                  <li className="menu-item">
                                     <a href="#">Blog</a><i className="fa fa-chevron-down pq-submenu-icon"></i>
                                     <ul className="sub-menu">
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Grid Style</a><i
                                              className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="1-column-blog.html">1 Column Blog</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="2-column-blog.html">2 Column Blog</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="3-column-blog.html">3 Column Blog</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                           <a href="#">Blog Sidebar</a><i
                                              className="fa fa-chevron-down pq-submenu-icon"></i>
                                           <ul className="sub-menu">
                                              <li className="menu-item">
                                                 <a href="left-sidebar.html">Left Sidebar</a>
                                              </li>
                                              <li className="menu-item">
                                                 <a href="right-sidebar.html">Right Sidebar</a>
                                              </li>
                                           </ul>
                                        </li>
                                        <li className="menu-item">
                                           <a href="get-the-exercise-limited-mobility.html">Blog Single</a>
                                        </li>
                                     </ul>
                                  </li>
                                  <li className="menu-item">
                                     <a href="contact-us.html">Contact Us</a>
                                  </li>
                               </ul>
                            </div>
                         </div>
                      </div>

                   </nav>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  )
}
