import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FooterJson } from "@/constant";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FixedMedias({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-4 flex-col lg:p-2 p-1 rounded-full items-center",
        className
      )}
    >
      {FooterJson.socialMedias.map((media) => {
        const { Icon, link, name } = media;
        return (
          <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={link}
                  className="w-3 h-3  lg:w-5 lg:h-5 duration-300 rounded-full text-white hover:text-primary dark:hover:text-primary "
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
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="/contact"
              className="w-3 h-3  lg:w-5 lg:h-5 duration-300 rounded-full text-white hover:text-primary dark:hover:text-primary "
            >
              <MessageCircle size={25} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Send Message</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
