"use client";
import Image from "next/image";
import React from "react";
import ClientNavbar from "@/components/shared/ClientNavbar";
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

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />

      <section className=" flex flex-col lg:flex-row gap-4 w-full items-start  justify-start">
        <div className=" w-full lg:w-[28%] p-5  bg-white  gap-4">
          <div className="flex items-start  justify-between">
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
          <div className="flex  flex-col items-center gap-6 my-12">
            <Accordion type="single" className=" w-full " collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className=" px-4 py-3 border-l-2  bg-primary/30 border-primary-50 font-sans font-semibold">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/plan.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans font-semibold">
                        Bruce's Program
                      </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 02 June 2024
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
                <AccordionContent className=" ml-8 border-l flex items-start justify-between border-slate-200 hover:border-primary-50 px-3 py-4 bg-white">
                  <div className="flex items-start gap-2">
                    <Image
                      src="/icons/calendar.svg"
                      alt="program"
                      width={20}
                      className=" mt-1"
                      height={20}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="font-sans ">Sep 18 - Oct 29 </h1>
                      <p className=" text-slate-400/70 font-thin text-sm font-sans">
                        18 Sep 2023 - 29 Oct 2023{" "}
                      </p>
                    </div>
                  </div>{" "}
                  <HiOutlineDotsHorizontal className=" text-3xl p-1 hover:cursor-pointer hover:bg-slate-100 rounded-full text-slate-300" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className=" w-full h-[770px] bg-white p-5 px-4 lg:px-8 mr-2   lg:w-[78%] ">
          <div className="flex items-start  justify-between mb-12">
            <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
              <div className="flex items-start flex-col gap-2">
                <h1 className="text-lg 2xl:text-3xl ">April 22 - June 2</h1>
                <p className="font-sans text-slate-400 tracking-wide">
                  <span className=" text-green-500 font-semibold mr-2">
                    Current Program
                  </span>{" "}
                  6 weeks (22 April 2024, 2 June 2024)
                </p>
              </div>
            </div>
            <button className=" bg-primary-50 px-5 font-sans font-semibold md:px-4 py-2 text-sm md:text-base hidden md:inline-flex items-center text-white ">
              <IoMdAdd className=" text-sm md:text-lg mr-2" />
              Add New
            </button>{" "}
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
              <Image src="/icons/copy.svg" alt="arrow" width={25} height={30} />
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
      </section>
    </main>
  );
};

export default Page;
