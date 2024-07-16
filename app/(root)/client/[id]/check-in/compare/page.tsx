"use client";
import Image from "next/image";
import React from "react";
import ClientNavbar from "@/components/shared/ClientNavbar";
import { FaCheck, FaChevronLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import { MdCompareArrows } from "react-icons/md";
import AddCheckinForm from "@/components/shared/AddClientCheckinForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />
      <Link
        href={`/client/${id}/check-in`}
        passHref
        className=" bg-none border-transparent mb-2 mt-1 gap-1 text-indigo-400 underline inline-flex items-center"
      >
        <FaChevronLeft className="text-sm text-indigo-400" />
        Go back to Check-In
      </Link>
      <section className=" flex flex-col lg:flex-row gap-8 px-2 w-full items-start  justify-start">
        <div className=" w-full lg:w-[50%]   gap-4">
          <Select>
            <SelectTrigger className="w-full rounded-none py-8 px-6 border-none text-lg">
              <SelectValue placeholder="Daily Check-In" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Check-In</SelectItem>
              <SelectItem value="dark">Exercise</SelectItem>
              <SelectItem value="system">Program</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col items-center bg-white p-8 py-12 gap-6 mt-6 mb-12">
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">1. Total Wieght</h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                95
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                2. What did you eat today?
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Lays Chips, Banana
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                3. How confident are you that you hit your calories today?{" "}
              </h1>
              <Slider defaultValue={[6]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                4. How confident are you that you can reach your weight goal?{" "}
              </h1>
              <Slider defaultValue={[8]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                5. Total water intake?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                2.5L
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                6. Total Steps?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                10 K
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                7. How was your workout?{" "}
              </h1>
              <Slider defaultValue={[7]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                8. How long was your gym session?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                1 Hour
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[50%]   gap-4">
          <Select>
            <SelectTrigger className="w-full rounded-none py-8 px-6 border-none text-lg">
              <SelectValue placeholder="Daily Check-In" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Check-In</SelectItem>
              <SelectItem value="dark">Exercise</SelectItem>
              <SelectItem value="system">Program</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col items-center bg-white p-8 py-12 gap-6 mt-6 mb-12">
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">1. Total Wieght</h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                95
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                2. What did you eat today?
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Lays Chips, Banana
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                3. How confident are you that you hit your calories today?{" "}
              </h1>
              <Slider defaultValue={[6]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                4. How confident are you that you can reach your weight goal?{" "}
              </h1>
              <Slider defaultValue={[8]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                5. Total water intake?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                2.5L
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                6. Total Steps?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                10 K
              </p>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-5">
                7. How was your workout?{" "}
              </h1>
              <Slider defaultValue={[7]} max={10} step={1} />
              <div className="w-full flex items-center justify-between">
                {Array.from({ length: 11 }).map((_, index) => (
                  <p key={index} className="text-slate-500 font-sans mt-3 ml-1">
                    {index}
                  </p>
                ))}
              </div>
            </div>
            <div className=" w-full ">
              <h1 className=" font-sans font-semibold mb-2">
                8. How long was your gym session?{" "}
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-700 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                1 Hour
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
