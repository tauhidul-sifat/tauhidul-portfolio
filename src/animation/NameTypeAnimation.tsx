"use client";
import { TypeAnimation } from "react-type-animation";

export default function NameTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Tauhidul",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Tauhidul Islam ",
        1000,
        "Tauhidul Islam Sifat",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
}
