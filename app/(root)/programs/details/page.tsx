"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import AddTrainingPhase from "@/components/shared/AddTrainingPhase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const Page = () => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <section className=" flex flex-col lg:flex-row gap-4 w-full items-start  justify-start">
        <div className=" w-full lg:w-[28%] p-5  bg-white  gap-4">
          <div className="flex items-start  justify-between mb-8">
            <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-lg 2xl:text-3xl ">Programs</h1>
              </div>
            </div>
            <AddTrainingPhase />
          </div>
          <div className="flex w-full  items-center bg-gray-100  px-3 mb-10">
            <IoSearch className="text-2xl mx-1 mr-2 text-slate-400/70" />
            <input
              className="  border-0 px-3  w-full py-2 bg-gray-100 outline-offset-0 placeholder:text-slate-400/70 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder={"Search here..."}
            />
          </div>
          <div className="flex  flex-col items-center gap-6 my-6">
            <Accordion type="single" className=" w-full " collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" px-4 py-6 border-l-2  bg-primary/30 border-primary-50 font-sans font-semibold">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/plan.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans truncate max-w-40 font-semibold">
                        Advanced 4 Day @ Full Gym
                      </h1>
                      {/* <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 02 June 2024
                      </p> */}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" ml-4 border-l flex items-start  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <Link
                    href={"/programs"}
                    className="font-sans text-base font-semibold"
                  >
                    Summary & Subscribers
                  </Link>{" "}
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-start  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <p className="font-sans text-base font-semibold">Calendar</p>{" "}
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-start  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <p className="font-sans text-base font-bold">
                    Training Phases
                  </p>{" "}
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-center  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <Link href={"/programs"} className="flex items-center gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <h1 className="font-sans font-semibold ">Week 1 - 4 </h1>
                  </Link>{" "}
                  <div className="inline-flex items-center gap-2">
                    <p className=" text-slate-400/70 font-semibold text-sm font-sans">
                      4 Weeks
                    </p>
                    <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                  </div>
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-center  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <Link href={"/programs"} className="flex items-center gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <h1 className="font-sans font-semibold ">Week 5 - 8 </h1>
                  </Link>{" "}
                  <div className="inline-flex items-center gap-2">
                    <p className=" text-slate-400/70 font-semibold text-sm font-sans">
                      4 Weeks
                    </p>
                    <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                  </div>
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-center  justify-between border-slate-200 hover:border-primary-50 py-2 bg-white">
                  <button className="text-primary-50 inline-flex w-full hover:bg-primary/40 py-4 px-5  items-center">
                    <IoMdAdd className=" text-lg mr-2" />
                    Add Next
                  </button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className=" w-full pb-12 bg-white p-5 px-4 lg:px-8 mr-2   lg:w-[78%] ">
          <div className="flex items-start  justify-between mb-10">
            <div className="flex items-start flex-col">
              <h1 className="text-lg 2xl:text-3xl ">Legs</h1>
              <p className="font-sans text-sm 2xl:text-base text-slate-400/70 ml-1 mt-0.5 tracking-wide">
                Regular Workout, Estimated 41 minutes
              </p>
            </div>
            <div className="hidden md:flex items-end flex-col">
              <div className="inline-flex items-center gap-3">
                <Image
                  src="/icons/editPink.svg"
                  alt="program"
                  width={25}
                  height={25}
                />
                <HiOutlineDotsHorizontal className=" text-4xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
              </div>
              <p className="font-sans text-xs 2xl:text-sm text-slate-400/70 ml-1 mt-0.5 tracking-wide">
                Created on 31 Mar 2020, last updated on 22 Dec 2021
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start  justify-between mb-8 gap-5">
            <div className="flex items-start flex-col ">
              <h1 className="text-lg 2xl:text-2xl ">Instructions</h1>
              <p className="font-sans text-sm 2xl:text-base text-slate-800/90 ml-1 mt-0.5 tracking-wide max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="flex items-start flex-col gap-4">
              <h1 className="text-lg 2xl:text-2xl ">Instructions</h1>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2">
                  <Image
                    src="/icons/dumblePink.svg"
                    alt="program"
                    width={25}
                    height={25}
                  />
                  <p className="font-sans font-semibold text-nowrap">EZ Bar</p>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Image
                    src="/icons/machine.svg"
                    alt="program"
                    width={25}
                    height={25}
                  />
                  <p className="font-sans font-semibold">Machine</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mb-10 flex flex-col gap-4">
            <h1 className="text-xl">1. Superset of 4 Sets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  1.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-[#D9D9D9] min-w-32 2xl:w-40 rounded-lg h-16 2xl:h-24">
                    <h2 className="text-white  font-sans font-semibold p-4">
                      Video
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-sm 2xl:text-base font-semibold">
                      BB Bent Over Row
                    </h3>
                    <p className=" font-sans text-sm 2xl:text-base text-slate-400/70">
                      10 reps holding @ top for 2 secs
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  2.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-[#D9D9D9] w-32 2xl:w-40 rounded-lg h-16 2xl:h-24">
                    <h2 className="text-white  font-sans font-semibold p-4">
                      Video
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-sm 2xl:text-base font-semibold">
                      Incline DB Curl
                    </h3>
                    <p className=" font-sans text-sm 2xl:text-base text-slate-400/70">
                      10 reps
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  3.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-primary-50 w-32 2xl:w-40 rounded-lg h-16 2xl:h-24 flex items-center justify-center">
                    <Image
                      src="/icons/hand.svg"
                      alt="program"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-primary-50 text-sm 2xl:text-base ">
                      Rest for 90 secs{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  4.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" border-2 border-primary-50 w-32 2xl:w-40 rounded-lg h-16 2xl:h-24 flex items-center justify-center">
                    <Image
                      src="/icons/repeat.svg"
                      alt="program"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-primary-50 text-sm 2xl:text-base font-semibold">
                      Repeat new set{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mb-10 flex flex-col gap-4">
            <h1 className="text-xl">1. Superset of 2 Sets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  1.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-[#D9D9D9] min-w-32 2xl:w-40 rounded-lg h-16 2xl:h-24">
                    <h2 className="text-white  font-sans font-semibold p-4">
                      Video
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-sm 2xl:text-base font-semibold">
                      BB Bent Over Row
                    </h3>
                    <p className=" font-sans text-sm 2xl:text-base text-slate-400/70">
                      10 reps holding @ top for 2 secs
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  2.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-[#D9D9D9] min-w-32 2xl:w-40 rounded-lg h-16 2xl:h-24">
                    <h2 className="text-white  font-sans font-semibold p-4">
                      Video
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans truncate text-sm 2xl:text-base font-semibold">
                      Incline DB Curl
                    </h3>
                    <p className=" font-sans text-sm 2xl:text-base text-slate-400/70">
                      10 reps
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  3.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" bg-primary-50 w-32 2xl:w-40 rounded-lg h-16 2xl:h-24 flex items-center justify-center">
                    <Image
                      src="/icons/hand.svg"
                      alt="program"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-primary-50 text-sm 2xl:text-base ">
                      Rest for 90 secs{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 ">
                <h2 className=" text-lg text-primary-50 font-sans font-semibold">
                  {" "}
                  4.
                </h2>
                <div className="flex items-center gap-3">
                  <div className=" border-2 border-primary-50 w-32 2xl:w-40 rounded-lg h-16 2xl:h-24 flex items-center justify-center">
                    <Image
                      src="/icons/repeat.svg"
                      alt="program"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className=" font-sans text-primary-50 text-sm 2xl:text-base font-semibold">
                      Repeat new set{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
