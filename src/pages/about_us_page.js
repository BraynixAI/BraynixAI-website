import AboutUs from "@/components/About/aboutus";
import Client from "@/components/About/client";
import FoundersNote from "@/components/About/foundersnote";
import OurMission from "@/components/About/ourmission";
import OurVision from "@/components/About/ourvision";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";
import React from "react";

function about_us_page() {
  return (
    <div>
      <AppBar />
      <AboutUs />
      <OurMission />
      <OurVision />
      <FoundersNote />
      {/* <Client /> */}
      <Footer />
    </div>
  );
}

export default about_us_page;
