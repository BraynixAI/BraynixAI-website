import React from "react";
import Product from "../components/Product/productpage";
import HealthCare from "../components/Product/health";
import LogicalSolution from "../components/Product/logical";
import AppBar from "@/components/common_component/Appbar";
import Footer from "@/components/common_component/Footer";

export default function product() {
  return (
    <div>
      <AppBar />
      <Product />
      <HealthCare />
      <LogicalSolution />
      <Footer />
    </div>
  );
}
