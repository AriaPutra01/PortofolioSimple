"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import HeroImage from "@/components/HeroImage";

export default function HomePage() {
  return (
    <section className="bg-primary grid grid-cols-1 md:grid-cols-2 min-h-screen md:py-[5rem] py-[4rem]">
      <div className="order-2 md:order-1 flex flex-col justify-center gap-[2rem] mt-[2rem] items-center uppercase">
        <div className="flex flex-col gap-[1rem] font-extrabold text-start">
          <div className="w-full text-center lg:text-start px-[1rem]">
            <h2 className="text-dark text-3xl">Hello I'm</h2>
            <h1 className="text-light text-4xl">Nama Lengkap</h1>
            <h2 className="text-dark text-xl">Pekerjaan</h2>
          </div>
          <div className="flex justify-center lg:justify-around items-center gap-2">
            <Link
              className="border-2 border-light hover:border-purple-700 hover:bg-purple-700 text-light hover:text-white p-2 rounded-xl transition-all"
              href="">
              <svg
                className="fill-current"
                width="20"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </Link>
            <Link
              className="border-2 border-light hover:border-black hover:bg-black text-light hover:text-white p-2 rounded-xl transition-all"
              href="">
              <svg
                className="fill-current"
                width="20"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>TikTok</title>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </Link>
            <Link
              className="border-2 border-light hover:border-red-500 hover:bg-red-500 text-light hover:text-white p-2 rounded-xl transition-all"
              href="">
              <svg
                className="fill-current"
                width="20"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Gmail</title>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center text-dark text-lg text-center">
          <span className="hover:text-light flex justify-center items-center gap-2">
            <svg
              className="fill-current"
              width="20"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <title>Google Maps</title>
              <path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z" />
            </svg>
            <h4>
              <Link href="">Lokasi</Link>
            </h4>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center order-1 md:order-2">
        <div className="relative size-[200px] lg:size-[300px]">
          <HeroImage />
          <motion.svg
            className="absolute -top-[.5rem] md:-top-[2rem] -left-[.7rem] md:-left-[2rem] size-[110%] md:size-[120%]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#BA7276"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 20 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
