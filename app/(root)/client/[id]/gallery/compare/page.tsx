"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import Link from "next/link";
import ClientNavbar from "@/components/shared/ClientNavbar";

const Page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto overflow-x-hidden flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />
      <div className=" bg-white flex mb-12 p-5 px-8 flex-col w-full items-start  justify-start">
        <div className="flex items-center gap-8 mt-3 mb-12 xl:mb-4 ">
          <Link
            href={`/client/${id}/gallery`}
            className="font-sans text-slate-400  cursor-pointer font-semibold"
          >
            Gallery
          </Link>
          <Link
            href={`/client/${id}/gallery/compare`}
            className="font-sans cursor-pointer font-semibold"
          >
            Compare
          </Link>
        </div>
        <div className=" w-full flex flex-col items-center justify-center gap-8">
          <div className=" inline-flex items-center gap-4 justify-center">
            <button>
              <FaChevronLeft className=" hover:bg-slate-100 text-2xl border p-1.5" />
            </button>
            <h2 className="text-2xl ">Front</h2>
            <button>
              <FaChevronRight className=" hover:bg-slate-100 text-2xl border p-1.5" />
            </button>{" "}
          </div>
          <div className="flex items-center justify-center gap-8 flex-col lg:flex-row w-full pb-12 ">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className=" bg-[#D9D9D9] relative w-[290px] 2xl:w-[280px] h-[363px] 2xl:h-[400px]"></div>
              <div className=" inline-flex items-center gap-4 justify-center">
                <button>
                  <FaChevronLeft className=" hover:bg-slate-100 text-xl border p-1" />
                </button>
                <h2 className=" font-sans text-slate-700 text-sm ">
                  29 September 2022
                </h2>
                <button>
                  <FaChevronRight className=" hover:bg-slate-100 text-xl border p-1" />
                </button>{" "}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className=" bg-[#D9D9D9] relative w-[290px] 2xl:w-[280px] h-[363px] 2xl:h-[400px]"></div>
              <div className=" inline-flex items-center gap-4 justify-center">
                <button>
                  <FaChevronLeft className=" hover:bg-slate-100 text-xl border p-1" />
                </button>
                <h2 className=" font-sans text-slate-700 text-sm ">
                  29 September 2022
                </h2>
                <button>
                  <FaChevronRight className=" hover:bg-slate-100 text-xl border p-1" />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
