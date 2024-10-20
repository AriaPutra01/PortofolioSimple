import React from "react";
import { DesktopMenu, MobileMenu } from "@/components/MenuBar";

export default function Navbar() {
  const link = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Portofolio", path: "/Portofolio" },
    { name: "Contact", path: "/Contact" },
  ];
  return (
    <section className="fixed bg-primary bg-opacity-70 backdrop-blur-sm shadow-inner top-0 left-0 p-[1rem] z-[10] w-full md:px-[5rem] transition-all">
      <div className="relative w-full flex justify-between px-[1rem]">
        <h1 className="text-light text-lg font-medium">Nama Lengkap</h1>
        <div className="hidden md:block">
          <DesktopMenu link={link} />
        </div>
        <div className="block md:hidden">
          <MobileMenu link={link} />
        </div>
      </div>
    </section>
  );
}
