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
        Create CheckIn
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[600px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Create Form</p>
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

                <Button
                  type="submit"
                  className="bg-primary-50  rounded-none hover:bg-slate-600 mt-3 text-white font-semibold py-4 px-6   focus:outline-none focus:shadow-outline"
                >
                  {/* {loading ? (
                      <ColorRing
                        visible={true}
                        height="35"
                        width="35"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={[
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                          "#ffffff",
                        ]}
                      />
                    ) : ( */}
                  <span className=" capitalize">Add Form</span>
                  {/* )} */}
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
