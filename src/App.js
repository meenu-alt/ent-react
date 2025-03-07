import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js"; //Ensure the correct path
import Footer from "./MyComponents/Footer.js";
import AboutDoctor from "./MyComponents/home/AboutDoctor.js"
import Banner from "./MyComponents/home/Banner.js";
import WhatWeDo from "./MyComponents/home/WhatWeDo.js";
import Surgeries from "./MyComponents/home/Surgeries.js";


function App() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <Banner />
      <AboutDoctor />
      <WhatWeDo />
      <Surgeries />
      <Footer />
    </>
  );
}

export default App;