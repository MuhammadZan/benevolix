import React, { useEffect, useRef } from "react";
import HomePage from "./homePage";

const Index = () => {
  const cursor = useRef<HTMLDivElement | null>(null);
  const editCursor = (e: any) => {
    const { clientX: x, clientY: y } = e;
    if (cursor.current) {
      cursor.current.style.left = x + "px";
      cursor.current.style.top = y + "px";
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("mousemove", editCursor);
    }
  }, []);
  return (
    <>
      <div className="">
        <HomePage />
        <div className="cursor z-20" ref={cursor} onClick={()=>{alert("cursor click"),console.log("click")}}></div>
      </div>
    </>
  );
};

export default Index;
