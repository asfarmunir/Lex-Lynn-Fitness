"use client";
import Image from "next/image";
import React from "react";
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
import AddCheckIn from "@/components/shared/AddCheckIn";
import EditCheckIn from "@/components/shared/EditCheckIn";

import { BsThreeDots } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

import { RiDeleteBin3Line, RiInboxArchiveLine } from "react-icons/ri";
import Link from "next/link";

const Page = () => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <div className=" bg-white min-h-screen flex mb-12 px-7 py-8 flex-col w-full items-start  justify-start">
        <div className=" w-full flex items-start  justify-between mb-10">
          <div>
            <h2 className=" text-xl lg:text-3xl mb-1">Check-In Forms</h2>
            <p className=" font-sans font-semibold">
              Your Check-In form templates
            </p>
          </div>

          <AddCheckIn />
        </div>
        <section className=" w-full">
          <Table className=" min-w-[900px]">
            <TableHeader className=" bg-primary">
              <TableRow>
                <TableHead className=" text-black font-sans font-bold w-[500px] text-start  ">
                  Title
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
                <TableCell className="flex items-start w-[500px]  ">
                  Daily Check-In (Sample)
                </TableCell>

                <TableCell className=" text-center font-sans text-lg">
                  4
                </TableCell>
                <TableCell className="flex justify-center  ">
                  <Link href={`/checkInForms/details`}>
                    <IoEyeOutline className=" text-xl hover:text-primary-50 cursor-pointer" />
                  </Link>
                </TableCell>
                <TableCell className="text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDots className=" text-3xl hover:bg-slate-100 hover:cursor-pointer  text-slate-300 w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ml-20 -mt-1 p-5  gap-3 bg-white rounded-none shadow w-32 flex flex-col items-start justify-start">
                      {/* <button className=" hover:bg-slate-50 inline-flex items-center gap-2 ">
                        <Image
                          src="/icons/edit2.svg"
                          width={20}
                          height={20}
                          alt="eye"
                        />

                        <span>Edit</span>
                      </button> */}
                      <EditCheckIn />
                      <button className=" inline-flex hover:bg-slate-50 items-center gap-2 ">
                        <Image
                          src="/icons/duplicate.svg"
                          width={20}
                          height={20}
                          alt="eye"
                        />
                        <span>Duplicate</span>
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
