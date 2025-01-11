import React, { useEffect } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import Image from "next/image";
import p1 from "@/app/images/p1.jpg";
import p2 from "@/app/images/p2.png";
import p3 from "@/app/images/p3.png";
import p4 from "@/app/images/p4.jpg";
import WorkSlider from "../workSlider";
const Work = () => {
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline();
    gsap.to(".text-section", {
      scrollTrigger: {
        trigger: ".text-section",
        start: "top top",
        end: "+=22000",
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
      borderRadius: "0",
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: ".work",
        start: "+=2300",
        end: "+=3400",
        scrub: 1.5,
      },
    });
    timeline.to(".white-scroll", {
      borderRadius: "0",
      height: "100%",
      scrollTrigger: {
        trigger: ".work",
        start: "+=5500",
        end: "+=5800",
        scrub: 1.5,
      },
    });
    timeline.to(".white-screen", {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".work",
        start: "+=10000",
        end: "+=10500",
        scrub: 1.5,
      },
    });
  }, []);
  return (
    <div className="relative work px-5">
      <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[1500px] right-32 rotate-12 card-work">
        <Image
          src={p1}
          alt="p1"
          className="h-[277px] w-[434px] object-cover rounded-xl"
        />
      </div>
      <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[700px] right-10 rotate-3 card-work">
        <Image
          src={p2}
          alt="p2"
          className="h-[277px] w-[434px] object-cover rounded-xl"
        />
      </div>
      <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[1000px] -rotate-6 card-work">
        <Image
          src={p3}
          alt="p3"
          className="h-[277px] w-[434px] object-cover rounded-xl"
        />
      </div>
      <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[2000px] left-6 rotate-6 card-work">
        <Image
          src={p4}
          alt="p4"
          className="h-[277px] w-[434px] object-cover rounded-xl"
        />
      </div>
      <div className="h-screen flex items-center justify-center flex-col text-section ">
        <div className="bg-primary h-screen w-screen black-screen absolute z-10 translate-x-full flex items-center justify-between px-20">
          <div className="w-[219px] h-[219px] rounded-full bg-[#c095ff] absolute -bottom-[80px] right-12 top-12"></div>
          <div className="p-5 relative">
            <div className="w-[219px] h-[219px] rounded-full bg-[#c095ff] absolute -bottom-[80px] -left-[60px]"></div>
            <div className="bg-purple-500 w-[5px] h-[300px] rounded-md ml-3 relative">
              <div className="bg-white w-full h-[0px] white-scroll rounded-md"></div>
            </div>

            <h1 className="text-[24px] font-medium italic text-[#E4D3FF] w-[513px] relative pl-3">
              Each of our works were the best among several thousand other in
              its niche
            </h1>
          </div>
          <div className="flex w-[998px] relative">
            <h1 className="text-[80px] text-[#E4D3FF] font-bold text-right p-10 capitalize leading-tight ">
              Most can write code, but only a few can innovate solutions
            </h1>
            <Icon
              icon={"ci:double-quotes-l"}
              className="text-purple-500 h-56 w-56"
            />
          </div>
        </div>
        <div className="h-screen w-screen white-screen absolute z-10 translate-y-full py-32">
          <WorkSlider />
        </div>
        <h1 className="text-[120px] font-bold capitalize relative z-[-10]">
          Each of our works
        </h1>
        <h1 className="text-[120px] font-bold capitalize text-[#CDACFF] ">
          were the best among
        </h1>
        <div className="text-[120px] font-bold capitalize flex justify-center gap-5">
          <div className="text-1">Several</div>{" "}
          <div className="text-3">Thousend</div>{" "}
          <div className="text-2">Others</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
