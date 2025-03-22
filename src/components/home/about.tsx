import React, { useEffect, useRef } from "react";
import Cards from "../shared/cards";
import Image from "next/image";
import panda from "@/app/images/panda.png";
import gsap from "gsap";
import p2 from "@/app/images/p2.png";
import p3 from "@/app/images/p3.png";
import p4 from "@/app/images/p4.jpg";
import WorkSlider from "../workSlider";
import Marquee from "react-fast-marquee";
import ProjectCard from "../shared/projectCard";
const About = () => {
  const cardsData = [
    {
      className: "card bg-[#CDACFF] inline-block",
      number: "01",
      title: "We Help Our Clients Shine Online",
      description:
        "We collaborate as a collective of individuals bringing their whole self to a project and together create a work that none of us would be able to do on our own",
    },
    {
      className: "card bg-[#d6c9ea] inline-block",
      number: "02",
      title: "Unlock Your Web Potential",
      description:
        "Explore the latest web technologies and trends to elevate your online presence",
    },
    {
      className: "card bg-[#CDACFF] inline-block",
      number: "03",
      title: "Transform Your Business",
      description:
        "Leverage our expertise to drive innovation and growth in your organization",
    },
    {
      className: "card bg-[#d6c9ea] inline-block",
      number: "04",
      title: "Empowering Your Vision",
      description:
        "Bringing your ideas to life with cutting-edge technology and creative solutions",
    },
  ];
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".card");
    const work_cards = gsap.utils.toArray(".card-work");
    const project_cards = gsap.utils.toArray(".slides");
    gsap.set(".slider", { opacity: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top top",
          end: () => "+=2000",
          scrub: 1.4,
          pin: true,
        },
      })
      .to(cards, {
        xPercent: -85 * (cards.length - 1),
        ease: "none",
      })
      .to(".white-screen .content", {
        opacity: 0,
        duration: 0.2,
      })
      .to(".white-screen", {
        scale: 6,
        borderRadius: 0,
      })
      .fromTo(".work", { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(".text-1", { x: 280 }, { x: 0, ease: "power1.out" })
      .fromTo(".text-2", { x: -280 }, { x: 0, ease: "power1.out" }, "<")
      .fromTo(
        ".text-3",
        { y: 100, scale: 0.4, opacity: 0 },
        { y: 0, scale: 1, opacity: 1 },
        "<"
      )
      .fromTo(
        work_cards,
        {
          yPercent: 400,
          rotate: 30,
        },
        {
          yPercent: -410,
          rotate: -10,
        },
        "<"
      )
      .to(work_cards, { opacity: 0, duration: 0.1 })
      .to(".work", {
        rotate: -10,
        opacity: 0,
        xPercent: -50,
        yPercent: -10,
        scale: 0.3,
      })
      .fromTo(
        ".portfolio",
        { xPercent: 130, rotate: 5, scale: 1.4, opacity: 0.7 },
        {
          xPercent: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(".slider", { opacity: 1 })
      .to(project_cards, {
        xPercent: -65 * (project_cards.length - 1),
      });
  }, []);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  let lastX = 0;
  let lastY = 0;
  const animateit = function (e: any) {
    if (buttonRef.current) {
      const element: HTMLButtonElement | null =
        buttonRef.current.querySelector(".inner-button");
      if (!element) return;

      const { clientX: mouseX, clientY: mouseY } = e;

      const deltaX = mouseX - lastX;
      const deltaY = mouseY - lastY;

      lastX = mouseX;
      lastY = mouseY;

      const moveAmount = 15;

      gsap.to(element, {
        x: `-=${deltaX * moveAmount * 0.02}`, // Move opposite to cursor
        y: `-=${deltaY * moveAmount * 0.02}`,
        ease: "power2.out",
      });
    }
  };
  useEffect(() => {
    if (document) {
      document.addEventListener("mousemove", animateit);
    }
  }, []);
  return (
    <div className="overflow-x-hidden w-screen md:block hidden">
      <div className="about w-fit flex h-screen items-center gap-10 relative">
        <h1 className="lg:text-[80px] text-[50px] pl-12 mx-auto lg:mt-[70px] xl:mt-[130px] 2xl:mt-[220px] mt-[20px] card lg:w-[650px] xl:w-[700px] 2xl:w-[750px] md:w-[500px] w-auto inline-block">
          Know About BENEVOLIX
        </h1>
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            className={card.className}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
        <div
          className={` lg:w-[720px] lg:h-[450px] xl:w-[820px] xl:h-[520px] 2xl:w-[850px] 2xl:h-[583px] md:w-[650px] md:h-[465px] h-[300px] md:rounded-[100px] rounded-[37px] md:my-10 my-0 md:p-10 p-3 card flex justify-center items-center`}
        >
          <div className="relative h-[400px] w-[400px] rounded-full  bg-white shadow-xl text-black text-center p-20 flex items-center justify-center flex-col text-xl white-screen">
            <div className="content gap-5 flex flex-col justify-center items-center">
              Peek into our amazing work
              <Image
                src={panda}
                alt="panda"
                className="w-16 h-16 object-contain panda"
              />
            </div>
          </div>
        </div>
        <div className="work absolute h-screen w-screen top-0 left-0 z-10 p-20 text-center">
          <h1 className="text-[120px] font-bold capitalize relative z-20">
            Each of our works
          </h1>
          <h1 className="text-[120px] font-bold capitalize text-[#CDACFF]  ">
            were the best among
          </h1>
          <div className="text-[120px] font-bold capitalize flex justify-center gap-5 relative z-20">
            <div className="text-1">Several</div>{" "}
            <div className="text-3">Thousend</div>{" "}
            <div className="text-2">Others</div>
          </div>
          <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[300px] right-10 card-work z-10">
            <Image
              src={p2}
              alt="p2"
              className="h-[277px] w-[434px] object-cover rounded-xl"
            />
          </div>
          <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-0 card-work z-10">
            <Image
              src={p3}
              alt="p3"
              className="h-[277px] w-[434px] object-cover rounded-xl"
            />
          </div>
          <div className="bg-primary h-[277px] w-[434px] rounded-xl shadow-lg shadow-black absolute top-[800px] left-6 card-work z-10">
            <Image
              src={p4}
              alt="p4"
              className="h-[277px] w-[434px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="absolute h-screen w-screen top-0 left-0 z-20 flex justify-center items-center flex-col overflow-hidden">
          <div className="portfolio h-screen w-screen bg-black mix-blend-difference relative z-10 overflow-hidden">
            <div className="slider p-10">
              <h1 className="text-8xl text-white font-bold">
                We help your business <br /> standout
              </h1>
              <p className="text-white  mt-5 font-semibold text-2xl">
                By Creating{" "}
                <span className="font-bold underline">
                  badass visual representations
                </span>{" "}
                and crazy websites we help your brand comes to spotlight
              </p>
              <div style={{ display: "-webkit-box" }}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <div className="slides h-[300px] w-[500px]">
                  <div
                    className="rotating-button relative h-full w-full flex items-center justify-center mt-5"
                    ref={buttonRef}
                  >
                    <div className="h-[220px] w-[220px] relative border-white border-2 rounded-full bg-none flex items-center justify-center group inner-button mt-14 ml-20">
                      <div className="bg-white group-hover:scale-0 h-full transition-all duration-300 w-full rounded-full absolute"></div>
                      <p
                        className="text-white text-xl font-semibold text-center mix-blend-difference transition-all w-[400px] animate-spin"
                        style={{ animationDuration: "30s" }}
                      >
                        Explore Our Showcase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
