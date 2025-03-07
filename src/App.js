import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js"; //Ensure the correct path
import Footer from "./MyComponents/Footer.js";
import AboutDoctor from "./MyComponents/home/AboutDoctor.js"
import Banner from "./MyComponents/home/Banner.js";
import WhatWeDo from "./MyComponents/home/WhatWeDo.js";
import Testimonials from "./MyComponents/home/Testimonials.js";
import PatientReviews from "./MyComponents/home/PatientReview.js";
import FollowYt from "./MyComponents/home/FollowYt.js";
import Blogs from "./MyComponents/home/Blogs.js";
import GetInTouch from "./MyComponents/home/GetInTouch.js";


function App() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <Banner />
      <AboutDoctor />
      <WhatWeDo />
      <Testimonials />
      <PatientReviews />
      <FollowYt />
      <Blogs />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;