import React from "react";
import Breadcrum from "./Breadcrum.js";
import ContactInfo from "./contactDetails.js";
import GetInTouchMap from "./GetInTouchMap.js"
import "./contact.css"

function Home() {
  return (
    <div>
      <main>
        <Breadcrum />
        <ContactInfo />
        <GetInTouchMap />
      </main>
    </div>
  );
}

export default Home;    

