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
import About from "./MyComponents/about/index.js"



function App() {
  return (
    <Router>
   <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;