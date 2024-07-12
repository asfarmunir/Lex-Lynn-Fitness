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

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LiaLockSolid } from "react-icons/lia";
import { IoCloseSharp } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";

const AddClient = () => {
  const router = useRouter();
  async function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="inline-flex items-center gap-1">
        <LiaLockSolid className="text-xl mb-0.5 text-primary-50" />
        Access
      </AlertDialogTrigger>
      <AlertDialogContent className=" p-0 xl:min-w-[700px]">
        <AlertDialogHeader>
          <div className=" bg-primary flex items-center justify-between p-5">
            <p className=" text-lg">Bruce Wayn Login Info</p>
            <AlertDialogCancel className=" bg-transparent">
              <IoCloseSharp className="text-xl text-white bg-primary-50" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        <div
          id="first"
          className="flex flex-col  items-center justify-center w-full px-8 p-5 "
        >
          <p className=" text-slate-400/70 text-sm mb-6 font-thin">
            Share this username and code with only your client to give them
            access.
          </p>

          <div className=" w-full  my-3">
            <h1 className=" font-sans font-semibold mb-1">Username</h1>
            <p className=" w-full inline-flex items-center justify-between bg-brown-200/10 font-sans text-slate-700 px-4 py-2">
              bruce#12976
              <TbCopy className=" text-xl text-gray-400/70 hover:cursor-pointer" />
            </p>
          </div>
          <div className=" w-full  my-3">
            <h1 className=" font-sans font-semibold mb-1">Unique Code</h1>
            <p className=" w-full inline-flex items-center justify-between bg-brown-200/10 font-sans text-slate-700 px-4 py-2">
              12976
              <TbCopy className=" text-xl text-gray-400/70 hover:cursor-pointer" />
            </p>
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
              <span className=" capitalize">Email Client Details</span>
              {/* )} */}
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddClient;
