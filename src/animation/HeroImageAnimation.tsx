"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroImageAnimation() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 0.9 }}
      transition={{ type: "spring" }}
    >
      <Image
        src="/p-p-EDIT.jpg"
        alt="tauhidul"
        width={400}
        height={400}
        className="object-cover overflow-hidden rounded-full border-4 border-primary"
      />
    </motion.div>
  );
}
