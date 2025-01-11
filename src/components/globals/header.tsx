import React from "react";
import logo from "@/app/images/logo.png";
import Image from "next/image";
import { useRef, useEffect } from "react";
const Header = () => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const animateit = function (this: any, e: any) {
    if (buttonRef.current) {
      const element: HTMLButtonElement | null = this.querySelector(".link");
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      if (!element) {
        return;
      }
      element.style.transform = `translate(${xMove}px, ${yMove}px)`;
      const cursor: HTMLDivElement | null = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.transform = "scale(4)";
      }
      if (e.type === "mouseleave") {
        element.style.transform = "";
        if (cursor) {
          cursor.style.transform = "scale(1)";
        }
      }
    }
  };
  useEffect(() => {
    const items = document.querySelectorAll(".hover-this");
    if (items) {
      items.forEach((item) => {
        item.addEventListener("mousemove", animateit);
        item.addEventListener("mouseleave", animateit);
      });
    }
  }, []);
  return (
    <>
      <div className="flex justify-between gap-5 items-center relative z-10">
        <div className="">
          <Image src={logo} className="w-[200px]" alt="logo" />
        </div>
        <div className="flex gap-8 items-center ">
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
        </div>
        <div className="p-3 hover-this" ref={buttonRef}>
          <button className="rounded-full px-6 py-2.5 border-2 border-black items-center link">
            <div className="flex items-center gap-2 ">
              <span className="bg-[#26FF00] rounded-full p-[2.2px] inline-block"></span>
              <h1>Lets Chat</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
