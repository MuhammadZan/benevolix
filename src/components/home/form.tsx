import React from "react";
import Image from "next/image";
import logo from "@/app/images/logo.png";
import stars from "@/app/images/stars.svg";
import Button from "../shared/button";

const Form = () => {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto p-5 mt-32 h-screen ">
      <div className="lg:flex justify-between my-32 px-8 gap-12">
        <div className="lg:w-[200px] xl:w-[200px] 2xl:w-[400px]  w-[400px]  relative">
          <div className="sticky top-0">
            <Image src={logo} alt="logo" className="-ml-8 " />
            <p className="text-[14px] text-secondary mt-2 font-semibold">
              Trusted By 2700+ Clients
            </p>
            <Image src={stars} alt="stars" className="mt-3" />

            <div className="lg:w-[250px] xl:w-[300px] 2xl:w-[300px] w-[300px] rounded-2xl px-4 py-3 bg-[#d9d9d9] mt-8 shadow-lg hover:shadow-xl cursor-pointer">
              <p className="text-[#969696] text-[14px]">Contact Us At</p>
              <h2 className="text-secondary lg:text-[18px] xl:text-[20px] 2xl:text-[28px] text-[28px]  font-[500]">
                ideas@benevolix.com
              </h2>
            </div>
            <div className="lg:w-[250px] xl:w-[300px] 2xl:w-[300px] w-[300px] rounded-2xl px-4 py-3 bg-[#d9d9d9] mt-5 shadow-lg hover:shadow-xl cursor-pointer">
              <p className="text-[#969696] text-[14px]">Get in Touch</p>
              <h2 className="text-secondary lg:text-[18px] xl:text-[20px] 2xl:text-[28px] text-[28px]  font-[500]">
                Book A Meeting
              </h2>
            </div>
          </div>
        </div>

        {/* Main Form Section */}
        <div className="2xl:w-[700px] xl:w-[500px] lg:w-[400px] w-full mx-auto ">
          <h1 className="lg:text-[96px] 2xl:text-[96px] xl:text-[96px] text-[96px] font-medium w-[559px] leading-tight">
            Let’s Start the Ideation
          </h1>
          <p className="text-[16px] mt-12 text-secondary font-medium lg:w-full xl:w-[452px] 2xl:w-[452px] w-[452px]">
            Drop us a line if you like to talk, or go for email if you prefer
            the sound of your keyboard. Either way, we can't wait for your
            ambitious project or your little idea sketches on a napkin. We will
            get back to you. Promise.
          </p>

          <div className="flex justify-between mt-20 gap-5">
            <div className="w-[330px]">
              <div className="flex flex-col relative">
                <label
                  htmlFor="name"
                  className="text-lg font-semibold text-black mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name=""
                  placeholder="Your Name"
                  className="border-b border-gray-300  bg-transparent focus:outline-none text-gray-900"
                />
                <div className="hover-input"></div>
              </div>
            </div>
            <div className="w-[330px]">
              <div className="flex flex-col relative">
                <label
                  htmlFor="Email"
                  className="text-lg font-semibold text-black mb-1"
                >
                  Your Email
                </label>
                <input
                  id="Email"
                  type="text"
                  placeholder="Your Email"
                  className="border-b border-gray-300 bg-transparent focus:outline-none text-gray-900"
                />
                <div className="hover-input"></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] font-medium my-12">
              I’m interested in...
            </h3>
            <div className="flex gap-5">
              <Button
                text="Web Development"
                className="lg:w-[160px] xl:w-[230px] 2xl:w-[260px] w-[260px]"
              />
              <Button
                text="App Development"
                className="lg:w-[160px] xl:w-[230px] 2xl:w-[260px] w-[260px]"
              />
              <Button
                text="WordPress"
                className="lg:w-[120px] xl:w-[170px] 2xl:w-[174px] w-[174px] "
              />
            </div>
            <div className="flex gap-5 mt-5">
              <Button
                text="UI/UX"
                className="lg:w-[100px] xl:w-[110px] 2xl:w-[115px] w-[115px]"
              />
              <Button
                text="Maintenance"
                className="lg:w-[170px] xl:w-[190px] 2xl:w-[197px] w-[197px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-[24px] font-medium my-12">My Budget is...</h3>
            <div className="flex gap-5">
              <Button
                text="< $5k"
                className="lg:w-[140px] xl:w-[200px] 2xl:w-[210px] w-[210px]"
              />
              <Button
                text="$10k - $20k"
                className="lg:w-[140px] xl:w-[200px] 2xl:w-[210px] w-[210px]"
              />
              <Button
                text="$20k - $30k"
                className="lg:w-[140px] xl:w-[200px] 2xl:w-[210px] w-[210px]"
              />
            </div>
            <div className="flex gap-5 mt-5">
              <Button
                text="$30k - $60k"
                className="lg:w-[140px] xl:w-[200px] 2xl:w-[210px] w-[210px]"
              />
              <Button
                text=">$100k"
                className="lg:w-[140px] xl:w-[200px] 2xl:w-[210px] w-[210px]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 relative">
            <label
              htmlFor="idea"
              className="text-[24px] font-semibold text-black mb-1"
            >
              What’s the idea...
            </label>
            <input
              id="idea"
              type="text"
              placeholder="Your idea"
              className="border-b border-gray-300 bg-transparent focus:outline-none text-gray-900 mt-5"
            />
            <div className="hover-input"></div>
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
