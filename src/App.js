import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header.js"; //Ensure the correct path
import Footer from "./MyComponents/Footer.js";

function App() {
  return (
    <>
      <Header /> {/* Use the Header component */}
      <Footer />
    </>
  );
}

export default App;
