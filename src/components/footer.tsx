import { FooterJson } from "@/constant";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
      <div className="mt-auto w-full max-w-[85rem] py-5 mx-auto">
        <div className="flex flex-col lg:flex-row  lg:justify-between items-center gap-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              {FooterJson.copyRight}
            </p>
          </div>
          <div>
            {" "}
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              {FooterJson.Developed}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            {FooterJson.socialMedias.map((media) => {
              const { Icon, link, name } = media;
              return (
                <TooltipProvider key={name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        href={link}
                        className="w-5 h-5  duration-300 rounded-full text-white hover:text-primary dark:hover:text-primary "
                        target="_blank"
                      >
                        {<Icon size={25} />}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
