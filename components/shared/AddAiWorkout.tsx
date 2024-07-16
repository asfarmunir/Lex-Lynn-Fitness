"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { IoMdAdd } from "react-icons/io";
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
import { Input } from "@/components/ui/input";
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  workoutName: z.string().min(3, "Valid workout name is required"),
  AiPrompt: z.string().min(3, "AiPrompt is required"),
  fitnessGoal: z.string(),
  fitnessLevel: z.string(),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workoutName: "",
      AiPrompt: "",
      fitnessGoal: "",
      fitnessLevel: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex text-white p-2 px-4 text-sm lg:text-base text-nowrap   gap-2 items-center justify-start bg-primary-50 ">
        Workout AI
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0  xl:min-w-[700px] ">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Workout AI</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col  px-5 xl:px-8  w-full   overflow-auto  "
          >
            <h2 className=" font-sans  text-slate-400/70 mb-4">
              Let the AI know what you want and let it do it’s magic!
            </h2>
            <FormField
              control={form.control}
              name="workoutName"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block font-sans text-lg text-slate-700 font-bold  mb-2">
                    Workout Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder=" Type the workout name"
                      {...field}
                      className=" appearance-none border font-sans rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="AiPrompt"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block font-sans text-slate-700 text-lg font-bold  mb-2">
                    Tell AI what you want
                    <span className=" ml-2 italic text-slate-400 font-sans font-thin">
                      &#40;be specific&#41;
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="eg. Give me 6 exercises for full chest day workout"
                      {...field}
                      className=" appearance-none font-sans border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row items-center justify-between w-full lg:gap-4">
              <FormField
                control={form.control}
                name="fitnessGoal"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block font-sans text-slate-700 text-lg font-bold  mb-2">
                      Fitness Goal
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"Select exercise level"} />
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
                name="fitnessLevel"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block font-sans text-slate-700 text-lg font-bold  mb-2">
                      Fitness Level
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue
                            placeholder={"Select exercise equipment "}
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
            </div>

            <div className="flex w-full my-6 items-center justify-between">
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
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
