import React from "react";
import Cards from "../shared/cards";

const MobileCard = () => {
  const cardsData = [
    {
      className: "bg-[#CDACFF] inline-block",
      number: "01",
      title: "We Help Our Clients Shine Online",
      description:
        "We collaborate as a collective of individuals bringing their whole self to a project and together create a work that none of us would be able to do on our own",
    },
    {
      className: "bg-[#d6c9ea] inline-block",
      number: "02",
      title: "Unlock Your Web Potential",
      description:
        "Explore the latest web technologies and trends to elevate your online presence",
    },
    {
      className: "  bg-[#CDACFF] inline-block",
      number: "03",
      title: "Transform Your Business",
      description:
        "Leverage our expertise to drive innovation and growth in your organization",
    },

    {
      className: "bg-[#d6c9ea] inline-block",
      number: "04",
      title: "Empowering Your Vision",
      description:
        "Bringing your ideas to life with cutting-edge technology and creative solutions",
    },
  ];
  return (
    <div className="md:hidden block">
      <div className="p-5 ">
        <h1 className=" text-[30px] mt-[20px] w-[209px]  inline-block leading-[40px] my-12 ">
          Know About BENEVOLIX
        </h1>

        {cardsData.map((card, index) => (
          <div className="my-6">
            <Cards
              key={index}
              className={card.className}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCard;
