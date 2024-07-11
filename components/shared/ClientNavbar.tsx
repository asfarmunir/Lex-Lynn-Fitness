import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { LiaLockSolid } from "react-icons/lia";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const clientTabs = [
  {
    title: "Overview",
    link: "",
  },
  {
    title: "Check-Ins",
    link: "/check-ins",
  },
  {
    title: "Programs",
    link: "/programs",
  },
  {
    title: "Nutritions",
    link: "/nutritions",
  },
  {
    title: "Calendar",
    link: "/calendar",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Metrics",
    link: "/metrics",
  },
  {
    title: "Settings",
    link: "/settings",
  },
];

const ClientNavbar = ({ id }: { id: string }) => {
  const pathname = usePathname();

  return (
    <>
      <header className="w-full relative p-4 bg-white flex items-center justify-start">
        <div className=" inline-flex items-center gap-4 w-44  2xl:w-64">
          <Image
            src="/images/client1.svg"
            alt="Client"
            width={40}
            height={40}
          />
          <h2 className=" text-lg 2xl:text-xl">Bruce Wayn</h2>
        </div>
        <div className=" hidden md:inline-flex items-center gap-5 border-r text-sm 2xl:text-base md:border-primary md:pr-4 2xl:pr-12 md:py-3">
          <Link href={"/"} className=" inline-flex items-center gap-1">
            <PiChatTeardropTextLight className="text-xl  text-primary-50   " />
            Chat
          </Link>
          <Link href={"/"} className=" inline-flex items-center gap-1">
            <LiaLockSolid className="text-xl mb-0.5 text-primary-50" />
            Access
          </Link>
        </div>
        <div className=" hidden xl:flex items-center justify-evenly px-1 gap-4 2xl:px-4 flex-grow">
          {clientTabs.map((tab, index) => (
            <Link
              key={index}
              href={`/client/${id}` + tab.link}
              className={` 2xl:px-2 rounded text-sm 2xl:text-base  
                ${
                  `/client/${id}` + tab.link === pathname
                    ? "text-black "
                    : "text-slate-300 hover:bg-slate-100 font-extralight"
                }`}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <Sheet>
          <SheetTrigger className=" absolute right-5 block xl:hidden">
            <GiHamburgerMenu className="text-2xl text-slate-800 hover:text-black" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className=" mb-12">Lex Lynne Fitness</SheetTitle>
              <div className=" flex flex-col  items-center justify-evenly mb-12  px-1 gap-4 2xl:px-4 flex-grow">
                {clientTabs.map((tab, index) => (
                  <Link
                    key={index}
                    href={`/client/${id}` + tab.link}
                    className={` 2xl:px-2 rounded text-xl  
                ${
                  `/client/${id}` + tab.link === pathname
                    ? "text-black "
                    : "text-slate-300 hover:bg-slate-100 font-extralight"
                }`}
                  >
                    {tab.title}
                  </Link>
                ))}
              </div>
              <div className=" flex items-center flex-col gap-5 text-xl  pt-12  md:py-3">
                <Link
                  href={"/"}
                  className=" inline-flex text-xl items-center gap-1"
                >
                  <PiChatTeardropTextLight className="text-xl  text-primary-50   " />
                  Chat
                </Link>
                <Link
                  href={"/"}
                  className=" inline-flex text-xl items-center gap-1"
                >
                  <LiaLockSolid className="text-xl mb-0.5 text-primary-50" />
                  Access
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

export default ClientNavbar;
