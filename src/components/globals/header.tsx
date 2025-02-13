import React, { useState } from "react";
import logo from "@/app/images/logo.png";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const animateit = function (this: any, e: any) {
    const element: HTMLButtonElement | null = this.querySelector(".link");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;
    if (!element) {
      return;
    }
    gsap.to(element, { x: xMove, y: yMove, ease: "power2.out", duration: 0.5 });
    if (e.type == "mouseleave") {
      gsap.to(element, { x: 0, y: 0, ease: "power2.out", duration: 0.5 });
    }
  };
  useEffect(() => {
    const items = document.querySelectorAll(".hover-this");
    if (items) {
      items.forEach((item) => {
        item.addEventListener("mousemove", animateit);
        item.addEventListener("mouseleave", animateit);
        item.addEventListener("mouseover", animateit);
      });
    }
  }, []);

  return (
    <>
      <div className="lg:block hidden ">
        <div className="absolute z-[100] w-screen h-screen border-2">
          <div className="absolute z-10 w-full h-full flex justify-center items-center p-10 flex-col text-white">
            <div className="hover-this p-3">
              <h1 className="text-8xl link nav-links opacity-0">
                About
              </h1>
            </div>
            <div className="hover-this p-3">
              <h1 className="text-8xl link nav-links opacity-0">
                Portfolio
              </h1>
            </div>
            <div className="hover-this p-3">
              <h1 className="text-8xl link nav-links opacity-0">
                Services
              </h1>
            </div>
            <div className="hover-this p-3">
              <h1 className="text-8xl link nav-links opacity-0">
                Technologies
              </h1>
            </div>
          </div>
          <div className="triangle-1 -translate-x-full -translate-y-full  h-1/2 w-1/2 bg-primary absolute top-0 left-0"></div>
          <div className="triangle-2 translate-x-full -translate-y-full h-1/2 w-1/2 bg-primary absolute top-0 right-0"></div>
          <div className="triangle-3 -translate-x-full translate-y-full h-1/2 w-1/2 bg-primary absolute bottom-0 left-0"></div>
          <div className="triangle-4 translate-x-full translate-y-full h-1/2 w-1/2 bg-primary absolute bottom-0 right-0"></div>
        </div>
        <div className="flex justify-between gap-5 items-center relative z-[101]">
          <div className="">
            <Image src={logo} className="w-[200px]" alt="logo" />
          </div>
          {/* <div className="flex gap-8 items-center ">
            <div className="hover-this p-3">
              <p className="text-secondary text-light text-[16px] cursor-none link">
                Home
              </p>
            </div>
            <div className="hover-this p-3">
              <p className="text-secondary text-light text-[16px] cursor-none link">
                Portfolio
              </p>
            </div>
            <div className="hover-this p-3">
              <p className="text-secondary text-light text-[16px] cursor-none link">
                Vision
              </p>
            </div>
            <div className="hover-this p-3">
              <p className="text-secondary text-light text-[16px] cursor-none link">
                Services
              </p>
            </div>
            <div className="hover-this p-3">
              <p className="text-secondary text-light text-[16px] cursor-none link">
                Our Teams
              </p>
            </div>
          </div> */}
          <div className="flex justify-center items-center gap-2">
            <div className="p-3 hover-this">
              <button className="rounded-full px-6 py-2.5 border-2 border-black items-center link">
                <div className="flex items-center gap-2 ">
                  <span className="bg-[#26FF00] rounded-full p-[2.2px] inline-block"></span>
                  <h1>Lets Chat</h1>
                </div>
              </button>
            </div>
            <div
              onClick={() => {
                const tl = gsap.timeline();
                const elem = gsap.utils.toArray(".nav-links");

                if (!isMenuVisible) {
                  tl.to(".triangle-1", { x: 0, y: 0 });
                  tl.to(".triangle-2", { x: 0, y: 0 }, "<");
                  tl.to(".triangle-3", { x: 0, y: 0 }, "<");
                  tl.to(".triangle-4", { x: 0, y: 0 }, "<");
                  tl.to(elem, {
                    opacity: 1,
                  });
                  setIsMenuVisible((pre) => !pre);
                } else {
                  tl.to(elem, {
                    opacity: 0,
                  });
                  tl.to(".triangle-1", { x: "-100%", y: "-100%" });
                  tl.to(".triangle-2", { x: "100%", y: "-100%" }, "<");
                  tl.to(".triangle-3", { x: "-100%", y: "100%" }, "<");
                  tl.to(".triangle-4", { x: "100%", y: "100%" }, "<");
                  setIsMenuVisible((pre) => !pre);
                }
              }}
              className="p-5 hover-this flex justify-center items-center "
            >
              <button className="rounded-full border-2 mix-blend-difference border-black overflow-hidden transition-all duration-300 items-center link">
                <div className="flex flex-col items-center justify-center gap-1 w-10 h-10 transition-all duration-200 inner-bg">
                  <div className="w-5 h-0.5 bg-black rounded-3xl"></div>
                  <div className="w-5 h-0.5 bg-black rounded-3xl"></div>
                  <div className="w-5 h-0.5 bg-black rounded-3xl"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
