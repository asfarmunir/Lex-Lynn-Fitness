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
  exerciseName: z.string().min(3, {
    message: " Exercise name must be at least 3 characters.",
  }),
  notes: z.string().min(10, {
    message: "Please provide the proper guide for exercise.",
  }),
  link: z.string().min(5, {
    message: " Please provide a valid link.",
  }),
  assignTo: z.string().min(4, {
    message: " PLease select a coach to assign this client to.",
  }),
  muscleGroup: z.string(),
  type: z.string(),
  level: z.string(),
  equipment: z.string(),
});

const AddClient = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      exerciseName: "",
      notes: "",
      link: "",
      assignTo: "",
      muscleGroup: "",
      type: "",
      level: "",
      equipment: "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" flex text-white p-2 text-sm lg:text-base text-nowrap   gap-2 items-center justify-start bg-primary-50 ">
        <IoMdAdd className="text-base lg:text-xl" />
        Add New Client
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 pb-6 xl:min-w-[800px] ">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Add Exercise</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col  p-5 xl:px-8  w-full h-[500px]  overflow-auto  "
          >
            <FormField
              control={form.control}
              name="exerciseName"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block font-sans text-lg text-slate-700 font-bold  mb-2">
                    Exercise Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder=" Enter exercise name"
                      {...field}
                      className=" appearance-none border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block font-sans text-slate-700 text-lg font-bold  mb-2">
                    Notes{" "}
                    <span className=" ml-2 italic text-slate-400 font-thin">
                      &#40;optional&#41;
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter exercise notes"
                      {...field}
                      className=" appearance-none border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="mb-4 w-full">
                  <FormLabel className="block font-sans text-lg text-slate-700 font-bold  mb-2">
                    Link
                    <span className=" ml-2 italic text-slate-400 font-thin">
                      &#40;optional&#41;
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder=" link"
                      {...field}
                      className=" appearance-none border rounded-none   bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h2 className="text-lg font-sans font-bold text-slate-700 mb-2">
              Exercise
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between w-full lg:gap-4">
              <FormField
                control={form.control}
                name="muscleGroup"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormControl>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"Select Muscle Group"} />
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
                name="type"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
                    <FormControl>
                      <Select>
                        <SelectTrigger className=" appearance-none border rounded-none font-sans  bg-gray-100  placeholder:text-slate-400   w-full py-5 px-6 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
                          <SelectValue placeholder={"Select exercise type "} />
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
            <div className="flex flex-col md:flex-row items-center justify-between w-full lg:gap-4">
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
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
                name="equipment"
                render={({ field }) => (
                  <FormItem className="mb-4 w-full">
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
                <span className=" capitalize">Add & Send invitation</span>
                {/* )} */}
              </Button>
            </div>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
