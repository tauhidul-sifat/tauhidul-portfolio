"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function IncreaseSectionContentAnimation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ scale: 0, x: -100, opacity: 0 }}
      animate={{ scale: 1, x: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      viewport={{ once: true }}
      className="backdrop-blur-3xl backdrop-brightness-75"
    >
      {children}
    </motion.div>
  );
}
