import HeroImageAnimation from "@/animation/HeroImageAnimation";
import IncreaseScaleText from "@/animation/IncreaseScaleText";
import IncreaseSectionContentAnimation from "@/animation/IncreaseSectionContentAnimation";
import NameTypeAnimation from "@/animation/NameTypeAnimation";
import React from "react";

const Hero = () => {
  return (
    <section
      id="#hero"
      className="flex lg:flex-row flex-col-reverse items-center bg-[url(/hero-bg.svg)] rounded-md my-3 p-3 justify-between min-h-[60vh] lg:px-20 "
    >
      <IncreaseSectionContentAnimation>
        <div className="flex bg-transparent text-center lg:text-start flex-col gap-5">
          <h2 className="lg:text-7xl text-4xl pt-4 font-semibold text-ring">
            <IncreaseScaleText>
              <NameTypeAnimation />
            </IncreaseScaleText>
          </h2>
          <h3 className="lg:text-3xl text-sm  text-gray-600 font-medium ">
            <IncreaseScaleText>
              Solve Your Web <span className="text-indigo-500">Problem</span>
            </IncreaseScaleText>
          </h3>

          <h5 className="lg:text-lg font-normal lg:max-w-xl">
            <IncreaseScaleText>
              I'm Tauhidul Islam, a dedicated MERN Stack developer passionate
              about creating innovative web solutions.
            </IncreaseScaleText>
          </h5>
        </div>
      </IncreaseSectionContentAnimation>
      <div>
        <HeroImageAnimation />
      </div>
    </section>
  );
};

export default Hero;
