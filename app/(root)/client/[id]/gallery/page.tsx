"use client";
import Image from "next/image";
import React from "react";

import Link from "next/link";
import ClientNavbar from "@/components/shared/ClientNavbar";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />
      <div className=" bg-white flex mb-12 p-5 px-8 flex-col w-full items-start  justify-start">
        <div className="flex items-center gap-8 mt-3 mb-12">
          <Link
            href={`/client/${id}/gallery`}
            className="font-sans cursor-pointer font-semibold"
          >
            Gallery
          </Link>
          <Link
            href={`/client/${id}/gallery/compare`}
            className="font-sans text-slate-400 cursor-pointer font-semibold"
          >
            Compare
          </Link>
        </div>
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5 xl:grid-cols-3">
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Front
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Side
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Back
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5 xl:grid-cols-3">
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Front
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Side
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Back
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5 xl:grid-cols-3">
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Front
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Side
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Back
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full  md:grid-cols-2 gap-5 xl:grid-cols-3">
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Front
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Side
              </p>
            </div>
            <div className=" bg-[#D9D9D9] relative w-full xl:w-[160px] 2xl:w-[200px] h-[263px] 2xl:h-[323px]">
              <p className="text-2xl font-semibold text-white font-sans absolute bottom-11 right-10 ">
                Back
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
