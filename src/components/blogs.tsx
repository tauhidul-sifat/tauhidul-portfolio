import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const Blogs = () => {
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
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            i < 4 && (
              <Link
                key={i}
                className="group flex flex-col backdrop-blur-3xl border-primary/40 border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-md transition"
                href="#"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    className="w-full object-cover h-80 rounded-t-xl"
                    src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                    alt="Blog Image"
                    height={600}
                    width={600}
                  />
                </div>
                <div className="p-4 md:p-5">
                  <p className="mt-2 text-xs uppercase text-gray-600">
                    Product
                  </p>
                  <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
                    Better is when everything works together
                  </h3>
                </div>
              </Link>
            )
          );
        })}
      </div>
      <div className="text-center">
        <div className="inline-block backdrop-blur-3xl border-primary border shadow-sm rounded-full">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600">Want to read more?</p>
            <Link
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="/blogs-and-articles"
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
