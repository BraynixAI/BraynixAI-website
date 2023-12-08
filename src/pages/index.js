import Development from "@/components/HomePage/development";
import GotProject from "@/components/HomePage/gotproject";
import Mouse from "@/components/HomePage/mouse";
import WhatWeActually from "@/components/HomePage/servicework";
import Slider from "@/components/HomePage/slider";
import Testimonial from "@/components/HomePage/testimonial";
import Welcome from "@/components/HomePage/welcome";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <Welcome />
      <Mouse />
      <WhatWeActually />
      <Development />
      {/* <ServiceWorker /> */}
      <Testimonial />
      <GotProject />
      <Slider />
      <Footer />
    </div>
  );
}

export default index;
