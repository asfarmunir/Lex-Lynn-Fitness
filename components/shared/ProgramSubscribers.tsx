"use client";
import React from "react";
import { IoMdAdd } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdOutlineFilterList } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const ProgramSubscribers = () => {
  return (
    <div className=" w-full h-[770px] bg-white p-5 px-4 lg:px-8 mr-2   lg:w-[78%] ">
      <div className="flex items-start  justify-between mb-12">
        <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
          <div className="flex items-start flex-col ">
            <h1 className="text-lg 2xl:text-3xl ">Advanced 4 Day @ Full Gym</h1>
            <p className="font-sans text-slate-400 tracking-wide">24 weeks</p>
          </div>
        </div>
        <button className=" bg-primary-50 px-5 font-sans font-semibold md:px-4 py-2 text-sm md:text-base hidden md:inline-flex items-center text-white ">
          <IoMdAdd className=" text-sm md:text-lg mr-2" />
          Add Subscriber
        </button>{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl ">Subscribers</h2>
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
              placeholder={"Search client..."}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 p-6 bg-primary/65 mb-6"></div>
      <div className="w-full items-center justify-center  flex flex-col gap-5 lg:px-5">
        <Image
          src="/images/noSubs.svg"
          alt="client"
          width={240}
          height={240}
          className="pt-8"
        />
      </div>
    </div>
  );
};

export default ProgramSubscribers;
