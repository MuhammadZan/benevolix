import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import logo from "@/app/images/logo.png";
import Marquee from "react-fast-marquee";
const HeroSection = () => {
  const [activeRipple, setActiveRipple] = useState(0);
  useEffect(() => {
    const timers = [setTimeout(() => setActiveRipple(3), 0)];
    gsap
      .timeline()
      .to(".wrapper", {
        opacity: 1,
        width: 400,
        delay: 0.5,
        duration: 1,
        ease: "power2.out",
      })
      .to(".wrapper-email", {
        opacity: 1,
        width: 250,
        duration: 1.3,
        ease: "power2.out",
      })
      .to(
        ".line",
        {
          width: 100,
        },
        "<"
      )
      .to(
        ".wrapper-description",
        {
          opacity: 1,
          width: 450,
          duration: 1.3,
          ease: "power2.out",
        },
        "<"
      );
    gsap.fromTo(
      ".tag-line",
      {
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: "power2.out",
      }
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="h-screen  relative ">
      <div className="absolute h-screen w-screen top-0 left-0 pt-12 z-50">
        <div className="flex justify-center items-center">
          <div className="wrapper w-0 overflow-hidden relative p-3 opacity-0">
            <div className="absolute border-2 w-[98%] h-[85%] border-gray-400 top-1 left-1"></div>
            <div className="h-3 w-3 bg-blue-400 absolute top-0 left-0"></div>
            <div className="h-3 w-3 bg-blue-400 absolute top-0 right-0"></div>
            <div className="h-3 w-3 bg-blue-400 absolute bottom-0 left-0"></div>
            <div className="h-3 w-3 bg-blue-400 absolute bottom-0 right-0"></div>
            <div className="flex justify-center items-center w-[400px] border-red gap-5 text-2xl capitalize ">
              <div className="bg-primary w-3 h-3 rounded-full mt-2"></div>
              we are benevolix
              <div className="bg-primary w-3 h-3 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
        <h1 className="text-center text-6xl mt-5 tag-line opacity-0">
          Elevate your buisness through <br /> our creative solutions
        </h1>
        <div className="h-fit absolute bottom-20 w-screen">
          <div className="wrapper-description absolute w-0 -top-28 overflow-hidden left-5 p-3 opacity-0">
            <div className="absolute border-2 w-[98%] h-[92%] border-gray-400 top-1 left-1"></div>
            <div className="h-3 w-3 rounded-full bg-primary absolute top-0 left-0"></div>
            <div className="h-3 w-3 rounded-full bg-primary absolute top-0 right-0"></div>
            <div className="h-3 w-3 rounded-full bg-primary absolute bottom-0 left-0"></div>
            <div className="h-3 w-3 rounded-full bg-primary absolute bottom-0 right-0"></div>
            <div className="flex justify-center flex-col w-[400px] text-lg ">
              Global web development agency delivering holistic, user-focused
              digital solutions to elevate and empower inspiring brands.
            </div>
          </div>
          <h1 className="lg:text-[24px] md:text-[14px] text-[13px] text-[#7B7B7BED] lg:w-[470px] md:w-[350px] w-[265px] lg:leading-8 leading-tight relative md:mx-0 mx-auto md:text-left text-center"></h1>
          <div className="wrapper-email absolute w-0 overflow-hidden right-5 p-3 opacity-0">
            <div className="absolute border-2 w-[96%] h-[85%] border-gray-400 top-1 left-1"></div>
            <div className="h-3 w-3 rounded-full bg-red-400 absolute top-0 left-0"></div>
            <div className="h-3 w-3 rounded-full bg-red-400 absolute top-0 right-0"></div>
            <div className="h-3 w-3 rounded-full bg-red-400 absolute bottom-0 left-0"></div>
            <div className="h-3 w-3 rounded-full bg-red-400 absolute bottom-0 right-0"></div>
            <div className="flex justify-center flex-col w-[250px] text-lg ">
              ideas@benevolix.com
              <div className="line h-0.5 w-0 bg-black"></div>
            </div>
          </div>
          <Marquee className="text-[140px] flex items-center font-light">
            <h1>Shaping The Future</h1>
            <div className="bg-primary w-14 h-14 rounded-full mt-10 ml-32"></div>
          </Marquee>
        </div>
      </div>

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
            className={`absolute w-full h-full bg-gradient-to-b from-[#e9dff84b] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 3 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute lg:w-[600px] lg:h-[600px] xl:w-[777px] xl:h-[777px] 2xl:h-[777px] 2xl:w-[777px] md:w-[477px] md:h-[477px] w-[200px] h-[200px] bg-gradient-to-b from-[#e2d3f94b] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 2 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>

          <div
            className={`absolute lg:w-[300px] lg:h-[300px] xl:w-[432px] xl:h-[432px] 2xl:h-[432px] 2xl:w-[432px] md:w-[232px] md:h-[232px] w-[100px] h-[100px]  bg-gradient-to-b from-[#d6c9ea4b] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 1 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>
        {/* <div className="w-[270px] md:w-[350px] lg:w-[660px] xl:w-[840px] 2xl:w-[840px] mx-auto ">
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
        </div> */}

        {/* <div className="lg:-mt-[200px] xl:-mt-[350px] 2xl:-mt-[350px] md:-mt-[200px] -mt-[40px] ">
          <div className="md:flex justify-between   md:gap-5 gap-3 mx-auto items-center lg:w-[900px] xl:w-[1200px] 2xl:w-[1200px] w-full">
           

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
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
