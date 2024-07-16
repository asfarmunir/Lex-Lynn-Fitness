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
import { IoArrowBack, IoCloseSharp, IoSearch } from "react-icons/io5";
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

const formSchema = z.object({
  name: z.string().min(3, {
    message: " First name must be at least 3 characters.",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
        <div className="flex flex-grow">
          <Form {...form}>
            <div
              id="first"
              className="flex flex-col w-[50%]  items-center justify-center   p-5 "
            >
              <form
                id="container"
                onSubmit={form.handleSubmit(onSubmit)}
                className=" w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block text-lg text-gray-600  mb-2">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="form name..."
                          {...field}
                          className=" appearance-none border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex w-full my-10 items-center justify-between">
                  <AlertDialogCancel className=" px-8 border border-slate-300  rounded-none">
                    Cancel
                  </AlertDialogCancel>

                  <Button
                    type="submit"
                    className="bg-primary-50  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline"
                  >
                    <span className=" capitalize">Add Form</span>
                  </Button>
                </div>
              </form>
            </div>
          </Form>
          <div className="flex flex-col gap-5 w-[50%] py-4 px-3">
            <div className=" flex flex-col lg:flex-row items-center gap-2 2xl:gap-5 mb-3">
              <div className="flex max-w-lg w-full items-center bg-gray-100  px-3 ">
                <IoSearch className="text-2xl mx-1 mr-2 text-slate-300" />
                <input
                  className="  border-0 px-3  w-full py-2  bg-gray-100 outline-offset-0 placeholder:text-slate-400/65 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder={"Search by name, group, tag..."}
                />
              </div>
              <MdOutlineFilterList className=" text-2xl block   rounded-full hover:cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
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
            <div className="grid h-96 overflow-auto pb-12 px-3 overflow-x-hidden  grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
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
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
