import React from "react";
import CaseStudy from "../components/CaseStudy";
import OurProcess from "../components/CaseStudy/ourprocess";
import Competitor from "../components/CaseStudy/competitor";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";

function casestudy() {
  return (
    <div>
      <AppBar />
      <CaseStudy />
      <Competitor />
      <Footer />
    </div>
  );
}

export default casestudy;
