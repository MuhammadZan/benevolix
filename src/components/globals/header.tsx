import React from "react";
import benevolix from "@/app/images/benevolix.png";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] mx-auto px-5">
        <div className="flex justify-between gap-5 mt-5 items-center">
          <div className="">
            <Image src={benevolix} className="w-[200px]" alt="logo" />
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-white text-md hover:underline cursor-pointer">
              About Us
            </p>
            <p className="text-white text-md hover:underline cursor-pointer">
              Services
            </p>
            <p className="text-white text-md hover:underline cursor-pointer">
              Contact Us
            </p>
          </div>
          <div className="">
            <button className="text-white  border-2 border-blue-900 px-5 py-3 rounded-lg hover:bg-blue-900 hover:text-white ease-in-out duration-200">
              Get In touch{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
