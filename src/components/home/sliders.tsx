import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import banner from "@/app/images/banner.png";
import "swiper/css";
import "swiper/css/effect-cards";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      service: "UI UX Design",
      image: banner,
    },
    {
      service: "Web Development",
      image: banner,
    },
    {
      service: "App Development",
      image: banner,
    },
    {
      service: "Wordpress and Shopify",
      image: banner,
    },
    {
      service: "Ecommerce",
      image: banner,
    },
  ];

  const handleTextClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex items-center justify-center gap-32  my-36">
      <div>
        <div className="p-0 m-0 leading-tight">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`cursor-pointer mb-2 text-[38px] font-[500] transition-all duration-500 ease-in-out transform ${
                activeSlide === index
                  ? "text-[55px] border-b-2 inline-block border-black opacity-100 scale-105"
                  : "opacity-50 scale-95"
              }`}
              onClick={() => handleTextClick(index)}
            >
              {slide.service}
            </div>
          ))}
        </div>
      </div>

      <div className="w-[401.89px] h-[441.33px]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper w-full h-full"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={activeSlide}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="rounded-3xl overflow-hidden ">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.service}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
