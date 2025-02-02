import React, { Suspense } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { WixClient } from "@/lib/wixClient";
import DOMPurify from "isomorphic-dompurify";
import AboutGifAnimation from "@/animation/AboutGifAnimation";
import IncreaseSectionContentAnimation from "@/animation/IncreaseSectionContentAnimation";
import SectionTitleAnimation from "@/animation/SectionTitleAnimation";

export default async function Skills() {
  const { items } = await WixClient.items.query("SkillsPageContent").find();
  const { title, pageContent, gif } = items[0];
  return (
    <MaxWidthWrapper className="flex gap-10 py-5 lg:py-20">
      <div>
        <SectionTitleAnimation>
          <h2 className="text-4xl font-bold ">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
              Skills & Expertise
            </span>
          </h2>
        </SectionTitleAnimation>
        <IncreaseSectionContentAnimation>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageContent),
            }}
          ></div>
        </IncreaseSectionContentAnimation>
      </div>
      <div className="lg:w-[2600px] hidden lg:block rounded-md ">
        <Suspense fallback={<p>Loading...</p>}>
          <AboutGifAnimation url={gif} />
        </Suspense>
      </div>
    </MaxWidthWrapper>
  );
}
