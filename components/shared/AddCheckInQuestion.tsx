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
import { Checkbox } from "@/components/ui/checkbox";

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
      name: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex text-white p-2 text-sm lg:text-base text-nowrap px-3 gap-2 items-center justify-start bg-primary-50 ">
        <IoMdAdd className="text-base lg:text-xl" />
        Add Question
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[1000px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Add Question</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <div
            id="first"
            className="flex flex-col  items-center justify-center w-full  p-5 px-8 "
          >
            <form
              id="container"
              onSubmit={form.handleSubmit(onSubmit)}
              className=" w-full "
            >
              <div className="w-full flex gap-4 items-center">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-4 w-full">
                      <FormLabel className="block font-semibold font-sans  mb-2">
                        Question
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Type your question here..."
                          {...field}
                          className=" appearance-none border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className=" font-sans font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Required
                  </label>
                </div>
              </div>
              <div className="w-full grid grid-cols-1 my-3 lg:grid-cols-2 gap-4">
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <Image
                    src="/icons/numbers.svg"
                    width={64}
                    height={64}
                    alt="edit"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Number</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      Integers, Float, Decimals
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <Image
                    src="/icons/text.svg"
                    width={64}
                    height={64}
                    alt="edit"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Text</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      Small or long text like title or description{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <Image
                    src="/icons/toggle.svg"
                    width={64}
                    height={64}
                    alt="edit"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Yes/No</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      Yes or No{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <Image
                    src="/icons/scale.svg"
                    width={64}
                    height={64}
                    alt="edit"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Scale</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      A scale from 1 to 10{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <Image
                    src="/icons/date.svg"
                    width={64}
                    height={64}
                    alt="edit"
                  />
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Text</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      A date picker with hours, minutes and seconds{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 py-6 hover:bg-primary hover:cursor-pointer gap-4 border">
                  <div className="w-[60.93px] flex items-center justify-center h-[48.47px] bg-[#EDB953]/20 rounded-2xl">
                    <Image
                      src="/icons/star.svg"
                      width={25}
                      height={25}
                      alt="edit"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-sans font-bold">Star Rating</h2>
                    <p className="font-sans text-sm tracking-wider w-full text-slate-400/70">
                      Star rating from 1 to 5{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full my-6  items-center justify-between">
                <AlertDialogCancel className=" px-8 border border-slate-300  rounded-none">
                  Cancel
                </AlertDialogCancel>

                <Button
                  type="submit"
                  className="bg-primary-50  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline"
                >
                  <span className=" capitalize">Add Question</span>
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
