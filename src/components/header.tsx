import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { HeaderJsonData } from "@/constant";
import FlyMenu from "./FlyMenu";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="p-2 rounded-br-md rounded-bl-md sticky z-50 top-0 backdrop-blur-3xl shadow-md">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="uppercase text-xl  font-thin">Web Planet</h1>
          </Link>
          <nav className="lg:flex hidden items-center gap-5 ">
            {HeaderJsonData.navTabs.map((navLink) => (
              <NavItem key={navLink.path} item={navLink} />
            ))}
            <ModeToggle />
          </nav>
          <div className="lg:hidden">
            <FlyMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
