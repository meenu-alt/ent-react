import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js"; //Ensure the correct path
import Footer from "./MyComponents/Footer.js";
import { Banner } from "./MyComponents/home/Banner.js";
import {AboutDoctor} from "./MyComponents/home/Banner.js"


function App() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <Banner />
      <AboutDoctor/>
      <Footer />
    </>
  );
}

export default App;