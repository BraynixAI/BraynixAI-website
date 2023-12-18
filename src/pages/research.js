import React from "react";
import ResearchPage from "../components/Research";
import GetInToch from "../components/Contact/getintoch";
import Covoid19 from "../components/Research/covoid";
import OutDetection from "../components/Research/outdetection";
import CrackDetection from "../components/Research/crackdetection";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";
import ResearchButton from "@/components/Research/button";

function research() {
  return (
    <div>
      <AppBar />
      <ResearchPage />
      <ResearchButton />
      <div className="scroll-down overflow-y-auto scroll-smooth h-screen">
        <Covoid19 />
        <OutDetection />
        <CrackDetection />
      </div>

      <Footer />
    </div>
  );
}

export default research;
