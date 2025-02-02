const date = new Date();
import { FaGithub } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { z } from "zod";

export const HeaderJsonData = {
  title: "Tauhidul Islam",
  navTabs: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Blogs", path: "/blogs" },
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

export const ContactFormValidationSchema = z.object({
  title: z.string().optional(),
  fastName: z
    .string({
      invalid_type_error: "Invalid input. Please check your entry.",
      message: "Please fill out this field.",
    })
    .min(3, { message: "Name should be at least 2 characters long." })
    .max(50, { message: "Name characters too longs!" }),
  lastName: z
    .string({
      invalid_type_error: "Invalid input. Please check your entry.",
    })
    .optional(),
  email: z.string().email({
    message: "Please enter a valid email address (e.g., name@example.com).",
  }),
  message: z
    .string({ message: "Please fill out this field." })
    .min(2, { message: "Message must be 3 characters long" }),
});
