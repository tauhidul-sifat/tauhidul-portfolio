import Skills from "@/components/skills";
import React from "react";

export default function page() {
  return (
    <div>
      <Skills />
    </div>
  );
}

export const revalidation = 3600;

export function generateMetadata() {
  return {
    title: "My Skills | Tauhidul Islam – Full-Stack Developer",
    description: `Explore the technical skills and expertise of Tauhidul Islam, including MERN Stack, TypeScript, GraphQL, CI/CD, and cloud deployment.`,
  };
}
