import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { WixClient } from "@/lib/wixClient";
import { media } from "@wix/sdk";

const Blogs = async () => {
  const { items } = await WixClient.items
    .query("BlogPageContent")
    .limit(4)
    .find();
  return (
    <div className="container px-4 py-8 sm:px-6 lg:px-8 lg:py-20 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Read our latest Blogs & articles
        </h2>
        <p className="mt-1 text-gray-600">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        {items.map((item) => {
          return (
            <Link
              key={item._id}
              className="group flex flex-col backdrop-blur-3xl border-primary/40 border hover:scale-105 duration-200 rounded-xl hover:shadow-lg focus:outline-none focus:shadow-md transition"
              href={`/blogs/${item._id}`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  className="w-full object-cover h-80 rounded-t-xl"
                  src={media.getScaledToFillImageUrl(
                    item.thumbnail,
                    600,
                    600,
                    {}
                  )}
                  alt="Blog Image"
                  height={600}
                  width={600}
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="mt-2 text-xs uppercase ">{item.tags[0]}</p>
                <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-center">
        <div className="inline-block backdrop-blur-3xl border-primary border shadow-sm rounded-full">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p>Want to read more?</p>
            <Link
              className="inline-flex items-center gap-x-1.5 decoration-2 duration-200 text-primary hover:underline focus:outline-none focus:underline font-medium"
              href="/blogs"
            >
              Go here
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
