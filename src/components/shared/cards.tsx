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
      className={` lg:w-[720px] lg:h-[450px] xl:w-[820px] xl:h-[520px] 2xl:w-[850px] 2xl:h-[583px] md:w-[650px] md:h-[465px] h-[300px] md:rounded-[100px] rounded-[37px] relative overflow-hidden md:my-10 my-0 md:p-10 p-3 ${className}`}
    >
      <Image
        src={halfCircle}
        alt="circle"
        className="absolute top-0 left-0  lg:w-[290px] md:w-[250px] w-[150px] "
      />
      <Image
        src={halfCircle2}
        alt="circle"
        className="absolute bottom-0  left-0 lg:w-[290px] md:w-[250px] w-[150px]"
      />

      <div className="relative z-10 md:ml-0 ml-5">
        <h2 className="lg:text-[150px] xl:text-[200px] 2xl:text-[232px] md:text-[200px] text-[100px] md:ml-[60px] ml-0 text-[#ffffff] font-extrabold leading-none opacity-20">
          {number}
        </h2>
        <h3 className="lg:text-[58px] xl:text-[60px] 2xl:text-[64px] md:text-[42px] text-[28px] text-black  leading-normal lg:w-[609px] w-full">
          {title}
        </h3>
        <p className="md:text-[16px] text-[14px] text-[#5D5D5D] my-4 w-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Cards;
