import React from "react";
import ServicePage from "../components/Services";
import Analysis from "../components/Services/analysis";
import GotProject from "@/components/HomePage/gotproject";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";

function service() {
  return (
    <div>
      <AppBar />
      <ServicePage />
      <Analysis />
      <GotProject />
      <Footer />
    </div>
  );
}

export default service;
