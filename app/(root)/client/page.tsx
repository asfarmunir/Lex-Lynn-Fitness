"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiDeleteBin3Line } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddClient from "@/components/shared/AddClient";
import Link from "next/link";

const page = () => {
  const [changeTab, setChangeTab] = useState("active");

  return (
    <div className=" bg-white min-h-[500px] flex max-h-screen overflow-y-auto mb-12 flex-col w-full items-start p-6 justify-start">
      <div className=" w-full flex items-start  justify-between mb-10">
        <div>
          <h2 className=" text-xl lg:text-3xl mb-3">Clients</h2>
          <p className=" text-sm lg:text-base">Manage your all clients here.</p>
        </div>
        <AddClient />
      </div>
      <div className="flex w-full  items-center bg-gray-100  px-3 mb-10">
        <IoSearch className="text-2xl mx-1 mr-2 text-slate-300" />
        <input
          className="  border-0 px-3  w-full py-2 md:py-5 bg-gray-100 outline-offset-0 placeholder:text-slate-300 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={"Search here..."}
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <button
          className={`font-sans  ${
            changeTab === "active"
              ? "text-black font-bold "
              : "text-slate-400/70 font-normal"
          }`}
          onClick={() => setChangeTab("active")}
        >
          Active Clients (1)
        </button>
        <button
          className={`font-sans ${
            changeTab === "archived"
              ? "text-black font-bold "
              : "text-slate-400/70 font-normal"
          }`}
          onClick={() => setChangeTab("archived")}
        >
          Archived Clients (0)
        </button>
      </div>
      <section className=" w-full">
        {changeTab === "active" ? (
          <Table className=" min-w-[900px]">
            <TableHeader className=" bg-primary">
              <TableRow>
                <TableHead className=" text-black font-bold w-[300px] text-center  ">
                  Name
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center ">
                  Last CheckIn
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Last Active
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Duration
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Member Since
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className=" ">
                <TableCell className="flex items-center gap-3 py-5  justify-center ">
                  <Image
                    src={"/images/client1.svg"}
                    alt="client"
                    width={50}
                    height={50}
                  />
                  <Link href={"/client/1"} className="flex flex-col">
                    <h2>Bruce Wayn</h2>
                    <p className="text-slate-300 text-sm">
                      batmantoday@gmail.com
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="text-center py-5">2 days ago</TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-emerald-300/70 text-center">
                    14 hours ago
                  </p>
                </TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-primary-50/50 text-center">
                    Week 1 of 14
                  </p>
                </TableCell>
                <TableCell className="text-center py-5">4 months</TableCell>
                <TableCell className="text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BsThreeDots className=" text-3xl hover:bg-slate-100 hover:cursor-pointer  text-slate-300 w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ml-20 -mt-1 p-5  gap-3 bg-white rounded-none shadow w-32 flex flex-col items-start justify-start">
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
              <TableRow className=" ">
                <TableCell className="flex items-center gap-3 py-5  justify-center ">
                  <Image
                    src={"/images/client1.svg"}
                    alt="client"
                    width={50}
                    height={50}
                  />
                  <Link href={"/client/1"} className="flex flex-col">
                    <h2>Bruce Wayn</h2>
                    <p className=" text-xs  text-slate-300 md:text-sm">
                      batmantoday@gmail.com
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="text-center py-5">2 days ago</TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-emerald-300/70 text-center">
                    14 hours ago
                  </p>
                </TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-primary-50/50 text-center">
                    Week 1 of 14
                  </p>
                </TableCell>
                <TableCell className="text-center py-5">4 months</TableCell>
                <TableCell className="text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BsThreeDots className=" text-3xl hover:bg-slate-100 hover:cursor-pointer  text-slate-300 w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ml-20 -mt-1 p-5  gap-3 bg-white rounded-none shadow w-32 flex flex-col items-start justify-start">
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
              <TableRow className=" ">
                <TableCell className="flex items-center gap-3 py-5  justify-center ">
                  <Image
                    src={"/images/client1.svg"}
                    alt="client"
                    width={50}
                    height={50}
                  />
                  <Link href={"/client/1"} className="flex flex-col">
                    <h2>Bruce Wayn</h2>
                    <p className="text-slate-300 text-sm">
                      batmantoday@gmail.com
                    </p>
                  </Link>
                </TableCell>
                <TableCell className="text-center py-5">2 days ago</TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-emerald-300/70 text-center">
                    14 hours ago
                  </p>
                </TableCell>
                <TableCell className="py-5">
                  <p className="py-2.5 bg-primary-50/50 text-center">
                    Week 1 of 14
                  </p>
                </TableCell>
                <TableCell className="text-center py-5">4 months</TableCell>
                <TableCell className="text-center py-5">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <BsThreeDots className=" text-3xl hover:bg-slate-100 hover:cursor-pointer  text-slate-300 w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ml-20 -mt-1 p-5  gap-3 bg-white rounded-none shadow w-32 flex flex-col items-start justify-start">
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
        ) : (
          <Table className=" min-w-[900px]">
            <TableCaption>No Archived Clients</TableCaption>
            <TableHeader className=" bg-primary">
              <TableRow>
                <TableHead className=" text-black font-bold w-[300px] text-center  ">
                  Name
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center ">
                  Last CheckIn
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Last Active
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Duration
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Member Since
                </TableHead>
                <TableHead className=" text-black font-bold pl-4 text-center  ">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody></TableBody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default page;
