import SectionTitleAnimation from "@/animation/SectionTitleAnimation";
import { SkeletonCard } from "@/components/CardLoading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RainbowCursor from "@/components/RainbowCursor";
import { WixClient } from "@/lib/wixClient";
import { media } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function BlogAndArticlePage() {
  const { items } = await WixClient.items.query("BlogPageContent").find();
  if (!items.length)
    return (
      <SectionTitleAnimation className="overflow-x-hidden my-3">
        <p className="grid min-h-[90vh] place-content-center lg:text-4xl">
          <span>No projects found</span>
        </p>
      </SectionTitleAnimation>
    );
  return (
    <div>
      <MaxWidthWrapper className="my-5">
        <div className="text-center my-2 lg:my-6">
          <h2 className="text-4xl font-semibold">Code Chronicles</h2>
          <h6 className="text-lg text-gray-500">
            Breaking Down the Latest Innovations
          </h6>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-16 gap-10">
          {items.map((item) => {
            return (
              <Suspense key={item._id} fallback={<SkeletonCard />}>
                <Link href={`blogs/${item._id}`}>
                  <div className="relative rounded-lg overflow-hidden duration-300 backdrop-blur-lg hover:scale-105 hover:shadow-2xl lg:hover:translate-x-3 border border-gray-300/30">
                    <Image
                      className="w-full h-64 object-cover"
                      src={media.getScaledToFillImageUrl(
                        item.thumbnail,
                        600,
                        700,
                        {}
                      )}
                      alt={item.title}
                      width={400}
                      height={560}
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold line-clamp-2">
                        {item.title && item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Suspense>
            );
          })}
        </div>
      </MaxWidthWrapper>
      {/* <RainbowCursor /> */}
    </div>
  );
}
export const revalidate = 3600;
export function generateMetadata() {
  return {
    title: "Blog | Tauhidul Islam – Web Development & Tech Insights",
    description: `Read insightful blog posts by Tauhidul Islam on web development, JavaScript, MERN Stack, and industry trends. Stay updated with the latest tech tips.`,
  };
}
