import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import NavItem from "./NavItem";
import { HeaderJsonData } from "@/constant";

export default async function FlyMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={30} className="text-primary" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="sr-only">Title</SheetTitle>
        <div className="mt-6">
          <ul
            className="max-h-[70vh] overflow-auto 
                          lg:[&::-webkit-scrollbar]:w-1
                        lg:[&::-webkit-scrollbar-track]:bg-gray-100
                        lg:[&::-webkit-scrollbar-thumb]:bg-gray-300
                        lg:dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                        lg:dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            {HeaderJsonData.navTabs.map((navLink) => {
              return <NavItem key={navLink.path} item={navLink} />;
            })}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
