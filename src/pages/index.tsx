import React, { useEffect, useRef } from "react";
import HomePage from "./homePage";
import gsap from "gsap";
import { montserrat } from "@/app/fonts";

const Index = () => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const editCursor = (e: any) => {
    const { clientX: x, clientY: y } = e;
    let circle = cursor.current;
    console.log(x, y, circle);
    if (circle) {
      gsap.to(circle, {
        x: x,
        y: y,
        ease: "power2.out",
      });
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", editCursor);
    }
  }, []);
  return (
    <>
      <div>
        <div
          className="fixed w-3 h-3 bg-white rounded-full z-[1001] mix-blend-difference pointer-events-none"
          ref={cursor}
        ></div>
        <HomePage />
      </div>
    </>
  );
};

export default Index;
