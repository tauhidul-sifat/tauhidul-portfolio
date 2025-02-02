"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function IncreaseSectionContentAnimation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scale: 0, x: -100, opacity: 0 }}
      animate={{ scale: 1, x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      viewport={{ once: true }}
      className={cn(
        "backdrop-blur-3xl rounded-md p-2 backdrop-brightness-75",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
