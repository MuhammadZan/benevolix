import React, { useEffect, useState } from "react";
import Image from "next/image";
import c1 from "@/app/images/c1.png";
import c2 from "@/app/images/c2.png";
import c3 from "@/app/images/c3.png";
import c4 from "@/app/images/c4.png";
import stars from "@/app/images/stars.svg";
import logo from "@/app/images/logo.png";

const HeroSection = () => {
  const [activeRipple, setActiveRipple] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setActiveRipple(1), 0),
      setTimeout(() => setActiveRipple(2), 500),
      setTimeout(() => setActiveRipple(3), 1000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="lg:-mt-[188px] md:-mt-[150px] -mt-[50px]">
      <div className="md:hidden block">
        <Image
          src={logo}
          alt="logo "
          className="absolute w-[100px] top-3 z-[80]"
        />
      </div>
      <div className="relative lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto md:px-5 p-3">
        <div className="relative lg:w-[900px] lg:h-[900px] xl:w-[1073px] xl:h-[1073px] 2xl:h-[1073px] 2xl:w-[1073px] md:w-[650px] md:h-[650px] w-[300px] h-[300px] mx-auto flex items-center justify-center">
          <div
            className={`absolute w-full h-full bg-gradient-to-b from-[#e9dff8] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 3 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute lg:w-[600px] lg:h-[600px] xl:w-[777px] xl:h-[777px] 2xl:h-[777px] 2xl:w-[777px] md:w-[477px] md:h-[477px] w-[200px] h-[200px] bg-gradient-to-b from-[#e2d3f9] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 2 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>

          <div
            className={`absolute lg:w-[300px] lg:h-[300px] xl:w-[432px] xl:h-[432px] 2xl:h-[432px] 2xl:w-[432px] md:w-[232px] md:h-[232px] w-[100px] h-[100px]  bg-gradient-to-b from-[#D6C9EA] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 1 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="w-[270px] md:w-[350px] lg:w-[660px] xl:w-[840px] 2xl:w-[840px] mx-auto ">
          <div className="absolute lg:top-[350px] md:top-[240px] top-[130px]">
            <h1 className="lg:text-[76px] xl:text-[96px] 2xl:text-[96px] md:text-5xl text-3xl text-secondary lg:leading-10 md:leading-[40px] leading-[17px]">
              Welcome
            </h1>
            <h1 className="text-right uppercase font-[800] lg:text-[20px] md:text-[10px] text-[8px]">
              We got you covered
            </h1>
            <div className="flex gap-2 ">
              <h1 className="lg:text-[20px] md:text-[10px] text-[8px] uppercase">
                Your Vision our code
              </h1>
              <h2 className="lg:text-[76px] xl:text-[96px] 2xl:text-[96px] md:text-5xl text-3xl text-secondary lg:leading-[85px] md:leading-[40px] leading-[17px]">
                To Benevolix
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:-mt-[200px] xl:-mt-[350px] 2xl:-mt-[350px] md:-mt-[200px] -mt-[40px] ">
          <div className="md:flex justify-between   md:gap-5 gap-3 mx-auto items-center lg:w-[900px] xl:w-[1200px] 2xl:w-[1200px] w-full">
            <h1 className="lg:text-[24px] md:text-[14px] text-[13px] text-[#7B7B7BED] lg:w-[470px] md:w-[350px] w-[265px] lg:leading-8 leading-tight relative md:mx-0 mx-auto md:text-left text-center">
              Global web development agency delivering holistic, user-focused
              digital solutions to elevate and empower inspiring brands.
            </h1>

            <div className="md:mt-0 mt-5">
              <div className="flex relative group justify-center items-center">
                <div className="relative z-40 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:-rotate-6 hover:scale-105 lg:w-auto md:w-[80px] w-[50px]">
                  <Image src={c3} alt="client" />
                </div>

                <div className="md:-ml-10 -ml-3 relative z-30 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:rotate-6 hover:scale-105 lg:w-auto md:w-[80px] w-[50px]">
                  <Image src={c2} alt="client1" />
                </div>

                <div className="md:-ml-8 -ml-4 relative z-20 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:-rotate-12 hover:scale-105 lg:w-auto md:w-[80px] w-[50px]">
                  <Image src={c1} alt="client2" />
                </div>
                <div className="md:-ml-6 -ml-4 relative z-10 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:rotate-9 hover:scale-105 lg:w-auto md:w-[80px] w-[50px]">
                  <Image src={c4} alt="client3" />
                </div>
              </div>
              <div className="">
                <Image
                  src={stars}
                  alt="star"
                  className="w-[80px] md:w-[150px] mt-2  mx-auto relative"
                />
                <p className="text-secondary mt-2  md:text-[14px] text-[10px] text-center relative">
                  Trusted By 2700+ Clients{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
