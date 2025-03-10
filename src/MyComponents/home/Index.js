import React from "react";
import AboutDoctor from "./AboutDoctor.js";
import Banner from "./Banner.js";
import WhatWeDo from "./WhatWeDo.js";
import Testimonials from "./Testimonials.js";
import PatientReviews from "./PatientReview.js";
import FollowYt from "./FollowYt.js";
import Faq from "./Faq.js";
import Blogs from "./Blogs.js";
import GetInTouch from "./GetInTouch.js";

function Home() {
  return (
    <div>
      <main>
        <Banner />
        <AboutDoctor />
        <WhatWeDo />
        <Testimonials />
        <PatientReviews />
        <FollowYt />
        <Faq />
        <Blogs />
        <GetInTouch />
      </main>
    </div>
  );
}

export default Home;
