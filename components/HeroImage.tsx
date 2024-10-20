import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}>
        <svg
          className="w-[130%] h-[130%] absolute top-[-5%] left-[-15%]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#BA7276"
            d="M40.7,-43.8C53.6,-27.7,65.6,-13.9,66.2,0.6C66.8,15.1,56,30.1,43.1,41.1C30.1,52,15.1,58.9,-0.3,59.1C-15.6,59.4,-31.2,53,-45.2,42.1C-59.3,31.2,-71.9,15.6,-74.7,-2.8C-77.5,-21.2,-70.6,-42.4,-56.5,-58.5C-42.4,-74.5,-21.2,-85.5,-3.7,-81.8C13.9,-78.2,27.7,-59.9,40.7,-43.8Z"
            transform="translate(100 100)"
          />
        </svg>
        <Image
          className="object-cover object-center"
          fill
          src="/dummy.png"
          alt="hero"
        />
      </motion.div>
    </div>
  );
}
