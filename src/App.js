import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header.js"; //Ensure the correct path
import Footer from "./MyComponents/Footer.js";
// import AboutDoctor from "./MyComponents/home/AboutDoctor.js"
// import Banner from "./MyComponents/home/Banner.js";
// import WhatWeDo from "./MyComponents/home/WhatWeDo.js";
// import Testimonials from "./MyComponents/home/Testimonials.js";
// import PatientReviews from "./MyComponents/home/PatientReview.js";
// import FollowYt from "./MyComponents/home/FollowYt.js";
// import Faq from "./MyComponents/home/Faq.js";
// import Blogs from "./MyComponents/home/Blogs.js";
// import GetInTouch from "./MyComponents/home/GetInTouch.js";
import Home from "./MyComponents/home/Index.js";
import AboutTheDocktor from "./MyComponents/about-the-doctor/index.js"
import AboutClinic from "./MyComponents/about-clinic/index.js"
import Blog from "./MyComponents/blog/index.js"
import VIdeos from "./MyComponents/videos/index.js"
import ContactUs from "./MyComponents/contact-us/index.js"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-the-doctor" element={<AboutTheDocktor />} />
        <Route path="/about-clinic" element={<AboutClinic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/videos" element={<VIdeos />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;