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
    const workCards = gsap.utils.toArray(".card-work");
    
  }, []);
  return (
    <>
      <div className="relative work px-5">
        <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[1500px] right-32 rotate-12 card-work">
          <Image
            src={p1}
            alt="p1"
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
          
        </div>
      </div>
    </>
  );
};

export default Work;
