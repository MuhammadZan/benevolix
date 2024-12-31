import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`lg:max-w-[1440px] md:max-w-[744px] max-w-[375px]  mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
