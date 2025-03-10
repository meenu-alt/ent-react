import React, { useState } from "react";
import logo from "../assets/images/logo-ent.png";
import "../App.css";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="pq-header" className="pq-header-style-3 pq-has-sticky">
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
              <div className="pq-header-contact">
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

                {/* Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleMenu} // Toggle menu on click
                  aria-expanded={menuOpen}
                  aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>

                {/* Menu Content */}
                <div
                  className={`collapse navbar-collapse ${
                    menuOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent">
                  <ul id="pq-main-menu" className="navbar-nav ml-auto">
                    <li className="menu-item current-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <a href="https://entdelhi.com/our-services/">
                        Our Services
                      </a>
                      <i className="fa fa-chevron-down pq-submenu-icon"></i>
                      <ul className="sub-menu">
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Ear</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="https://entdelhi.com/vertigo-clinic/">
                                Vertigo Clinic
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/audiology/">
                                Audiology
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/deafness-management/">
                                Deafness Management
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/myringoplasty/">
                                Myringoplasty
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/otitis-externa/">
                                Otitis Externa
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/hearing-loss/">
                                Hearing Loss
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/stapes-surgery/">
                                Stapes Surgery
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/myringotomy-with-grommet/">
                                Myringotomy With Grommet
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/hearing-aids/">
                                Hearing Aids
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Nose</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="https://entdelhi.com/endoscopy/">
                                Endoscopy
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/functional-endoscopic-sinus-surgery/">
                                Functional Endoscopic Sinus Surgery
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/?page_id=50651">
                                Septoplasty
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/nasal-polyp-removal/">
                                Nasal Polyp Removal
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/turbinoplasty/">
                                Turbinoplasty
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/repair-of-csf-rhinorrhoea/">
                                Repair of CSF Rhinorrhoea
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/epistaxis/">
                                Epistaxis
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/palatal-injection-for-snoring/">
                                Palatal Injection for Snoring
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Throat</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="https://entdelhi.com/speech-therapy/">
                                Speech Therapy
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/tonsils/">
                                Tonsils
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/vocal-cord-surgery/">
                                Vocal Cord Surgery
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/tonsillectomy/">
                                Tonsillectomy
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/adenoid-surgery-with-tube-insertion/">
                                Adenoid Surgery with Tube
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/mouth-ulcers/">
                                Mouth Ulcers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Endoscopy</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="https://entdelhi.com/laryngoscopy/">
                                Laryngoscopy
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/microlaryngoscopy/">
                                Microlaryngoscopy
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-has-children">
                          <a href="#">Aesthetics</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="https://entdelhi.com/hair-restoration/">
                                Hair Restoration
                              </a>
                            </li>
                            <li>
                              <a href="https://entdelhi.com/facial-aesthetics/">
                                Facial Aesthetics
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="https://entdelhi.com/ent-surgery/">
                            ENT Surgery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children">
                      <Link to="./about">About</Link>
                      <i className="fa fa-chevron-down pq-submenu-icon"></i>
                      <ul className="sub-menu">
                        <li>
                          <a href="https://entdelhi.com/about-the-doctor/">
                            About The Doctor
                          </a>
                        </li>
                        <li>
                          <a href="https://entdelhi.com/about-clinic/">
                            Why Choose MedFirst
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="https://entdelhi.com/blog/">Blog</a>
                    </li>
                    <li className="menu-item">
                      <a href="https://entdelhi.com/videos/">Videos</a>
                    </li>
                    <li className="menu-item">
                      <a href="https://entdelhi.com/contact-us/">Contact Us</a>
                    </li>
                  </ul>
                </div>

                {/* Additional Header Info */}
                <div className="pq-header-info-box">
                  <div className="info-icon">
                    <div className="icon">
                      <i className="ti-headphone-alt" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="pq-menu-search-block">
                    <a href="javascript:void(0)" id="pq-search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <div className="pq-search-form">
                      <form
                        role="search"
                        method="get"
                        className="search-form"
                        action=".html">
                        <label>
                          <span className="screen-reader-text">
                            Search for:
                          </span>
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Search …"
                            name="s"
                          />
                        </label>
                        <button type="submit" className="search-submit">
                          <span className="screen-reader-text">Search</span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <a className="pq-button pq-button-flat" href="about-us.html">
                    <div className="pq-button-block">
                      <span className="pq-button-text">Book Appointment</span>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
