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
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(3, {
    message: " First name must be at least 3 characters.",
  }),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Check-In Form (Sample)",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="  hover:bg-slate-50 inline-flex items-center gap-2 ">
        <Image src="/icons/edit2.svg" width={20} height={20} alt="eye" />
        <span>Edit</span>
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[600px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Edit Form</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full  p-5 "
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
                <div className="inline-flex items-center gap-4">
                  <Button className="bg-red-500  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline">
                    Delete
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primary-50  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline"
                  >
                    Add Form
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
