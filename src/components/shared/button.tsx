import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-4 text-[24px] font-medium rounded-full border-2 border-secondary text-secondary transition-colors hover:bg-purple-400  hover:border-purple-400 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
