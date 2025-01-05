import React, { useEffect, useState } from "react";
import Image from "next/image";
import c1 from "@/app/images/c1.png";
import c2 from "@/app/images/c2.png";
import c3 from "@/app/images/c3.png";
import c4 from "@/app/images/c4.png";

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
    <div className="-mt-[188px]">
      <div className="relative">
        <div className="relative w-[1073px] h-[1073px] mx-auto flex items-center justify-center">
          <div
            className={`absolute w-full h-full bg-gradient-to-b from-[#e9dff8] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 3 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute w-[777px] h-[777px] bg-gradient-to-b from-[#e2d3f9] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 2 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>

          <div
            className={`absolute w-[432px] h-[432px] bg-gradient-to-b from-[#D6C9EA] to-transparent backdrop-blur-md rounded-full transition-transform duration-1000 ease-out ${
              activeRipple >= 1 ? "scale-1 opacity-100" : "scale-0 opacity-0"
            }`}
          ></div>
        </div>

        <div className="w-[840px] mx-auto mt-32">
          <div className="absolute top-[350px]">
            <h1 className="text-[96px] text-secondary leading-10">Welcome</h1>
            <h1 className="text-right uppercase font-[800] text-[20px]">
              We got you covered
            </h1>
            <div className="flex gap-2 ">
              <h1 className="text-[20px] uppercase">Your Vision our code</h1>
              <h2 className="text-[96px] text-secondary leading-[85px] ">
                To Benevolix
              </h2>
            </div>
          </div>
        </div>

        <div className="-mt-[500px]">
          <div className="flex justify-between gap-5 mx-auto items-center w-[1200px]">
            <h1 className="text-[24px] text-[#7B7B7BED] w-[470px] leading-8 relative">
              Global web development agency delivering holistic, user-focused
              digital solutions to elevate and empower inspiring brands.
            </h1>

            <div className="flex relative group">
              <div className="relative z-40 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:-rotate-6 hover:scale-105">
                <Image src={c3} alt="client" />
              </div>

              <div className="-ml-10 relative z-30 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:rotate-6 hover:scale-105">
                <Image src={c2} alt="client1" />
              </div>

              <div className="-ml-8 relative z-20 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:-rotate-12 hover:scale-105">
                <Image src={c1} alt="client2" />
              </div>
              <div className="-ml-6 relative z-10 cursor-pointer transform transition-transform duration-500 ease-in-out hover:z-50 hover:rotate-9 hover:scale-105">
                <Image src={c4} alt="client3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
