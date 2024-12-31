import React from "react";
import Header from "@/components/globals/header";
import HeroSection from "@/components/home/heroSection";
import About from "@/components/home/about";
import Form from "@/components/home/form";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Form />
    </>
  );
};

export default HomePage;
