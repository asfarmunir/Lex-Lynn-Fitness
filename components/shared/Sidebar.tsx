"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className=" bg-white h-full w-[17%] min-h-svh hidden lg:flex gap-10 flex-col px-8 py-12">
        <div>
          <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
            Main
          </h2>
          <Link
            href={"/"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/dashboard.svg"
              alt="Lex Lynne Fitness"
              width={16}
              className={`${pathname === "/" ? "opacity-100" : "opacity-30"}`}
              height={16}
              priority
            />
            Dashbaord
          </Link>
          <Link
            href={"/client"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/client" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/cleints-off.svg"
              alt="Lex Lynne Fitness"
              width={22}
              height={22}
              className={`${
                pathname === "/client" ? "opacity-100" : "opacity-30"
              }`}
              priority
            />
            Clients
          </Link>
          <Link
            href={"/messages"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname == "/messages" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/message-off.svg"
              alt="Lex Lynne Fitness"
              width={16}
              height={16}
              className={`${
                pathname === "/messages" ? "opacity-100" : "opacity-30"
              }`}
              priority
            />
            Messages
          </Link>
        </div>

        <div>
          <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
            Manage
          </h2>
          <Link
            href={"/"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/teams" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/team-off.svg"
              alt="Lex Lynne Fitness"
              width={20}
              height={20}
              className={`${
                pathname === "/teams" ? "opacity-100" : "opacity-30"
              }`}
              priority
            />
            Teams
          </Link>
        </div>
        <div>
          <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
            Templates
          </h2>
          <Link
            href={"/checkInForms"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/checkInForms" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/form-off.svg"
              alt="Lex Lynne Fitness"
              width={16}
              height={16}
              className={`${
                pathname === "/checkInForms" ? "opacity-100" : "opacity-30"
              }`}
              priority
            />
            Check-In Forms
          </Link>
          <Link
            href={"/"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/program" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/program-off.svg"
              alt="Lex Lynne Fitness"
              width={16}
              height={16}
              className={`${
                pathname === "/program" ? "opacity-100" : "opacity-30"
              }`}
              priority
            />
            Programs
          </Link>
          <Link
            href={"/exercises"}
            className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/exercises" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
          >
            <Image
              src="/images/exercise-off.svg"
              alt="Lex Lynne Fitness"
              width={16}
              className={`${
                pathname === "/exercises" ? "opacity-100" : "opacity-30"
              }`}
              height={16}
              priority
            />
            Exercises
          </Link>
        </div>
      </div>
      {/* Movbile Sidebar */}
      <div className="flex lg:hidden ">
        <input
          type="checkbox"
          id="drawer-toggle"
          className="relative sr-only peer"
          defaultChecked
        />
        <label
          htmlFor="drawer-toggle"
          className="absolute mt-[50%] z-50 opacity-60 left-2 inline-block p-4 transition-all duration-500 bg-black rounded-lg peer-checked:rotate-180 peer-checked:left-64"
        >
          <div className="w-3 h-0.5 mb-1.5  rotate-45 bg-white rounded-lg" />
          <div className="w-3 h-0.5 -rotate-45 bg-white rounded-lg" />
        </label>
        <div className=" fixed top-0  transition-all duration-500 transform -translate-x-full rounded-tr-3xl rounded-br-3xl  shadow-lg peer-checked:translate-x-0 bg-white min-h-screen  w-64 z-30  left-0 h-screen overflow-y-scroll pb-8">
          <div className="flex  gap-10 flex-col px-12 py-24">
            <div>
              <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
                Main
              </h2>
              <Link
                href={"/"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/dashboard.svg"
                  alt="Lex Lynne Fitness"
                  width={16}
                  className={`${
                    pathname === "/" ? "opacity-100" : "opacity-30"
                  }`}
                  height={16}
                  priority
                />
                Dashbaord
              </Link>
              <Link
                href={"/client"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/client" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/cleints-off.svg"
                  alt="Lex Lynne Fitness"
                  width={22}
                  height={22}
                  className={`${
                    pathname === "/client" ? "opacity-100" : "opacity-30"
                  }`}
                  priority
                />
                Clients
              </Link>
              <Link
                href={"/messages"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname == "/messages" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/message-off.svg"
                  alt="Lex Lynne Fitness"
                  width={16}
                  height={16}
                  className={`${
                    pathname === "/messages" ? "opacity-100" : "opacity-30"
                  }`}
                  priority
                />
                Messages
              </Link>
            </div>

            <div>
              <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
                Manage
              </h2>
              <Link
                href={"/"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/teams" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/team-off.svg"
                  alt="Lex Lynne Fitness"
                  width={20}
                  height={20}
                  className={`${
                    pathname === "/teams" ? "opacity-100" : "opacity-30"
                  }`}
                  priority
                />
                Teams
              </Link>
            </div>
            <div>
              <h2 className=" text-lg 2xl:text-2xl font-thin mb-2 2xl:mb-4">
                Templates
              </h2>
              <Link
                href={"/checkInForms"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/form" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/form-off.svg"
                  alt="Lex Lynne Fitness"
                  width={16}
                  height={16}
                  className={`${
                    pathname === "/form" ? "opacity-100" : "opacity-30"
                  }`}
                  priority
                />
                Check-In Forms
              </Link>
              <Link
                href={"/"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/program" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/program-off.svg"
                  alt="Lex Lynne Fitness"
                  width={16}
                  height={16}
                  className={`${
                    pathname === "/program" ? "opacity-100" : "opacity-30"
                  }`}
                  priority
                />
                Programs
              </Link>
              <Link
                href={"/exercises"}
                className={`inline-flex text-sm 2xl:text-lg mb-2
        ${pathname === "/exercise" ? "text-black" : "text-slate-300"}
        
        items-center gap-3`}
              >
                <Image
                  src="/images/exercise-off.svg"
                  alt="Lex Lynne Fitness"
                  width={16}
                  className={`${
                    pathname === "/exercise" ? "opacity-100" : "opacity-30"
                  }`}
                  height={16}
                  priority
                />
                Exercises
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar end */}
    </>
  );
};

export default Sidebar;
