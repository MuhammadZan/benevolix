import React from "react";
import Cards from "../shared/cards";

const About = () => {
  const cardsData = [
    {
      className: "bg-[#CDACFF]",
      number: "01",
      title: "We Help Our Clients Shine Online",
      description:
        "We collaborate as a collective of individuals bringing their whole self to a project and together create a work that none of us would be able to do on our own",
    },
    {
      className: "bg-[#d6c9ea]",
      number: "02",
      title: "Unlock Your Web Potential",
      description:
        "Explore the latest web technologies and trends to elevate your online presence",
    },
    {
      className: "bg-[#d6c9ea]",
      number: "03",
      title: "Transform Your Business",
      description:
        "Leverage our expertise to drive innovation and growth in your organization",
    },

    {
      className: "bg-[#CDACFF]",
      number: "04",
      title: "Empowering Your Vision",
      description:
        "Bringing your ideas to life with cutting-edge technology and creative solutions",
    },
  ];

  return (
    <>
      <h1 className="text-[84px]  text-center mx-auto  mt-[300px] ">
        Know About BENEVOLIX
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-32 justify-center">
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
    </>
  );
};

export default About;
