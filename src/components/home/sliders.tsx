import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import s1 from "@/app/images/s1.jpg";
import s2 from "@/app/images/s2.jpg";
import s3 from "@/app/images/s3.jpg";
import s4 from "@/app/images/s4.png";
import s5 from "@/app/images/s5.jpg";
import fb from "@/app/images/fb.svg";
import insta from "@/app/images/insta.svg";
import yt from "@/app/images/yt.svg";
import lin from "@/app/images/lin.svg";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { service: "UI UX Design", image: s2 },
    { service: "Web Development", image: s3 },
    { service: "App Development", image: s1 },
    { service: "Wordpress and Shopify", image: s4 },
    { service: "Ecommerce", image: s5 },
  ];

  const handleTextClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="h-screen lg:py-44 md:py-5 py-3 lg:px-0 px-5">
      <h1 className="lg:text-[24px] md:text-[50px] text-[28px] font-medium text-secondary lg:px-32 px-0">
        What we do best
      </h1>
      <div className="lg:flex lg:flex-row flex flex-col-reverse items-center justify-center lg:gap-32 gap-12 lg:py-0 md:py-32 py-8">
        <div>
          <div className="p-0 m-0 leading-tight lg:text-right text-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`lg:text-[28px] xl:text-[38px] 2xl:text-[48px] md:text-[28px] text-[18px] font-[500] transition-all duration-500 ease-in-out ${
                  activeSlide === index
                    ? "lg:text-[55px] md:text-[60px] text-[18px] lg:border-b-2 lg:inline-block border-black opacity-100 scale-105"
                    : "hidden lg:block lg:opacity-50 lg:scale-95"
                }`}
                onClick={() => handleTextClick(index)}
              >
                {slide.service}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[401.89px] lg:h-[441.33px] xl:w-[501.89px] xl:h-[541.33px] 2xl:w-[501.89px] 2xl:h-[541.33px] md:w-[500px] md:h-[643px] w-[200px] h-[291.33px]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper w-full h-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            initialSlide={activeSlide}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="rounded-3xl overflow-hidden">
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

      <div className="flex gap-3 lg:px-32 px-0 mt-12">
        <div>
          <h3 className="text-secondary text-[24px] font-medium">
            Follow us on
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <Image src={fb} alt="socials" className="cursor-pointer" />
          <Image src={insta} alt="socials" className="cursor-pointer" />
          <Image src={lin} alt="socials" className="cursor-pointer" />
          <Image src={yt} alt="socials" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
