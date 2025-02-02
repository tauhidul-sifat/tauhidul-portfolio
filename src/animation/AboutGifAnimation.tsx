"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { media } from "@wix/sdk";

export default function AboutGifAnimation({ url }: { url: string }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 0.9 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      transition={{ type: "spring" }}
      className="sticky top-16"
    >
      <Image
        src={media.getScaledToFillImageUrl(url, 1000, 1000, {})}
        height={1000}
        width={1000}
        alt="About page feature gif"
        className="object-cover overflow-hidden rounded-md"
      />
    </motion.div>
  );
}
