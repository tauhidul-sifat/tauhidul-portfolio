import { ChevronLeft } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WixClient } from "@/lib/wixClient";
import SnowflakeCursor from "@/components/SnowflakeCursor";

export default async function SingleBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Fetch blog data from an API or database
  const blog = await WixClient.items.get("BlogPageContent", id);
  if (!blog) {
    notFound();
  }
  return (
    <section>
      <SnowflakeCursor />
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-2 lg:px-40">
          <div className="py-8 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <Link
                className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-primary"
                href="/blogs"
              >
                <ChevronLeft />
                Back to Blogs
              </Link>

              <h2 className="text-3xl font-bold lg:text-5xl ">{blog?.title}</h2>

              <div className="flex items-center gap-x-5">
                {blog.topic && (
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    {blog.topic}
                  </span>
                )}
                {blog.publishDate && (
                  <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                    {blog.publishDate}
                  </span>
                )}
                {blog.tags.map((tag: any) => {
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
              {blog.blogBody && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.blogBody),
                  }}
                ></div>
              )}
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
  const { items } = await WixClient.items.query("BlogPageContent").find();
  return items.map((item) => ({ params: { id: item._id } }));
}

// Get blog data from an API or database
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await WixClient.items.get("BlogPageContent", id);
  return {
    title: data?.title,
    description: data?.blogBody || "Description Not Available",
  };
}
