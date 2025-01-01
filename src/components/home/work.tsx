import React, { useEffect } from "react";
import gsap from "gsap";
const Work = () => {
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline();
    gsap.to(".text-section", {
      scrollTrigger: {
        trigger: ".text-section",
        start: "top top",
        end: "+=8000",
        pin: true,
        scrub: 2,
        anticipatePin: 1,
      },
    });
    const workCards = gsap.utils.toArray(".card-work");
    gsap.to([workCards[0], workCards[2]], {
      rotate: 25,
      scrollTrigger: {
        trigger: ".work",
        start: "top top",
        end: "+=2300",
        scrub: 1.5,
      },
    });
    gsap.to([workCards[1], workCards[3]], {
      rotate: -20,
      scrollTrigger: {
        trigger: ".work",
        start: "top top",
        end: "+=2300",
        scrub: 1.5,
      },
    });
    gsap.fromTo(
      ".text-1",
      {
        x: 260,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".work",
          start: "top top",
          end: "+=2300",
          scrub: 1.5,
        },
      }
    );
    gsap.fromTo(
      ".text-2",
      {
        x: -260,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".work",
          start: "top top",
          end: "+=2300",
          scrub: 1.5,
        },
      }
    );
    timeline.fromTo(
      ".text-3",
      {
        opacity: 0,
        scale: 0.2,
        y: 100,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".work",
          start: "top top",
          end: "+=2300",
          scrub: 1.5,
        },
      }
    );
    timeline.to(".black-screen", {
      x: 0,
      scrollTrigger: {
        trigger: ".work",
        start: "+=2300",
        end: "+=3400",
        scrub: 1.5,
      },
    });
  }, []);
  return (
    <div className="relative work">
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[1500px] right-32 rotate-12 card-work"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[700px] right-10 rotate-3 card-work"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[1000px] -rotate-6 card-work"></div>
      <div className="bg-[#CDACFF] h-[300px] w-[600px] rounded-xl shadow-lg shadow-black absolute top-[2000px] left-6 rotate-6 card-work"></div>
      <div className="h-screen flex items-center justify-center flex-col text-section">
        <div className="bg-black h-screen w-screen black-screen absolute z-10 translate-x-full"></div>
        <h1 className="text-[120px] font-bold capitalize">Each of our works</h1>
        <h1 className="text-[120px] font-bold capitalize text-[#CDACFF]">
          were the best among
        </h1>
        <div className="text-[120px] font-bold capitalize flex justify-center gap-5">
          <div className="text-1">Several</div>{" "}
          <div className="text-3">Thousend</div>
          <div className="text-2">Others</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
