"use client";
import Image from "next/image";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddNewMetric from "@/components/shared/AddNewMetric";
import AddMetricData from "@/components/shared/AddMetricData";
import ClientMetricsGraph from "@/components/shared/ClientMetricsGraph";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12  w-full items-start  justify-start">
      <section className=" flex flex-col lg:flex-row gap-4 w-full items-start  justify-start">
        <div className=" w-full lg:w-[24%] order-1  lg:min-h-[600px]">
          <button className="flex w-full  justify-center py-3 2xl:py-5 2xl:text-lg text-center items-center gap-2 bg-primary-50 text-white font-sans font-semibold">
            <Image
              src="/icons/message.svg"
              width={22}
              height={22}
              alt="message"
            />
            Send Broadcast Message
          </button>
          <div className="flex bg-white h-full   flex-col items-center gap-3 my-4">
            <div className=" w-full flex items-center justify-between  gap-2 px-4 py-6 border-l-2 cursor-pointer bg-primary/10 hover:bg-primary/30 border-primary-50 font-sans font-semibold">
              <div className="flex items-center gap-2 justify-center ">
                <Image
                  src={"/images/client1.svg"}
                  alt="client"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col">
                  <h2>Bruce Wayn</h2>
                  <p className="text-slate-300 truncate text-sm">You: Hello</p>
                </div>
              </div>{" "}
              <p className=" text-slate-400/70 font-thin text-sm font-sans">
                2d ago{" "}
              </p>
            </div>
            <div className=" w-full flex items-center justify-between  gap-2 px-4 py-6 border-l-2 cursor-pointer bg-primary/10 hover:bg-primary/30 border-primary-50 font-sans font-semibold">
              <div className="flex items-center gap-2 justify-center ">
                <Image
                  src={"/images/client2.svg"}
                  alt="client"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col">
                  <h2>Kate Austen</h2>
                  <p className="text-slate-300 truncate text-sm">You: Hello</p>
                </div>
              </div>{" "}
              <p className=" text-slate-400/70 font-thin text-sm font-sans">
                2d ago{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" relative order-3 xl:order-2 w-full flex flex-col items-center min-h-[600px] bg-white    lg:w-[52%] ">
          <div className="flex w-full bg-primary/30 py-4 px-4 items-center gap-2  ">
            <Image
              src={"/images/client1.svg"}
              alt="client"
              width={55}
              height={55}
            />
            <h2 className="font-semibold font-sans">Bruce Wayn</h2>
          </div>{" "}
          <h2 className=" my-3 bg-primary/50 p-2 px-4 font-semibold text-sm rounded ">
            Yesterday
          </h2>
          <div className="flex w-full px-4 gap-3">
            <Image
              src={"/images/client1.svg"}
              alt="client"
              width={30}
              height={30}
            />
            <h2 className=" bg-primary/40 px-3 py-1 font-sans">Hello</h2>
          </div>
          <div className=" absolute bottom-0 w-full flex items-center my-4 px-5 gap-2">
            <Input
              type="text"
              placeholder="type a message.."
              className=" appearance-none  rounded-none py-6 border border-primary/30 font-sans px-4   bg-primary/30  placeholder:text-slate-400   text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="bg-primary/30 p-3.5 mr-4 ">
              <Image
                src={"/icons/messageBlack.svg"}
                alt="client"
                width={25}
                height={25}
              />
            </button>
            <button className="bg-primary-50 p-4 ">
              <Image
                src={"/icons/video.svg"}
                alt="client"
                width={30}
                height={30}
              />
            </button>
            <button className="bg-primary-50 px-3.5 py-2.5 ">
              <Image
                src={"/icons/mic.svg"}
                alt="client"
                width={27}
                height={27}
              />
            </button>
          </div>
        </div>
        <div className=" w-full flex flex-col order-2 xl:order-3 items-center pt-20 lg:w-[24%] p-5 lg:min-h-[600px]  bg-white  gap-4">
          <Image
            src={"/images/client1.svg"}
            alt="client"
            width={135}
            height={135}
          />
          <h2 className=" text-xl mb-4 ">Bruce Wayn</h2>
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/checkIn.svg"}
                alt="weight"
                width={17}
                height={17}
              />
              <p className="font-sans text-sm 2xl:text-base ">Last check-in</p>
            </div>
            <p className="font-sans text-sm 2xl:text-base bg-yellow-300/60 px-2.5 py-1  font-semibold">
              2 days ago
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/history.svg"}
                alt="weight"
                width={17}
                height={17}
              />
              <p className="font-sans text-sm 2xl:text-base">Duration</p>
            </div>
            <p className="font-sans text-sm 2xl:text-base bg-primary px-2.5 py-1  font-semibold">
              Week 1 of 4
            </p>
          </div>
          <div className="flex items-center justify-evenly mt-8 w-full pb-4 border-b">
            <Link
              href={"/"}
              className=" font-sans font-bold text-sm 2xl:text-lg"
            >
              Links
            </Link>
            <Link
              href={"/"}
              className=" font-sans text-slate-400 text-sm 2xl:text-lg"
            >
              Media
            </Link>
            <Link
              href={"/"}
              className=" font-sans text-slate-400 text-sm 2xl:text-lg"
            >
              Files
            </Link>
            <Link
              href={"/"}
              className=" font-sans text-slate-400 text-sm 2xl:text-lg"
            >
              Notes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
