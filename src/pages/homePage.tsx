import React from "react";
import Header from "@/components/globals/header";
import HeroSection from "@/components/home/heroSection";
import About from "@/components/home/about";
import Form from "@/components/home/form";
import Work from "@/components/home/work";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Work />
      <Form />
    </>
  );
};

export default HomePage;
