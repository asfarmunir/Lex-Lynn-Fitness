import React from "react";
import { IoSearch } from "react-icons/io5";
import {
  Table,
  TableBody,
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AddExercise from "@/components/shared/AddExercise";

const page = () => {
  return (
    <div className=" bg-white flex max-h-screen overflow-y-auto mb-12 flex-col w-full items-start p-6 justify-start">
      <div className=" w-full flex items-start  justify-between mb-10">
        <div>
          <h2 className=" text-xl lg:text-3xl mb-3">Exercises</h2>
          <p className=" text-sm lg:text-base">
            Build your custom exercise library.
          </p>
        </div>
        <AddExercise />
      </div>
      <div className="flex w-full  items-center bg-gray-100  px-3 mb-6">
        <IoSearch className="text-2xl mx-1 mr-2 text-slate-300" />
        <input
          className="  border-0 px-3  w-full py-2 md:py-5 bg-gray-100 outline-offset-0 placeholder:text-slate-300 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder={"Search here..."}
        />
      </div>
      <h3 className="font-sans font-bold tracking-wider mb-2"> Exerices: 01</h3>
      <section className=" w-full">
        <Table className=" min-w-[900px]">
          <TableHeader className=" bg-primary">
            <TableRow>
              <TableHead className=" text-black font-sans font-bold w-[300px] text-center  ">
                Name
              </TableHead>
              <TableHead className=" text-black  font-sans font-bold pl-4 text-center ">
                Primary Focus
              </TableHead>
              <TableHead className=" text-black font-sans font-bold pl-4 text-center  ">
                Type
              </TableHead>
              <TableHead className=" text-black font-sans font-bold pl-4 text-center  ">
                Level
              </TableHead>
              <TableHead className=" text-black font-sans font-bold pl-4 text-center  ">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className=" ">
              <TableCell className="flex items-center gap-3 py-5  justify-center ">
                <div className="w-20 h-16 rounded-3xl bg-slate-400/50"></div>
                <Dialog>
                  <DialogTrigger>Air Squat</DialogTrigger>
                  <DialogContent className=" xl:min-w-[1000px] flex">
                    <div className="w-[70%] h-96 bg-slate-100"></div>
                    <div className="w-[30%] py-8 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <h1 className="text-primary-50 font-sans font-semibold">
                          Equipment
                        </h1>
                        <h1 className=" font-sans font-semibold">Body Only</h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-primary-50 font-sans font-semibold">
                          Level
                        </h1>
                        <h1 className=" font-sans font-semibold">Beginner</h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-primary-50 font-sans font-semibold">
                          Main Muscle Worked
                        </h1>
                        <h1 className=" font-sans font-semibold">Quadriceps</h1>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-primary-50 font-sans font-semibold">
                          Type
                        </h1>
                        <h1 className=" font-sans font-semibold">Strength</h1>
                      </div>
                      <div className="flex flex-col ">
                        <h1 className="text-primary-50 mb-3 font-sans font-semibold">
                          Description
                        </h1>
                        <h1 className=" font-sans text-sm text-slate-500 font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Corrupti hic ad harum dignissimos. Illum beatae
                          elit. Corrupti hic ad harum dignissimos. Illum beatae
                          exercitationem magnam, obcaecati nihil eius? Dicta
                        </h1>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="text-center py-5">Quadriceps</TableCell>
              <TableCell className="text-center py-5">Strength</TableCell>
              <TableCell className="py-5">
                <p className="py-2 bg-yellow-400/50 text-lg font-sans font-semibold text-center">
                  Beginner
                </p>
              </TableCell>
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
      </section>
    </div>
  );
};

export default page;
