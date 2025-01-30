"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function SectionTitleAnimation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ translateY: -100, scaleX: 1.2 }}
      whileHover={{
        border: "1px solid gray",
        borderRadius: 50,
        padding: 20,
      }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
