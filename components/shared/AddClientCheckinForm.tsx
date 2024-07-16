"use client";

import React, { useState } from "react";
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

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

const AddClient = () => {
  const [option, setOption] = useState("");

  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }
  const handleClick = () => {
    setOption("first");
  };
  const handleBack = () => {
    setOption("");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" bg-primary-50 px-2 md:px-4 py-2 text-sm md:text-base inline-flex items-center text-white ">
        <IoMdAdd className=" text-sm md:text-lg mr-2" />
        Add Check-in Form
      </AlertDialogTrigger>
      <AlertDialogContent className=" min-w-fit xl:min-w-[800px] p-0">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Choose Your Form Type</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        {option === "" ? (
          <div
            id="first"
            className=" grid mt-8
         grid-cols-2 w-full px-8 p-5 gap-6 mb-12 "
          >
            <button
              onClick={handleClick}
              className="h-64 border p-8 hover:shadow-lg  transition-shadow hover:cursor-pointer"
            >
              <Image
                src="/images/newForm.svg"
                alt="weight"
                width={70}
                height={70}
                className=" w-full h-full object-contain object-center"
              />
            </button>
            <button
              onClick={handleClick}
              className="h-64 border p-8 hover:shadow-lg  transition-shadow hover:cursor-pointer"
            >
              <Image
                src="/images/yourTemplate.svg"
                alt="weight"
                width={70}
                height={70}
                className=" w-full h-full object-contain object-center"
              />
            </button>
          </div>
        ) : (
          <div className="flex flex-col px-8 p-5  items-start">
            <button
              onClick={handleBack}
              className=" bg-none border-transparent mb-6 gap-1 text-primary-50 underline inline-flex items-center"
            >
              <FaChevronLeft className="text-sm text-primary-50" />
              Go back
            </button>
            <h2 className="text-lg text-slate-600 font-bold mb-2 font-sans">
              Select a form to copy
            </h2>
            <div className="flex w-full  items-center bg-gray-100  px-3 mb-6">
              <IoSearch className="text-2xl mx-1 mr-2 text-slate-400" />
              <input
                className="  border-0 px-3  w-full py-2 md:py-5 bg-gray-100 outline-offset-0 placeholder:text-slate-400 focus:border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder={"Search here..."}
              />
            </div>
            <div
              id="first"
              className=" grid 
         grid-cols-2 w-full px-8  p-2 gap-6  "
            >
              <button
                // onClick={handleClick}
                className="h-48 border flex items-start  hover:shadow-lg  transition-shadow hover:cursor-pointer"
              >
                <div className=" w-full bg-primary text-start p-1 md:p-4">
                  <p className="font-sans text-sm xl:text-base font-bold pl-3">
                    Daily Check-In (Sample)
                  </p>
                </div>
              </button>
              <button
                // onClick={handleClick}
                className="h-48 border flex items-start  hover:shadow-lg  transition-shadow hover:cursor-pointer"
              >
                <div className=" w-full bg-primary/20 text-start p1 md:p-4">
                  <p className="font-sans text-sm xl:text-base font-bold pl-3">
                    Weight this morning?
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}

        {option !== "" && (
          <div className="flex w-full px-4 xl:px-12  mb-8 items-center justify-between">
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
              <span className=" capitalize">Copy Form</span>
              {/* )} */}
            </Button>
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
