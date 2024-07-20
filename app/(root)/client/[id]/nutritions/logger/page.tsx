"use client";
import Image from "next/image";
import React, { useState } from "react";
import ClientNavbar from "@/components/shared/ClientNavbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { format } from "date-fns";
import {
  CalendarDays,
  Calendar as CalendarIcon,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/utils";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MacrosDistributionChart from "@/components/MacroDistributionChart";
import CaloriesConsumptionGraph from "@/components/shared/CaloriesConsumptionGraph";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FaAngleDown } from "react-icons/fa6";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  const [date, setDate] = React.useState<Date>();

  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />
      <div className=" bg-white flex mb-12 p-5 flex-col w-full items-start  justify-start">
        <div className="flex items-center gap-8 mt-3 mb-12">
          <Link
            href={`/client/${id}/nutritions`}
            className="font-sans  text-slate-400  cursor-pointer font-semibold"
          >
            Meal Plans
          </Link>
          <Link
            href={`/client/${id}/nutritions/logger`}
            className="font-sans cursor-pointer font-semibold"
          >
            Nutrition Logger
          </Link>
        </div>
        <div className=" w-full flex flex-col lg:flex-row gap-4 items-start  justify-between mb-10">
          <div className="flex flex-col ">
            <h2 className=" text-xl lg:text-3xl ">Macros Report</h2>
            <p className="  font-sans text-slate-400/70">
              <b>Synced:</b> 11:48 AM - May 9, 2024
            </p>
          </div>
          <div className="flex flex-col lg:items-end gap-2">
            <div className="flex items-center gap-4">
              <Select>
                <SelectTrigger className=" w-full lg:w-[180px] border-none rounded-none text-base  font-sans bg-primary">
                  <SelectValue placeholder="viewed by Weekly" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">weekly</SelectItem>
                  <SelectItem value="dark">Daily</SelectItem>
                  <SelectItem value="system">Last 7 days</SelectItem>
                </SelectContent>
              </Select>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[200px] justify-start bg-primary font-sans text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <div className="flex justify-between font-semibold items-center w-full gap-3">
                        <p>Pick a date</p>
                        <FaAngleDown className=" text-xs" />{" "}
                      </div>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <p className="  font-sans text-blue-400 underline">
              Go to client’s MyFitnessPal
            </p>
          </div>
        </div>
        <section className=" w-full flex flex-col lg:flex-row gap-8 mb-20">
          <div className="flex flex-col gap-6 w-full lg:w-[50%] ">
            <div className="flex items-center justify-between  ">
              <h2 className=" text-xl">Daily Calories (Kcal)</h2>
              <Select>
                <SelectTrigger className="  w-fit space-x-12 text-sm border-none rounded-none font-semibold font-sans bg-primary">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Age</SelectItem>
                  <SelectItem value="dark">Weight</SelectItem>
                  <SelectItem value="system">Metrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CaloriesConsumptionGraph />
          </div>
          <div className="flex flex-col w-full lg:w-[50%] ">
            <h2 className=" text-xl">Calories Goals</h2>
            <Table className=" ">
              <TableHeader className=" bg-transparent">
                <TableRow>
                  <TableHead className=" text-slate-400 font-sans font-bold w-[200px] text-start  "></TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Daily Average
                  </TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center  ">
                    Goal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-semibold text-blue-400/80 font-sans">
                    Protien
                  </TableCell>
                  <TableCell className="flex justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-sans py-5">
                    141
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-semibold text-green-400/80 font-sans">
                    Carbs
                  </TableCell>
                  <TableCell className="flex justify-center py-5 font-sans ">
                    189
                  </TableCell>
                  <TableCell className="text-center font-sans py-5">
                    190
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-semibold text-red-500/80 font-sans">
                    Fat
                  </TableCell>
                  <TableCell className="flex justify-center py-5 font-sans ">
                    171
                  </TableCell>
                  <TableCell className="text-center font-sans py-5">
                    161
                  </TableCell>
                </TableRow>
                <TableRow className=" bg-primary/20 ">
                  <TableCell className="py-5 text-center font-semibold  font-sans">
                    Calories
                  </TableCell>
                  <TableCell className="flex justify-center py-5 font-sans ">
                    1423
                  </TableCell>
                  <TableCell className="text-center font-sans py-5">
                    1412
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <section className=" w-full flex flex-col items-start lg:flex-row gap-8 mb-20">
          <div className="flex flex-col gap-6 w-full lg:w-[50%] h-full max-h-[1000px] md:max-h-[600px] ">
            <div className="flex items-center justify-between">
              <h2 className=" text-xl">Macro Distribution</h2>
              <Select>
                <SelectTrigger className="  w-fit space-x-12 text-sm border-none rounded-none font-semibold font-sans bg-primary">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Age</SelectItem>
                  <SelectItem value="dark">Weight</SelectItem>
                  <SelectItem value="system">Metrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <MacrosDistributionChart />
            <div>
              <Table className=" ">
                <TableHeader className=" bg-transparent">
                  <TableRow>
                    <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                      Macros
                    </TableHead>
                    <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                      Actual
                    </TableHead>
                    <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                      Goal
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className=" ">
                    <TableCell className="py-5 text-blue-400 text-center font-bold  font-sans">
                      Protien
                    </TableCell>

                    <TableCell className="text-center text-red-500 font-semibold font-sans py-5">
                      20%
                    </TableCell>

                    <TableCell className="text-center font-semibold font-sans py-5">
                      32%
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className="py-5 text-emerald-400 text-center font-bold  font-sans">
                      Carbs
                    </TableCell>

                    <TableCell className="text-center text-green-500 font-semibold font-sans py-5">
                      40%
                    </TableCell>

                    <TableCell className="text-center font-semibold font-sans py-5">
                      35%
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className="py-5 text-red-500 text-center font-bold  font-sans">
                      Fat
                    </TableCell>

                    <TableCell className="text-center text-green-500 font-semibold font-sans py-5">
                      43%
                    </TableCell>

                    <TableCell className="text-center font-semibold font-sans py-5">
                      39%
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center justify-between w-full mb-3">
              <h2 className=" text-xl">Totals by day</h2>
              <div className="flex items-center gap-4">
                <p className=" bg-gray-200 text-xs lg:text-base px-3 py-1 font-sans">
                  Percent (%)
                </p>
                <p className=" bg-primary-50 text-xs lg:text-base  text-white px-3 py-1 font-sans">
                  Grams (g)
                </p>
              </div>
            </div>
            <Table className=" ">
              <TableHeader className=" bg-transparent">
                <TableRow>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Date
                  </TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Protien
                  </TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Carbs
                  </TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Fat
                  </TableHead>
                  <TableHead className=" text-slate-400/70 font-bold font-sans pl-4 text-center ">
                    Cal
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 06
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 06
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 06
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 06
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 07
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 08
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 09
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 10
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className="py-5 text-center font-bold  font-sans">
                    May 06
                  </TableCell>
                  <TableCell className="flex font-semibold text-primary-50 justify-center py-5 font-sans ">
                    121
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    203
                  </TableCell>
                  <TableCell className="flex text-primary-50 font-semibold justify-center py-5 font-sans ">
                    83
                  </TableCell>
                  <TableCell className="text-center font-semibold font-sans py-5">
                    1253
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
