import ContactForm from "@/components/ContactForm";
import { FooterJson } from "@/constant";
import { WixClient } from "@/lib/wixClient";
import { media } from "@wix/sdk";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const { items } = await WixClient.items.query("ContactPageContent").find();

  return (
    <section className="my-3">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="relative hidden lg:flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24  sm:px-6 lg:px-8">
          <div className="absolute brightness-75 inset-0 ">
            <Image
              className=" rounded-md object-top w-full h-full"
              src={media.getScaledToFillImageUrl(
                items[0].bannerThumbnail,
                500,
                100,
                {}
              )}
              width={500}
              height={100}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t rounded-md from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                {items[0].bannerTitle}
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                {items[0].bannerTagList.map((tag) => {
                  return (
                    <li
                      key={tag}
                      className="flex items-center gap-x-3 text-primary-foreground"
                    >
                      <CheckCircle className="w-5 h-5  rounded-full " />
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-10 rounded-md sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <ContactForm />
          <div className="mt-6 space-y-4 lg:w-2/3">
            <h3 className="text-xl py-2  text-center font-bold ">
              Work with marketplaces and social media
            </h3>

            {FooterJson.socialMedias.map((media) => {
              const { name, link, Icon } = media;
              return (
                <Link
                  className=" flex items-center gap-5 p-2 hover:border-primary/50 duration-200 border rounded-md "
                  key={name}
                  href={link}
                  target="_blank"
                >
                  {<Icon />}
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
export const revalidation = 3600;
export function generateMetadata() {
  return {
    title: "Contact Me | Tauhidul Islam – Get in Touch",
    description: `Have a project in mind? Contact Tauhidul Islam htmlFor web development services, collaboration, or tech discussions.`,
  };
}
