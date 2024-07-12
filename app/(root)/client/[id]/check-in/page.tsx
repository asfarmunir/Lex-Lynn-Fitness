"use client";
import Image from "next/image";
import React from "react";
import ClientNavbar from "@/components/shared/ClientNavbar";
import { FaCheck } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@/components/ui/slider";
import { MdCompareArrows } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />

      <section className=" flex flex-col lg:flex-row gap-8 w-full items-start  justify-start">
        <div className=" w-full lg:w-[75%] p-5 xl:p-8 bg-white  gap-4">
          <div className="flex items-start  justify-between">
            <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-lg 2xl:text-3xl ">Daily Check-In</h1>
                <p className="font-sans">07 May, 2024</p>
              </div>
              <p className=" text-white text-sm px-5 py-2 inline-flex bg-primary-50 items-center">
                <FaCheck className="  mr-3" />
                Reviewd
              </p>
            </div>
            <button className=" bg-primary-50 px-2 md:px-4 py-2 text-sm md:text-base inline-flex items-center text-white ">
              <IoMdAdd className=" text-sm md:text-lg mr-2" />
              Add Check-in Form
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 my-12">
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
        <div
          className=" w-full h-[570px]   lg:w-[25%] pr-3 "
          style={{
            height: "",
          }}
        >
          <button className=" w-full py-3 text-white inline-flex items-center justify-center font-semibold gap-2 text-center hover:bg-primary-50/90 bg-primary-50">
            <MdCompareArrows className="text-2xl  -rotate-45" />
            Compare Check-Ins
          </button>
          <div className=" w-full mt-8 bg-white pb-8 ">
            <Tabs defaultValue="account" className=" w-full ">
              <TabsList className=" w-full gap-8">
                <TabsTrigger value="account" className=" font-sans py-3">
                  Submission
                </TabsTrigger>
                <TabsTrigger value="password" className=" font-sans py-3">
                  Assigned
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold">Daily Check-In</h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold">Daily Check-In</h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold">Daily Check-In</h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold"> Pushups Set </h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold"> Pushups Set </h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>
                <div className="flex items-center flex-col justify-center p-2 py-4 gap-1 hover:cursor-pointer hover:bg-primary/60 hover:border-r-2 border-primary-50 hover:border-l-2">
                  <h2 className=" font-sans font-bold"> Pushups Set </h2>
                  <p className=" text-sm font-sans">07 May,2024</p>
                </div>{" "}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
