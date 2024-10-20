"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <section className="bg-primary min-h-screen py-[5rem] px-[1rem] sm:px-[5rem]">
      <h1 className="text-light p-[1rem] font-bold text-2xl text-center uppercase border-b-2 border-light mb-[1rem]">
        About me
      </h1>
      <div className="flex flex-col px-[1rem] md:px-0 md:flex-row gap-[4rem] mt-[2rem]">
        <span className="w-full h-[20rem] md:w-[50rem] md:h-[20rem] bg-light border-2 justify-self-center relative overflow-hidden rounded-[1rem] ring ring-light">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}>
            <Image
              fill
              className="object-cover z-1 object-center"
              src="/dummy.png"
              alt="aria"
            />
          </motion.div>
        </span>
        <div className="flex flex-col text-center md:text-start h-full gap-[1rem]">
          <h2 className="text-dark text-2xl font-bold">
            HOW TO'S · TRENDS · UNBOXING & MORE
          </h2>
          <p className="text-faded text-lg">
            Hallo, I am a Journalism graduate from at Padjadjaraan University. I
            have big interest about beauty especially skincare and make up, also
            i love to share and make contents.
          </p>
          <p className="text-faded text-lg">
            I am currently deeping my skill, knowledge, and experience in social
            media especially in beauty and lifestyle. I am a worker type person
            and able to worker a team.
          </p>
        </div>
      </div>
    </section>
  );
}
