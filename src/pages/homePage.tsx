import React from "react";
import Header from "@/components/globals/header";
import HeroSection from "@/components/home/heroSection";
import About from "@/components/home/about";
import Form from "@/components/home/form";
import Work from "@/components/home/work";
import Slider from "@/components/home/sliders";
import BottomMenu from "@/components/globals/bottom-menu";
import MobileCard from "@/components/home/mobile-card";
import TechStack from "@/components/home/TechStack";

const HomePage = () => {
  return (
    <>
      <Header />
      <BottomMenu />
      <HeroSection />
      <About />
      <TechStack />
      <MobileCard />
      {/* <Work />
      <Slider /> */}
      <Form />
    </>
  );
};

export default HomePage;
