"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function IncreaseScaleText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
