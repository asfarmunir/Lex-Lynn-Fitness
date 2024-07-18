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
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  metricName: z.string().min(3, {
    message: " Please enter a valid metric name.",
  }),
  unit: z.string(),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      metricName: "",
      unit: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className=" bg-primary-50 px-2 font-sans font-semibold md:px-4 
            py-2 text-sm md:text-base inline-flex items-center text-white "
      >
        <IoMdAdd className=" text-sm md:text-lg mr-2" />
        New Metric
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[650px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Add New Metric</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full py-3 px-10 "
          >
            <form
              id="container"
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full"
            >
              <FormField
                control={form.control}
                name="metricName"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="block text-[1.1rem] font-sans font-bold  mb-4">
                      Metric Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=" Metric name..."
                        {...field}
                        className=" appearance-none border rounded-none  font-sans text-[1rem]  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="unit"
                render={({ field }) => (
                  <FormItem className="mb-6 w-full">
                    <FormLabel className="block text-[1.1rem] font-sans font-bold  mb-4">
                      Unit
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder=" Unit (kg, liters, etc.)"
                        {...field}
                        className=" appearance-none border rounded-none  font-sans text-[1rem]  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight  focus:outline-none focus:shadow-outline"
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
                  <span className=" capitalize">Add </span>
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
