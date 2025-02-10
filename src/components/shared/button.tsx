import React, { useEffect, useRef } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const animateit = function (e: any) {
    if (buttonRef.current) {
      const element: HTMLButtonElement | null =
        buttonRef.current.querySelector(".link");
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = buttonRef.current,
        move = 30,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      if (!element) {
        return;
      }
      element.style.transform = `translate(${xMove}px, ${yMove}px)`;
      const cursor: HTMLDivElement | null = document.querySelector(".cursor");
      if (cursor) {
        cursor.style.transform = "scale(8)";
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
    if (buttonRef.current) {
      buttonRef.current.addEventListener("mousemove", animateit);
      buttonRef.current.addEventListener("mouseleave", animateit);
    }
  }, []);
  return (
    <div className="p-4 hover-this" ref={buttonRef} onClick={onClick}>
      <button
        className={`px-4 py-4 2xl:text-[24px] xl:text-[18px] lg:text-[14px] text-[20px] font-medium rounded-full border-2 border-secondary text-secondary transition-colors hover:bg-purple-400  hover:border-purple-400 ${className} link`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
