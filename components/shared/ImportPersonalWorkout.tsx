"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IoArrowBack, IoCloseSharp, IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
const formSchema = z.object({
  program: z.string().min(1, "Program is required"),
  phase: z.string().min(1, "Phase is required"),
  //   workouts: z.array(z.string().min(1, "Workout is required")),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program: "",
      phase: "",
    },
  });

  const [workouts, setWorkouts] = useState<string[]>([]);
  console.log(workouts);
  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" font-sans  px-3 py-1  inline-flex items-center gap-3 text-lg w-56 ">
        <Image
          src="/icons/programPink.svg"
          alt="arrow"
          width={23}
          height={23}
        />
        Personal Programs
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[600px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className="">Import Workouts From A Personal Master Program</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full  px-5 py-3 "
          >
            <form
              id="container"
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full"
            >
              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="block font-sans font-bold text-gray-900  mb-3">
                      Select a personal master program{" "}
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue="">
                        <SelectTrigger className=" appearance-none border font-semibold rounded-none font-sans  bg-gray-100  placeholder:text-slate-400  w-full  py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue
                            placeholder={"4 Day Intermediate Vol 2"}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phase"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="block font-sans font-bold text-gray-900  mb-3">
                      Select a training phase{" "}
                    </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue="">
                        <SelectTrigger className=" appearance-none border font-semibold rounded-none font-sans  bg-gray-100  placeholder:text-slate-400  w-full  py-5 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"Week 1 - 6"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <h3 className="text-slate-900 font-sans font-bold mb-3">
                Select the workout you want to import
              </h3>
              <div className=" p-4 border mb-4 space-y-4">
                <div className="flex items-center space-x-4">
                  <Checkbox
                    id="muscleType"
                    className="w-5 h-5"
                    //
                  />
                  <label
                    htmlFor="muscleType"
                    className="font-sans flex w-full  items-center bg-gray-100  px-3  font-semibold  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <IoSearch className="text-xl mx-1 mr-2 text-slate-400/70" />
                    <input
                      className="  border-0 px-3 text-sm w-full py-2 bg-gray-100 outline-offset-0 placeholder:text-slate-400/70 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder={"Search here..."}
                    />
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox
                    id="muscleType"
                    className="w-5 h-5"
                    //
                  />
                  <label
                    htmlFor="muscleType"
                    className="font-sans font-semibold  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Chest, Shoulders, Tri’s{" "}
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <Checkbox id="terms" className="w-5 h-5" />
                  <label
                    htmlFor="terms"
                    className="font-sans font-semibold  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Quads & Calves{" "}
                  </label>
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
                  <span className=" capitalize">Add Form</span>
                </Button>
              </div>
            </form>
          </div>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
