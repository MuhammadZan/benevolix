import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import home from "@/app/images/home.svg";
import about from "@/app/images/about.svg";
import services from "@/app/images/services.svg";
import team from "@/app/images/team.svg";
import contact from "@/app/images/contact.svg";
import portfolio from "@/app/images/Portfolio.svg";
import layer from "@/app/images/layer.svg";

const BottomMenu: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const layerRef = useRef<HTMLImageElement | null>(null);
  const menuRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const defaultTarget = menuRef.current[0];
    const layerEl = layerRef.current;

    if (defaultTarget && layerEl) {
      const targetRect = defaultTarget.getBoundingClientRect();
      gsap.set(layerEl, {
        left: targetRect.left + targetRect.width / 2 - 31,
      });
    }
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    const target = menuRef.current[index];
    const layerEl = layerRef.current;

    if (target && layerEl) {
      const targetRect = target.getBoundingClientRect();
      gsap.to(layerEl, {
        duration: 0.5,
        left: targetRect.left + targetRect.width / 2 - 31,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="lg:hidden block">
      <div className="fixed bottom-6 w-full px-2 z-[50]">
        <div className="w-full bg-white flex gap-2 justify-around py-2.5 rounded-[20px] px-3 shadow-lg relative">
          <Image
            ref={layerRef}
            src={layer}
            alt="Layer"
            className="absolute w-[46px] h-[19px] transform transition-transform"
            style={{ bottom: "-4.3px", position: "absolute", left: "0px" }}
          />

          {[
            { img: home, label: "Home" },
            { img: about, label: "About" },
            { img: portfolio, label: "Portfolio" },
            { img: services, label: "Services" },
            { img: team, label: "Our Teams" },
            { img: contact, label: "Contact" },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) menuRef.current[index] = el;
              }}
              className="group flex flex-col items-center justify-center relative cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <Image
                src={item.img}
                alt={item.label}
                className={`w-[20px] h-[20px] mx-auto transition-transform duration-300 ${
                  activeIndex === index ? "scale-110" : "group-hover:scale-110"
                }`}
              />
              <p
                className={`text-black text-medium text-[10px] mt-[3px] text-center transition-all duration-300 ${
                  activeIndex === index
                    ? "font-semibold text-[11px]"
                    : "group-hover:font-semibold"
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
