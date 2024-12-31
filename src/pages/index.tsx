import React from "react";
import Header from "@/components/globals/header";
import HeroSection from "@/components/home/heroSection";

import About from "@/components/home/about";

const Index = () => {
  return (
    <>
      <div className="">
        <Header />
        <HeroSection />
        <About />
      </div>
    </>
  );
};

export default Index;
