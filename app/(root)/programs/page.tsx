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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFilterList } from "react-icons/md";
import ProgramSubscribers from "@/components/shared/ProgramSubscribers";
import AddAiWorkout from "@/components/shared/AddAiWorkout";

const Page = () => {
  const [tab, setTab] = useState("");

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
            <button className=" bg-primary-50 px-2 font-sans font-semibold md:px-4 py-2 text-sm md:text-base inline-flex items-center text-white ">
              <IoMdAdd className=" text-sm md:text-lg mr-2" />
              Add New
            </button>{" "}
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
                  <button
                    onClick={() => {
                      setTab("subscribers");
                    }}
                    className="font-sans text-base font-semibold"
                  >
                    Summary & Subscribers
                  </button>{" "}
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
                  <button
                    onClick={() => {
                      setTab("");
                    }}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <h1 className="font-sans font-semibold ">Week 1 - 4 </h1>
                  </button>{" "}
                  <div className="inline-flex items-center gap-2">
                    <p className=" text-slate-400/70 font-semibold text-sm font-sans">
                      4 Weeks
                    </p>
                    <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                  </div>
                </AccordionContent>
                <AccordionContent className=" ml-4 border-l flex items-center  justify-between border-slate-200 hover:border-primary-50 px-5 py-4 bg-white">
                  <button
                    onClick={() => {
                      setTab("");
                    }}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <h1 className="font-sans font-semibold ">Week 5 - 8 </h1>
                  </button>{" "}
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
        {tab === "subscribers" ? (
          <ProgramSubscribers />
        ) : (
          <div className=" w-full h-[770px] bg-white p-5 px-4 lg:px-8 mr-2   lg:w-[78%] ">
            <div className="flex items-start  justify-between mb-12">
              <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
                <div className="flex items-start flex-col">
                  <h1 className="text-lg 2xl:text-3xl ">Week 1 - 4</h1>
                  <p className="font-sans text-slate-400/70 ml-1 mt-0.5 tracking-wide">
                    4 weeks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AddAiWorkout />
                <button className=" bg-primary-50 px-5 font-sans font-semibold md:px-4 py-2 text-sm md:text-base hidden md:inline-flex items-center text-white ">
                  <IoMdAdd className=" text-sm md:text-lg mr-2" />
                  Add New
                </button>{" "}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl ">Workouts</h2>
              <div className=" flex flex-col lg:flex-row items-center gap-2 2xl:gap-5">
                <Select>
                  <SelectTrigger className=" w-full lg:w-[240px] border-none rounded-none text-base 2xl:text-lg font-sans bg-primary">
                    <SelectValue placeholder="Sort by Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Age</SelectItem>
                    <SelectItem value="dark">Weight</SelectItem>
                    <SelectItem value="system">Metrics</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex max-w-lg w-full items-center bg-gray-100  px-3 ">
                  <IoSearch className="text-2xl mx-1 mr-2 text-slate-300" />
                  <input
                    className="  border-0 px-3  w-full py-2  bg-gray-100 outline-offset-0 placeholder:text-slate-400/65 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder={"Search by name, group, tag..."}
                  />
                </div>
                <MdOutlineFilterList className=" text-4xl hidden lg:block   rounded-full hover:cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 bg-primary/65 mb-6">
              <div className=" inline-flex items-center">
                <Image
                  src="/icons/import.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
                <Select>
                  <SelectTrigger className=" w-fit gap-2 border-none rounded-none text-base 2xl:text-lg font-sans bg-transparent">
                    <SelectValue placeholder="import" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Age</SelectItem>
                    <SelectItem value="dark">Weight</SelectItem>
                    <SelectItem value="system">Metrics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className=" inline-flex items-center">
                <Image
                  src="/icons/copy.svg"
                  alt="arrow"
                  width={25}
                  height={30}
                />
                <Select>
                  <SelectTrigger className=" w-fit gap-2 border-none rounded-none text-base 2xl:text-lg font-sans bg-transparent">
                    <SelectValue placeholder="Copy to" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Age</SelectItem>
                    <SelectItem value="dark">Weight</SelectItem>
                    <SelectItem value="system">Metrics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full  flex flex-col gap-5 lg:px-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col md:flex-row items-start gap-3">
                  <div className="w-40 h-20 bg-slate-500/30 rounded-lg" />
                  <div className="flex flex-col">
                    <p className=" font-sans font-semibold">Legs</p>
                    <p className="text-slate-400/65 font-sans">
                      8 exercises, Estimated 41 minutes
                    </p>
                    <p className="font-sans font-thin text-slate-700">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting...
                    </p>
                  </div>
                </div>
                <div className=" hidden sm:flex items-center gap-6">
                  <Image
                    src="/icons/edit.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className=" cursor-pointer"
                  />
                  <Image
                    src="/icons/timing.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className=" cursor-pointer"
                  />
                  <HiOutlineDotsHorizontal className=" text-3xl text-slate-400/60    rounded-full hover:cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Page;
