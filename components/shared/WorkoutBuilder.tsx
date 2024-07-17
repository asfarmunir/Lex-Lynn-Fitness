"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoMdAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoAdd, IoArrowBack, IoCloseSharp, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdOutlineFilterList } from "react-icons/md";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const formSchema = z.object({
  instruction: z.string(),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instruction: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex items-center gap-2.5 ">
        <Image
          src="/icons/builder.svg"
          alt="arrow"
          width={20}
          height={20}
          className=" cursor-pointer"
        />
        <h2 className="font-sans font-semibold">Workout Builder</h2>
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  lg:min-w-[800px] xl:min-w-[1200px] 2xl:min-w-[1450px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Chest, Shoulders, Tri’s</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <div className=" hidden xl:flex flex-grow  items-start">
          <Form {...form}>
            <div
              id="first"
              className="flex flex-col w-[50%]  items-center justify-center px-5 py-3 "
            >
              <form
                id="container"
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-full"
              >
                <FormField
                  control={form.control}
                  name="instruction"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block font-sans text-slate-700 text-lg font-bold  mb-2">
                        Instruction{" "}
                        <span className=" ml-2 italic text-slate-400 font-thin">
                          &#40;optional&#41;
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Add any instructions, notes or description"
                          {...field}
                          className=" appearance-none border rounded-none font-sans   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col w-full h-56 2xl:h-[21rem]   overflow-x-hidden overflow-y-auto px-3 ">
                  <div className="flex items-center my-4 mt-8  justify-between">
                    <h2 className="font-sans text-lg font-bold">Exercise</h2>
                    <button className="inline-flex items-center gap-2">
                      <Image
                        src="/icons/rest.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                        className=" cursor-pointer"
                      />
                      Add Rest
                    </button>
                  </div>
                  <div className=" flex items-center justify-evenly pb-5 border-b gap-2 mb-5  ">
                    <Checkbox name="checkbox" />
                    <div className="inline-flex  items-center gap-1">
                      <div className="w-24 h-14 rounded-xl bg-slate-300/50"></div>
                      <p className="max-w-20 truncate font-sans font-semibold">
                        BB Bent Over
                      </p>
                    </div>
                    <div className="p-3 px-5 font-sans font-semibold rounded-md bg-gray-100 ">
                      5
                    </div>
                    <p>X</p>
                    <Select>
                      <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={""} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">1</SelectItem>
                        <SelectItem value="dark">2</SelectItem>
                        <SelectItem value="system">3</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="p-3  text-sm font-sans font-semibold rounded-md bg-gray-100 ">
                      10-12; slow & controlled
                    </div>
                    <Select>
                      <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                        <SelectValue placeholder={""} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">1 min</SelectItem>
                        <SelectItem value="dark">3 min</SelectItem>
                        <SelectItem value="system">5 min</SelectItem>
                      </SelectContent>
                    </Select>
                    <Image
                      src="/icons/menu.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                      className=" cursor-pointer"
                    />
                  </div>
                  <div className="  flex flex-col items-center   gap-2  ">
                    <div className="flex items-center w-full justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <Checkbox name="checkbox" />
                        <p className="font-sans font-semibold">SuperSet Of</p>
                        <div className="p-3 px-5 font-sans font-semibold rounded-md bg-gray-100 ">
                          3
                        </div>
                        <p className="font-sans font-semibold">Sets</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button className="font-sans text-blue-400 ">
                          Ungroup
                        </button>
                        <Image
                          src="/icons/menu.svg"
                          alt="arrow"
                          width={20}
                          height={20}
                          className=" cursor-pointer"
                        />{" "}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-2">
                      <div className="inline-flex flex-grow  items-center gap-1">
                        <div className="w-24 h-14 rounded-xl bg-slate-300/50"></div>
                        <p className=" truncate font-sans font-semibold">
                          Inside DB Curl
                        </p>
                      </div>

                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={""} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">1</SelectItem>
                          <SelectItem value="dark">2</SelectItem>
                          <SelectItem value="system">3</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="p-3  text-sm font-sans font-semibold rounded-md bg-gray-100 ">
                        10-12; slow & controlled
                      </div>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"None"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">1 min</SelectItem>
                          <SelectItem value="dark">3 min</SelectItem>
                          <SelectItem value="system">5 min</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-5 mb-2">
                      <div className="inline-flex flex-grow  items-center gap-1">
                        <div className="w-24 h-14 rounded-xl bg-slate-300/50"></div>
                        <p className=" truncate font-sans font-semibold">
                          Inside DB Curl
                        </p>
                      </div>

                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={""} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">1</SelectItem>
                          <SelectItem value="dark">2</SelectItem>
                          <SelectItem value="system">3</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="p-3  text-sm font-sans font-semibold rounded-md bg-gray-100 ">
                        10-12; slow & controlled
                      </div>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-fit py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"None"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">1 min</SelectItem>
                          <SelectItem value="dark">3 min</SelectItem>
                          <SelectItem value="system">5 min</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex w-full my-10 items-center justify-between">
                  <AlertDialogCancel className=" px-8 border border-slate-300  rounded-none">
                    Cancel
                  </AlertDialogCancel>

                  <Button
                    type="submit"
                    className="bg-primary-50  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline"
                  >
                    <span className=" capitalize">Save</span>
                  </Button>
                </div>
              </form>
            </div>
          </Form>
          <div className="flex flex-col gap-5 w-[50%] py-4 px-3">
            <div className=" flex flex-col lg:flex-row items-center gap-2 mb-3">
              <div className="flex max-w-lg w-full items-center bg-gray-100  px-3 ">
                <IoSearch className="text-2xl mx-1 mr-2 text-slate-300" />
                <input
                  className="  border-0 px-3  w-full py-2  bg-gray-100 outline-offset-0 placeholder:text-slate-400/65 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder={"Search by name, group, tag..."}
                />
              </div>
              <MdOutlineFilterList className=" text-3xl  hover:cursor-pointer" />
              <button className="text-sm inline-flex items-center ml-4 gabutton-1 text-blue-400 text-nowrap font-sans font-semibold">
                <IoAdd className=" text-blue-400  text-xl  rounded-full hover:cursor-pointer" />
                Add custom exercise
              </button>
            </div>
            <div className="flex items-center justify-between ">
              <h1 className="text-xl">Exercise Library</h1>
              <Select>
                <SelectTrigger className=" w-full lg:w-[160px] border-none rounded-none text-base font-sans bg-primary">
                  <SelectValue placeholder="Sort by Name" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Age</SelectItem>
                  <SelectItem value="dark">Weight</SelectItem>
                  <SelectItem value="system">Metrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid h-56 2xl:h-80 overflow-auto pb-12 px-3 overflow-x-hidden  grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
              {Array.from({ length: 15 }, (_, index) => (
                <div
                  key={index}
                  className="w-32 h-32 flex flex-col border rounded-xl"
                >
                  <div className="bg-slate-300/70 h-20 rounded-xl w-full"></div>
                  <h2 className="font-sans px-3 py-1.5">2 DB Squat</h2>
                </div>
              ))}
            </div>{" "}
            <div className="flex justify-center    w-full my-2">
              <button className=" text-blue-400 font-sans font-semibold">
                Load More...
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full p-5  flex xl:hidden mb-8 items-center justify-center">
          <h2 className="font-sans font-semibold">
            Please open this on a larger screen
          </h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
