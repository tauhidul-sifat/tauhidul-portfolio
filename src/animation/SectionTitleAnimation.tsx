"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function SectionTitleAnimation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 1.2 }}
      whileHover={{
        border: "1px solid gray",
        borderRadius: 50,
        padding: 20,
      }}
      transition={{ type: "spring" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
