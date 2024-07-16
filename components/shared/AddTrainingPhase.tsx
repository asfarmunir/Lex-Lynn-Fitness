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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { IoArrowBack, IoCloseSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  trainingPhaseName: z.string().min(3, {
    message: " Please enter a valid training phase name.",
  }),
  startsOn: z.date().min(new Date(), {
    message: " Please enter a valid date.",
  }),
  weeks: z.string().min(1, {
    message: "Required ",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trainingPhaseName: "",
      startsOn: "",
      weeks: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary-50 px-2 font-sans font-semibold md:px-4  py-2 text-sm md:text-base inline-flex items-center text-white  ">
        <IoMdAdd className="text-base lg:text-xl" />
        Add next
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[650px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Add Next Training Phase</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full py-3 px-5 xl:px-10 "
          >
            <form
              id="container"
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full"
            >
              <FormField
                control={form.control}
                name="trainingPhaseName"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormLabel className="block text-lg font-sans font-bold text-gray-600  mb-2.5">
                      Training Phase Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Training Phase Name"
                        {...field}
                        className=" appearance-none border font-sans rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-start gap-3 mb-12">
                <FormField
                  control={form.control}
                  name="startsOn"
                  render={({ field }) => (
                    <FormItem className="w-full ">
                      <FormLabel className="block text-lg font-sans font-bold text-gray-600  mb-2.5">
                        Starts On
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Starts On"
                          {...field}
                          className=" appearance-none border font-sans rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="mt-7 font-sans">for</p>
                <FormField
                  control={form.control}
                  name="weeks"
                  render={({ field }) => (
                    <FormItem className=" mt-7">
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className=" appearance-none border font-sans rounded-none w-24   bg-gray-100  placeholder:text-slate-400    py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="mt-7 font-sans">Weeks</p>
              </div>
              <div className="w-full flex items-center ">
                <p className="font-sans text-slate-400/65 ">
                  This training phase will end on 30 July 2024 (Tuesday).
                </p>
                <Select>
                  <SelectTrigger className=" appearance-none border font-semibold rounded-none font-sans  bg-gray-100  placeholder:text-slate-400  w-[35%]  py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                    <SelectValue placeholder={"End in weeks"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
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
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
