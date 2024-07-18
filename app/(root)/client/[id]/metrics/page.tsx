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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddNewMetric from "@/components/shared/AddNewMetric";
import AddMetricData from "@/components/shared/AddMetricData";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      {/* <ClientNavbar id={id} /> */}

      <section className=" flex flex-col lg:flex-row gap-4 w-full items-start  justify-start">
        <div className=" w-full lg:w-[28%] p-5 lg:min-h-[770px]  bg-white  gap-4">
          <div className="flex items-start  justify-between">
            <div className="flex flex-col md:flex-row items-start gap-2 xl:gap-8">
              <div className="flex items-start flex-col gap-1">
                <h1 className="text-lg 2xl:text-3xl ">Metrics</h1>
              </div>
            </div>
            <AddNewMetric />
          </div>
          <div className="flex  flex-col items-center gap-3 my-12">
            <div className=" w-full flex items-center justify-between  gap-2 px-4 py-6 border-l-2 cursor-pointer bg-primary/10 hover:bg-primary/30 border-primary-50 font-sans font-semibold">
              <h1 className="font-sans font-semibold">Weight</h1>
              <p className=" text-slate-400/70 font-thin text-sm font-sans">
                06 Feb 2024{" "}
              </p>
            </div>
            <div className=" w-full flex items-center justify-between  gap-2 px-4 py-6 border-l-2 cursor-pointer bg-primary/10 hover:bg-primary/30 border-primary-50 font-sans font-semibold">
              <h1 className="font-sans font-semibold">Body Fat</h1>
              <p className=" text-slate-400/70 font-thin text-sm font-sans">
                06 Feb 2024{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full min-h-[770px] bg-white p-5 px-4 lg:px-8 mr-2   lg:w-[78%] ">
          <div className="flex items-start  justify-between mb-12">
            <div className="flex items-center gap-2 ">
              <Select>
                <SelectTrigger className="  border-none rounded-none space-x-3 font-semibold  font-sans bg-primary">
                  <SelectValue placeholder="Last 2 weeks" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Last 2 weeks</SelectItem>
                  <SelectItem value="dark"> Last 4 weeks</SelectItem>
                  <SelectItem value="system"> Last 2 months</SelectItem>
                  <SelectItem value="1"> Last 5 months</SelectItem>
                  <SelectItem value="2"> Last 8 months</SelectItem>
                  <SelectItem value="3"> Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <h1 className=" text-nowrap font-sans font-semibold  ">
                84,46 kg (avg)
              </h1>
              <p className="font-sans text-primary-50 font-semibold">
                -13.66%{" "}
              </p>
            </div>
            <AddMetricData />
          </div>
          <Table>
            <TableHeader>
              <TableRow className="  bg-primary">
                <TableHead className=" text-center font-sans text-black font-bold">
                  Value
                </TableHead>
                <TableHead className=" text-center font-sans text-black font-bold">
                  Date
                </TableHead>
                <TableHead className=" text-center font-sans text-black font-bold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className=" ">
                <TableCell className=" text-center font-sans font-semibold py-6">
                  74
                </TableCell>
                <TableCell className=" text-center font-sans font-semibold py-6">
                  06 Feb 2024
                </TableCell>
                <TableCell className=" flex justify-center py-6">
                  <button>
                    <Image
                      src="/icons/edit.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow className=" ">
                <TableCell className=" text-center font-sans font-semibold py-6">
                  74
                </TableCell>
                <TableCell className=" text-center font-sans font-semibold py-6">
                  06 Feb 2024
                </TableCell>
                <TableCell className=" flex justify-center py-6">
                  <button>
                    <Image
                      src="/icons/edit.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </button>
                </TableCell>
              </TableRow>
              <TableRow className=" ">
                <TableCell className=" text-center font-sans font-semibold py-6">
                  74
                </TableCell>
                <TableCell className=" text-center font-sans font-semibold py-6">
                  06 Feb 2024
                </TableCell>
                <TableCell className=" flex justify-center py-6">
                  <button>
                    <Image
                      src="/icons/edit.svg"
                      alt="edit"
                      width={20}
                      height={20}
                    />
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  );
};

export default Page;
