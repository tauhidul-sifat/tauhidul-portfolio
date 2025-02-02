import DOMPurify from "isomorphic-dompurify";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { WixClient } from "@/lib/wixClient";
import { Suspense } from "react";
import AboutGifAnimation from "@/animation/AboutGifAnimation";
import IncreaseSectionContentAnimation from "@/animation/IncreaseSectionContentAnimation";
import SectionTitleAnimation from "@/animation/SectionTitleAnimation";

export default async function About() {
  const { items } = await WixClient.items.query("AboutPageContent").find();
  const { title, pageContent, gif } = items[0];
  return (
    <MaxWidthWrapper className="flex gap-10 py-10 lg:py-20 bg-conic-180">
      <div className=" lg:w-[2600px] hidden lg:block rounded-md ">
        <Suspense fallback={<p>Loading...</p>}>
          <AboutGifAnimation url={gif} />
        </Suspense>
      </div>
      <IncreaseSectionContentAnimation>
        <div>
          <SectionTitleAnimation>
            <h2 className="text-4xl font-bold ">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
                {title}
              </span>
            </h2>
          </SectionTitleAnimation>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageContent),
            }}
          ></div>
        </div>
      </IncreaseSectionContentAnimation>
    </MaxWidthWrapper>
  );
}
