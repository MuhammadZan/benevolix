import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import Image from "next/image";
import banner from "@/app/images/banner.png";
import "swiper/css";
import "swiper/css/effect-cards";
import s1 from "@/app/images/s1.jpg";
import s2 from "@/app/images/s2.jpg";
import s3 from "@/app/images/s3.jpg";
import s4 from "@/app/images/s4.png";
import s5 from "@/app/images/s5.jpg";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      service: "UI UX Design",
      image: s2,
    },
    {
      service: "Web Development",
      image: s3,
    },
    {
      service: "App Development",
      image: s1,
    },
    {
      service: "Wordpress and Shopify",
      image: s4,
    },
    {
      service: "Ecommerce",
      image: s5,
    },
  ];

  const handleTextClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex items-center justify-center gap-32  my-36">
      <div>
        <div className="p-0 m-0 leading-tight text-right">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={` mb-2 text-[38px] font-[500] transition-all duration-500 ease-in-out transform ${
                activeSlide === index
                  ? "text-[55px] border-b-2 inline-block border-black opacity-100 scale-105 "
                  : "opacity-50 scale-95 "
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
