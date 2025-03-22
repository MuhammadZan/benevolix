import Image from "next/image";
import React from "react";
import p from "@/app/images/p1.jpg"
const ProjectCard = () => {
  return (
    <div className="slides border mt-10 border-white p-5 h-[300px] w-[500px] flex justify-center items-center">
      <Image src={p} className=" w-full h-full object-cover" alt=""/>
    </div>
  );
};

export default ProjectCard;
