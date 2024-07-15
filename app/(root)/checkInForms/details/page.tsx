"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import AddCheckInQuestion from "@/components/shared/AddCheckInQuestion";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

const page = () => {
  const [preview, setPreview] = useState(false);

  const handleClick = () => {
    setPreview(!preview);
  };

  return (
    <main className=" flex max-h-screen overflow-y-auto flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <Link
        href={`/checkInForms`}
        passHref
        className=" bg-none border-transparent mb-2 mt-1 gap-1 text-indigo-400 underline inline-flex items-center"
      >
        <FaChevronLeft className="text-sm text-indigo-400" />
        Go Back
      </Link>
      <section className=" flex flex-col  w-full items-start  justify-start">
        <div className=" bg-white flex flex-col md:flex-row gap-6 items-center mb-6 p-3 py-6 justify-between w-full">
          <h2 className=" text-4xl ">Daily Check-In (Sample)</h2>
          <div className="inline-flex items-center gap-4">
            <button className=" bg-transparent text-primary-50 font-sans font-semibold border border-primary-50 px-4 py-1.5 inline-flex items-center gap-2">
              <Image
                src="/icons/editPink.svg"
                width={20}
                height={20}
                alt="edit"
              />
              Edit
            </button>
            <AddCheckInQuestion />
          </div>
        </div>
        <div className="w-full flex  flex-wrap  items-center justify-end p-3 my-5 gap-4">
          <button className="text-white py-2 px-4 bg-primary-50 inline-flex items-center gap-2">
            <Image
              src="/icons/remainder.svg"
              width={20}
              height={20}
              alt="edit"
            />
            Add Schedule Question
          </button>
          <button
            onClick={handleClick}
            className={` py-2 px-4  ${
              preview ? "text-primary-50 bg-white" : "text-white bg-primary-50"
            } inline-flex items-center gap-2`}
          >
            {!preview ? (
              <Image src="/icons/eye.svg" width={20} height={20} alt="edit" />
            ) : (
              <AiOutlineEyeInvisible className="text-lg text-primary-50" />
            )}
            Preview
          </button>
          <button className=" border py-2 px-4 inline-flex items-center gap-2.5">
            <Image
              src="/icons/reposition.svg"
              width={15}
              height={15}
              alt="edit"
            />
            Reposition
          </button>
        </div>
        {!preview ? (
          <>
            {" "}
            <div className=" w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=" font-sans font-semibold">
                      Question
                    </TableHead>
                    <TableHead className="w-[100px] font-sans font-semibold">
                      Type
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className=" bg-white py-2">
                    <TableCell className="flex items-center gap-2">
                      <Image
                        src="/icons/numbers.svg"
                        width={54}
                        height={54}
                        alt="edit"
                      />
                      <span className=" font-sans">Wieght this morning?</span>
                    </TableCell>
                    <TableCell className=" w-[100px] font-sans font-semibold">
                      Number
                    </TableCell>
                    <TableCell className="text-right w-[100px]">
                      <button>
                        <Image
                          src="/icons/edit.svg"
                          width={20}
                          height={20}
                          alt="edit"
                        />
                      </button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <button className=" w-full  p-6 flex items-center gap-3 font-sans font-semibold justify-center bg-primary">
              <IoMdAdd className="text-base lg:text-xl" />
              Add Another Question{" "}
            </button>
          </>
        ) : (
          <div className="flex flex-col bg-white w-full p-8 py-8 items-center gap-6 my-12">
            <div className=" w-full ">
              <h1 className=" font-sans font-bold  textlg mb-4">
                1. Wieght this morning?
              </h1>
              <p
                className=" w-full inline-flex items-center text-sm justify-between font-sans text-slate-400/70 font-semibold px-4 py-3"
                style={{ backgroundColor: "#F2F2F2" }}
              >
                Enter your wieght
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default page;