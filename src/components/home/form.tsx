import React from "react";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import stars from "@/app/images/stars.svg";
import Button from "../shared/button";
const Form = () => {
  return (
    <div>
      <div className="flex justify-between my-32 px-8">
        <div className="w-[400px]">
          <Image src={logo} alt="logo" className="-ml-8" />
          <p className="text-[14px] text-secondary mt-2 font-semibold">
            Trusted By 2700+ Clients
          </p>
          <Image src={stars} alt="stars" className="mt-3" />
          <div className="w-[330px] rounded-2xl px-4 py-3 bg-[#d9d9d9] mt-8 shadow-lg hover:shadow-xl cursor-pointer">
            <p className="text-[#969696] text-[14px]">Contact Us At</p>
            <h2 className="text-secondary text-[28px] font-[500]">
              ideas@benevolix.com
            </h2>
          </div>

          <div className="w-[330px] rounded-2xl px-4 py-3 bg-[#d9d9d9] mt-5 shadow-lg hover:shadow-xl cursor-pointer">
            <p className="text-[#969696] text-[14px]">Get in Touch</p>
            <h2 className="text-secondary text-[28px] font-[500]">
              Book A Meeting
            </h2>
          </div>
        </div>
        <div className="w-[700px]">
          <h1 className="text-[96px] font-medium w-[559px] leading-tight">
            Let’s Start the Ideation
          </h1>
          <p className="text-[16px] mt-12 text-secondary font-medium w-[452px]">
            Drop us a line if you like to talk, or go for email if you prefer
            the sound of your keyboard. Either way, we can't wait for your
            ambitious project or your little idea scetches on a napkin. We will
            get back to you. Promise.
          </p>

          <div className="flex justify-between mt-20">
            <div className="w-[330px]">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-black mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="border-b border-black bg-transparent focus:outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="w-[330px]">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-black mb-1"
                >
                  Your Name
                </label>
                <input
                  id="Email"
                  type="text"
                  placeholder="Your Email"
                  className="border-b border-black bg-transparent focus:outline-none text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="text-[24px] font-medium my-12">
              I’m interested in...
            </h3>
            <div className="flex gap-5">
              <Button text="Web Development" className=" w-[260px]" />
              <Button text="App Development" className=" w-[260px]" />
              <Button text="WordPress" className=" w-[174px]" />
            </div>
            <div className="flex gap-5 mt-5">
              <Button text="UI/UX" className=" w-[115px]" />
              <Button text="Maintenance" className=" w-[197px]" />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-[24px] font-medium my-12">My Budget is...</h3>
            <div className="flex gap-5">
              <Button text="< $5k" className=" w-[210px]" />
              <Button text="$10k - $20k" className=" w-[210px]" />
              <Button text="$20k - $30k" className=" w-[210px]" />
            </div>
            <div className="flex gap-5 mt-5">
              <Button text="$30k - $60k" className=" w-[210px]" />
              <Button text=">$100k" className=" w-[210px]" />
            </div>
          </div>
          <div className="flex flex-col mt-12 ">
            <label
              htmlFor="What’s the idea..."
              className="text-[24px] font-semibold text-black mb-1"
            >
              What’s the idea...
            </label>
            <input
              id="idea"
              type="text"
              placeholder="Your idea"
              className="border-b border-black bg-transparent focus:outline-none text-gray-900 mt-5"
            />
          </div>
          <Button
            text="Submit The Request"
            className="w-[325px] text-white bg-secondary hover:bg-black mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
