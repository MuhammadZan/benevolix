import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import s6 from "@/app/images/s6.png";

const WorkSlider = () => {
  return (
    <div className="bg-[#1A1A2E] text-white py-10 px-4 relative">
      <div className="w-[1200px] mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          loop
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={1.5}
        >
          <SwiperSlide>
            <div className="relative">
              <Image
                src={s6}
                alt="My Dna"
                className="rounded-lg h-[570px] w-[803px]"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image
                src={s6}
                alt="My Dna"
                className="rounded-lg h-[570px] w-[803px]"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <Image
                src={s6}
                alt="My Dna"
                className="rounded-lg h-[570px] w-[803px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <Image
                src={s6}
                alt="My Dna"
                className="rounded-lg h-[570px] w-[803px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-pagination flex justify-start mt-12"></div>
      </div>
    </div>
  );
};

export default WorkSlider;
