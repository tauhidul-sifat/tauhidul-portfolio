import SectionTitleAnimation from "@/animation/SectionTitleAnimation";
import { SkeletonCard } from "@/components/CardLoading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SnowflakeCursor from "@/components/SnowflakeCursor";
import { WixClient } from "@/lib/wixClient";
import { media } from "@wix/sdk";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function ProjectPage() {
  const { items } = await WixClient.items.query("ProjectPageContent").find();
  if (!items.length)
    return (
      <SectionTitleAnimation className="overflow-x-hidden my-3">
        <SnowflakeCursor />
        <p className="grid min-h-[90vh] place-content-center lg:text-4xl">
          <span>No projects found</span>
        </p>
      </SectionTitleAnimation>
    );

  return (
    <div>
      {/* <SnowflakeCursor /> */}
      <MaxWidthWrapper className="my-5">
        <div className="text-center my-2 lg:my-6">
          <h2 className="text-4xl font-semibold"> Project Phoenix</h2>
          <h6 className="text-lg text-gray-500">
            Revitalizing web development with Innovative Solutions
          </h6>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-16 gap-10">
          {items.map((item) => {
            return (
              <Suspense key={item._id} fallback={<SkeletonCard />}>
                <Link href={`projects/${item._id}`}>
                  <div className="relative rounded-lg overflow-hidden duration-300 backdrop-blur-lg hover:scale-105 hover:shadow-2xl lg:hover:translate-x-3 border border-gray-300/30">
                    <Image
                      className="w-full h-64 object-fill"
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
    </div>
  );
}

export const revalidate = 3600;
export function generateMetadata() {
  return {
    title: "My Projects | Tauhidul Islam – MERN Stack Developer",
    description: `Discover Tauhidul Islam's latest web development projects, showcasing expertise in full-stack development, Next.js, MongoDB, and cloud technologies.`,
  };
}
