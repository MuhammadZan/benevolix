import React, { useState } from "react";
import TeckCol from "../shared/teckcol";

const stacks = {
  frontend: (
    <>
      <TeckCol items={[{ text: "Nextjs" }, { text: "React" }]} />
      <TeckCol
        items={[{ text: "Vue" }, { text: "Angular" }, { text: "GSAP" }]}
      />
      <TeckCol items={[{ text: "ThreeJs" }, { text: "MUI" }]} />
      <TeckCol
        items={[{ text: "Wordpress" }, { text: "Webflow" }, { text: "Framer" }]}
      />
    </>
  ),
  backend: (
    <>
      <TeckCol items={[{ text: "Nodejs" }, { text: "Nextjs" }]} />
      <TeckCol
        items={[{ text: "Nestjs" }, { text: "Expressjs" }, { text: "Django" }]}
      />
      <TeckCol items={[{ text: "Graphql" }, { text: "Flask" }]} />
      <TeckCol
        items={[{ text: "FastApi" }, { text: "Php" }, { text: "Laravel" }]}
      />
    </>
  ),
  mobile: (
    <>
      <TeckCol items={[{ text: "React Native" }, { text: "Kotlin" }]} />
      <TeckCol
        items={[
          { text: "Retrofit" },
          { text: "Firbase" },
          { text: "Appwrite" },
        ]}
      />
    </>
  ),
  database: (
    <>
      <TeckCol items={[{ text: "MySql" }, { text: "SQLlite" }]} />
      <TeckCol
        items={[
          { text: "MariaDb" },
          { text: "dynamoDb" },
          { text: "postgreSQL" },
        ]}
      />
      <TeckCol items={[{ text: "Mongodb" }, { text: "Oracle" }]} />
    </>
  ),
  design: (
    <>
      <TeckCol items={[{ text: "Figma" }]} />
      <TeckCol items={[{ text: "phtotshop" }, { text: "XD" }]} />
    </>
  ),
};

const TechStack = () => {
  const [stack, setStack] = useState<
    "frontend" | "backend" | "mobile" | "database" | "design"
  >("frontend");

  return (
    <div className="tech-stack h-screen w-screen p-10 bg-white relative flex flex-col">
      <h1 className="text-5xl text-center font-semibold mb-12">
        Our Robust{" "}
        <span className="text-primary font-bold uppercase">tech stack</span> got
        you covered
      </h1>
      <div className="flex gap-5 items-center justify-center h-full">
        {stacks[stack]}
      </div>
      <div className="absolute top-[55%] -translate-y-1/2 flex gap-2">
        <div className=" w-[2px] bg-black"></div>
        <div className="flex flex-col gap-16">
          {["frontend", "backend", "mobile", "design", "database"].map(
            (tech, index) => (
              <span
                key={index}
                className={`font-semibold text-lg relative flex items-center gap-2 transition-all capitalize ${
                  stack === tech ? "text-primary text-xl" : "text-black"
                }`}
                onClick={() => {
                  setStack(
                    tech as
                      | "frontend"
                      | "backend"
                      | "mobile"
                      | "database"
                      | "design"
                  );
                }}
              >
                {" "}
                <div
                  className={`w-4 h-4 -ml-[16.5px] bg-white rounded-full border-2 transition-all ${
                    stack === tech ? "border-primary" : "border-black"
                  }`}
                ></div>{" "}
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
