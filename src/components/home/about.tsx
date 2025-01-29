import React, { useEffect } from "react";
import Cards from "../shared/cards";
import gsap from "gsap";
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
    gsap.to(cards, {
      xPercent: -90 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: () => "+=" + (document.querySelector(".about") as any).offsetWidth,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);
  return (
    <div className="overflow-x-hidden w-screen md:block hidden">
      <div className="about w-fit flex h-screen items-center gap-10">
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
      </div>
    </div>
  );
};

export default About;
