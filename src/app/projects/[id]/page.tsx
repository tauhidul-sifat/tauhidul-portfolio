import { ChevronLeft } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WixClient } from "@/lib/wixClient";
import Image from "next/image";
import { media } from "@wix/sdk";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch project data from an API or database
  const project = await WixClient.items.get("ProjectPageContent", id);

  // const projectStart = new Date(project!.projectStartDate).toDateString();
  // const projectEnd = new Date(project!.projectCompleteDate).toDateString();
  if (!project) {
    notFound();
  }
  return (
    <section>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-2 lg:px-40">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-primary"
                href="/projects"
              >
                <ChevronLeft />
                Back to Projects
              </Link>

              <h2 className="text-3xl font-bold lg:text-5xl ">
                {project?.title}
              </h2>
              <hr />
              {project.promoVideo && (
                <div className="space-y-5 ">
                  <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md">
                    Used Technology
                  </span>

                  <iframe
                    src={project.promoVideo}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="aspect-video w-full rounded-lg"
                  ></iframe>
                </div>
              )}
              <div className="space-y-5 ">
                <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md ">
                  Visit Site
                </span>
                <Link
                  className="block hover:underline"
                  href={project.projectLiveLink}
                  target="_blank"
                >
                  {project.projectLiveLink}
                </Link>
              </div>
              <div className="space-y-5 ">
                <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md ">
                  Github
                </span>
                <Link
                  className="block hover:underline"
                  href={project.githubUrl}
                  target="_blank"
                >
                  {project.githubUrl}
                </Link>
              </div>
              {project.projectOverview && (
                <div className="space-y-3">
                  <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md">
                    Project Overview
                  </span>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(project.projectOverview),
                    }}
                  ></div>
                </div>
              )}
              <hr />
              <div className="space-y-5 ">
                <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md">
                  Used Technology
                </span>
                <div className="flex items-center gap-1 lg:gap-3 flex-wrap">
                  {project.usedTechnologys.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-5 ">
                <span className="text-xl bg-primary text-primary-foreground p-1 rounded-md">
                  Tags
                </span>
                <div className="flex items-center gap-1 lg:gap-3 flex-wrap">
                  {project.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
              <hr />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.featureImageGallery.map((item) => {
                  return (
                    <div key={item.slug}>
                      <Image
                        className="rounded-lg aspect-square"
                        src={media.getScaledToFitImageUrl(
                          item.src,
                          400,
                          400,
                          {}
                        )}
                        alt="SS image"
                        width={400}
                        height={400}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { items } = await WixClient.items.query("ProjectPageContent").find();
  return items.map((item) => ({ params: { id: item._id } }));
}

// Get project data from an API or database
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await WixClient.items.get("ProjectPageContent", id);
  return {
    title: data?.title,
    description: data?.projectBody || "Description Not Available",
  };
}
