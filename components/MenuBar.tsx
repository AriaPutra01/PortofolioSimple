import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

interface href {
  name: string;
  path: string;
}

interface Props {
  link: href[];
}

export function MobileMenu({ link }: Props) {
  return (
    <div className="z-2">
      <Sheet>
        <SheetTrigger className="text-light">
          <svg
            className="fill-current"
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"></path>
          </svg>
        </SheetTrigger>
        <SheetContent className="flex justify-center items-start pt-[4rem]">
          <SheetHeader className="flex flex-col gap-[4rem]">
            <SheetTitle className="text-4xl">Menu</SheetTitle>
            <SheetDescription>
              <ul className="text-primary flex flex-col gap-[1rem]">
                {link.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="text-dark text-xl font-medium hover:text-light hover:underline transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export function DesktopMenu({ link }: Props) {
  return (
    <ul className="flex gap-[1rem] text-primary">
      {link.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className="text-dark text-lg font-medium hover:text-light hover:underline transition-colors">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
