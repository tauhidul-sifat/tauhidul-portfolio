import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { WixClient } from "@/lib/wixClient";
import DOMPurify from "isomorphic-dompurify";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { BadgeCheck, Earth, Mail, MapPin, Phone } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import { media } from "@wix/sdk";
import Link from "next/link";
export default async function page() {
  const { items } = await WixClient.items.query("ResumeSectionContent").find();
  // console.log(items);
  return (
    <div className="my-2">
      <MaxWidthWrapper className="max-h-[90vh] lg:w-2/4 overflow-y-auto">
        <div className="border lg:m-5 rounded-md">
          <div className="flex flex-col lg:flex-row justify-center py-5 lg:justify-between items-center lg:px-10 ">
            <div className="flex flex-col md:flex-row  items-center gap-6">
              <Image
                src={media.getScaledToFillImageUrl(
                  items[0].profileAvatar,
                  400,
                  400,
                  {}
                )}
                alt="smile"
                width={200}
                height={200}
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
              <div className="flex flex-col text-center lg:text-start">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h2 className="text-3xl flex items-center gap-1 font-semibold">
                        {items[0].name} <BadgeCheck color="green" />
                      </h2>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{items[0].name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h3 className="py-1 ">{items[0].bio}</h3>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{items[0].bio}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <h5 className="py-0 text-gray-400">
                        {items[0].address.formatted}
                      </h5>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{items[0].address.formatted}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="hidden lg:block">{<ContactFormModal />}</div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className=" px-3 rounded-md">
              <div className="space-y-2 text-xs">
                {items[0].email && (
                  <span className="flex items-center gap-2">
                    <Mail />
                    {items[0].email}
                  </span>
                )}
                {items[0].phone && (
                  <span className="flex items-center gap-2">
                    <Phone />
                    {items[0].phone}
                  </span>
                )}
                {items[0].address && (
                  <span className="flex items-center gap-2">
                    <MapPin />
                    {items[0].address.formatted}
                  </span>
                )}
                {items[0].website && (
                  <Link
                    href={items[0].website}
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <Earth />
                    {items[0].website}
                  </Link>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Education</h3>
                <hr />
                <div
                  className="py-3 text-xs"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(items[0].educationQualification),
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Skills</h3>
                <hr />
                <ul className="flex gap-1 py-2 text-xs flex-wrap">
                  {items[0].skills.map((skill: any) => (
                    <li
                      key={skill}
                      className="text-xs p-[4px] bg-gray-100 dark:bg-gray-500 rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Language</h3>
                <hr />
                <ul className="flex gap-1 text-xs py-2 flex-wrap">
                  {items[0].languages.map((language: any) => (
                    <li key={language} className="text-xs p-[4px] ">
                      {language}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-3 rounded-md">
              <div className="mt-1">
                <h3 className="text-2xl font-semibold">About me</h3>
                <hr />
                <div
                  className="py-3 text-xs"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(items[0].about),
                  }}
                ></div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Work Experience</h3>
                <hr />
                <div
                  className="py-3 text-xs"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(items[0].workExperience),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export const revalidate = 3600;

export function generateMetadata() {
  return {
    title: "Resume | Tauhidul Islam – MERN Stack Developer",
    description: `View the resume of Tauhidul Islam, a skilled MERN Stack Developer with expertise in React.js, Node.js, TypeScript, and modern web technologies.`,
  };
}
