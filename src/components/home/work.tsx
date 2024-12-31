import React, { useEffect } from "react";
import gsap from "gsap";
const Work = () => {
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".text-section", {
      scrollTrigger: {
        trigger: ".text-section",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });
  }, []);
  return (
    <div className="relative work">
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[1500px] right-32 rotate-12"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[700px] right-10 rotate-3"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[1000px] -rotate-6"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[2000px] left-6 rotate-6"></div>
      <div className="h-screen flex items-center justify-center flex-col text-section">
        <h1 className="text-[120px] font-bold capitalize">Each of our works</h1>
        <h1 className="text-[120px] font-bold capitalize text-[#CDACFF]">
          were the best among
        </h1>
        <h1 className="text-[120px] font-bold capitalize">Several Others</h1>
      </div>
    </div>
  );
};

export default Work;
