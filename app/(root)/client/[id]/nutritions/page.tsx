"use client";
import Image from "next/image";
import React from "react";
import ClientNavbar from "@/components/shared/ClientNavbar";
import { IoMdAdd } from "react-icons/io";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BsThreeDots } from "react-icons/bs";
import { RiDeleteBin3Line, RiInboxArchiveLine } from "react-icons/ri";
import Link from "next/link";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />
      <div className=" bg-white flex mb-12 p-5 flex-col w-full items-start  justify-start">
        <div className="flex items-center gap-8 mt-3 mb-12">
          <Link
            href={`/client/${id}/nutritions`}
            className="font-sans cursor-pointer font-semibold"
          >
            Meal Plans
          </Link>
          <Link
            href={`/client/${id}/nutritions/logger`}
            className="font-sans text-slate-400 cursor-pointer font-semibold"
          >
            Nutrition Logger
          </Link>
        </div>
        <div className=" w-full flex items-start  justify-between mb-10">
          <div>
            <h2 className=" text-xl lg:text-3xl mb-3">Nutrition Plan</h2>
          </div>
          <button className=" flex text-white py-2 px-4 text-sm lg:text-base text-nowrap   gap-2 items-center justify-start bg-primary-50 ">
            <IoMdAdd className="text-base lg:text-xl" />
            Add Program
          </button>{" "}
        </div>
        <section className=" w-full">
          <Table className=" min-w-[900px]">
            <TableHeader className=" bg-primary">
              <TableRow>
                <TableHead className=" text-black font-sans font-bold w-[500px] text-start  ">
                  Title
                </TableHead>
                <TableHead className=" text-black font-bold font-sans pl-4 text-center ">
                  Type
                </TableHead>
                <TableHead className=" text-black font-bold font-sans pl-4 text-center  ">
                  # Meal
                </TableHead>
                <TableHead className=" text-black font-sans font-bold pl-4 text-center  ">
                  Totla Macros
                </TableHead>
                <TableHead className=" text-black font-sans font-bold pl-4 text-center  ">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className=" ">
                <TableCell className="flex items-start w-[500px]  gap-5 py-5  justify-start ">
                  <Image
                    src="/icons/meal.svg"
                    alt="meal"
                    width={25}
                    height={25}
                  />
                  <Link href={"/client/1"} className="flex flex-col">
                    <h2 className=" font-sans font-semibold">Rest Day Meal</h2>
                    <p className="text-slate-300 text-sm  font-sans">
                      A nutritious meal plan designed for rests day to refuel
                      and repair muscles.{" "}
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="text-center py-5">
                  <p className="py-2 bg-sky-200 font-sans text-center">
                    Meal Plan
                  </p>
                </TableCell>

                <TableCell className="py-5 text-center font-sans">4</TableCell>
                <TableCell className="flex justify-center py-5 ">
                  <p className="border-2  border-primary-50 pt-3 text-xl w-14 h-14 text-center  rounded-full ">
                    984
                  </p>
                </TableCell>
                <TableCell className="text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BsThreeDots className=" text-3xl hover:bg-slate-100 hover:cursor-pointer  text-slate-300 w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ml-20 z-40 -mt-1 p-5  gap-3 bg-white rounded-none shadow w-32 flex flex-col items-start justify-start">
                      <button className=" hover:bg-slate-50 inline-flex items-center gap-2 ">
                        <RiInboxArchiveLine className=" text-xl " />
                        <span>Archive</span>
                      </button>
                      <button className=" inline-flex hover:bg-slate-50 text-red-500 items-center gap-2 ">
                        <RiDeleteBin3Line className=" text-xl " />
                        <span>Delete</span>
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </main>
  );
};

export default Page;
