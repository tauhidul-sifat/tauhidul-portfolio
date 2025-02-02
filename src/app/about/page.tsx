import About from "@/components/about";
import React from "react";

export default function page() {
  return (
    <div>
      <About />
    </div>
  );
}

export const revalidation = 3600;

export function generateMetadata() {
  return {
    title: "About Me | Tauhidul Islam – MERN Stack Developer",
    description: `Learn more about Tauhidul Islam, a passionate MERN Stack Developer specializing in Next.js, React.js, Node.js, and modern web technologies.`,
  };
}
