const date = new Date();
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";

export const HeaderJsonData = {
  title: "Tauhidul Islam",
  navTabs: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Blogs & Articles", path: "/blogs-and-articles" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ],
};

export const FooterJson = {
  copyRight: `© ${date.getFullYear()} Tauhidul Islam. All rights reserved.`,
  Developed: "Designed & Developed with ❤️ by Tauhidul Islam.",
  socialMedias: [
    {
      name: "Fiverr",
      Icon: TbBrandFiverr,
      link: "https://fiverr.com/",
    },
    {
      name: "Up Work",
      Icon: FaSquareUpwork,
      link: "https://upwork.com/",
    },
    {
      name: "Linkedin",
      Icon: BsLinkedin,
      link: "https://linkedin.com/",
    },
    {
      name: "Freelancer",
      Icon: SiFreelancer,
      link: "https://freelancer.com/",
    },
    {
      name: "Github",
      Icon: FaGithub,
      link: "https://github.com/",
    },
  ],
  brand: "",
};
