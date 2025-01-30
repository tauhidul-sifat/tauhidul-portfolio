import About from "@/components/about";
import { Section } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <About />
    </section>
  );
};

export default AboutPage;

export function generateMetadata() {
  return {
    title: "About - Tauhidul Islam",
    description: `"full-stack developer," "web developer," "MERN stack," "web design," "e-commerce," "mobile app development," "SEO,"`,
  };
}
