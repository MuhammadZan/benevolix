import React from "react";
import Image from "next/image";
import halfCircle from "@/app/images/halfCircle1.png";
import halfCircle2 from "@/app/images/halfCircle2.png";

interface Icard {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const Cards: React.FC<Icard> = ({
  number,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`card w-[850px] h-[583px] rounded-[100px] relative overflow-hidden mt-10 p-10 ${className}`}
    >
      <Image
        src={halfCircle}
        alt="circle"
        className="absolute top-0 left-0  w-[290px] "
      />
      <Image
        src={halfCircle2}
        alt="circle"
        className="absolute bottom-0  left-0 w-[290px] "
      />

      <div className="relative z-10">
        <h2 className="text-[232px] ml-[60px] text-[#ffffff] font-extrabold leading-none opacity-20">
          {number}
        </h2>
        <h3 className="text-[64px] text-black  leading-normal w-[609px]">
          {title}
        </h3>
        <p className="text-[16px] text-black mt-4 w-full">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
