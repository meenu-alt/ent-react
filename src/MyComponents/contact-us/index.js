import React from "react";
import Breadcrum from "./breadcrum.js";
import ContactInfo from "./contactDetails.js";

function Home() {
  return (
    <div>
      <main>
        <Breadcrum />
        <ContactInfo />
      </main>
    </div>
  );
}

export default Home;
