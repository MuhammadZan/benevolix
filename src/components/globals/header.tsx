import React from "react";
import logo from "@/app/images/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="flex justify-between gap-5 items-center">
        <div className="">
          <Image src={logo} className="w-[200px]" alt="logo" />
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-secondary text-light text-[16px] hover:underline cursor-pointer">
            Portfolio
          </p>
          <p className="text-secondary text-light text-[16px] hover:underline cursor-pointer">
            Vision
          </p>
          <p className="text-secondary text-light text-[16px] hover:underline cursor-pointer">
            Services
          </p>
          <p className="text-secondary text-light text-[16px] hover:underline cursor-pointer">
            Our Teams
          </p>
        </div>
        <div className="">
          <button className="flex gap-2 rounded-full px-6 py-2.5 border-2 border-black items-center ">
            <div className="bg-[#26FF00] rounded-full p-[2.2px]"></div>
            <h1>Lets Chat </h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
