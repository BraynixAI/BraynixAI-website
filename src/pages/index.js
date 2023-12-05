import MarqueeBar from "@/components/HomePage/marque";
import Mouse from "@/components/HomePage/mouse";
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
      {/* <ServiceWork /> */}
      {/* <Slider /> */}
      <Testimonial />
      {/* <GotProject />
      <Development /> */}
      <Footer />
    </div>
  );
}

export default index;
