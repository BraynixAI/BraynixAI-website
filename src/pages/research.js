import React from "react";
import ResearchPage from "../components/Research";
import GetInToch from "../components/Contact/getintoch";
import Covoid19 from "../components/Research/covoid";
import OutDetection from "../components/Research/outdetection";
import CrackDetection from "../components/Research/crackdetection";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";

function research() {
  return (
    <div>
      <AppBar />
      <ResearchPage />
      <Covoid19 />
      <OutDetection />
      <CrackDetection />
      <Footer />
    </div>
  );
}

export default research;
