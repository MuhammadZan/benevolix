import gsap from "gsap";
import React, { useEffect } from "react";
interface Item {
  text: string;
  image?: string;
}
const TeckCol = ({ items }: { items: Item[] }) => {
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".slide-up", { y: 50, opacity: 0 });
    const elements = document.querySelectorAll(".slide-up");
    elements.forEach((element, index) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        delay: index*0.047,
        scrollTrigger: {
          trigger: ".slide-up",
          start: "top bottom-=200",
          end: "top top",
        },
      });
    });
  });
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="h-[140px] w-[240px] rounded-2xl shadow-xl flex justify-center items-center gap-3 slide-up"
        >
          <p className="text-2xl font-semibold text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default TeckCol;
