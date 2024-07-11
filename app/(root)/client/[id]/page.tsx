"use client";
import Image from "next/image";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import ClientNavbar from "@/components/shared/ClientNavbar";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />

      <section className=" flex flex-col lg:flex-row gap-8 w-full items-start  justify-start">
        <div className=" w-full lg:w-[65%] grid grid-cols-1 xl:grid-cols-2   gap-4">
          <div className=" bg-white shadow-sm w-full min-h-72 p-5 px-6">
            <div className="flex items-center  justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/info.svg"
                  alt="Client"
                  width={25}
                  height={25}
                />
                <h1 className="text-xl">Client Info</h1>
              </div>
              <button className=" hover:bg-slate-50 px-2 inline-flex items-center gap-1">
                <span>View</span>
                <FaCircleChevronRight className="text-primary-50 text-lg" />
              </button>
            </div>
            <div className="flex items-center  justify-between mb-1">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/checkIn.svg"
                  alt="Client"
                  width={15}
                  height={15}
                />
                <h1 className="">Last Check-In</h1>
              </div>
              <p className="bg-yellow-300/55 px-5 py-0.5 inline-flex font-semibold items-center gap-1">
                2 days ago
              </p>
            </div>
            <div className="flex items-center  justify-between mb-1">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/history.svg"
                  alt="Client"
                  width={15}
                  height={15}
                />
                <h1 className="">Duration</h1>
              </div>
              <p className="bg-primary px-3 py-0.5 inline-flex font-semibold items-center gap-1">
                Week 1 of 14
              </p>
            </div>
            <div className="flex items-center  justify-between mb-1">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/lastActive.svg"
                  alt="Client"
                  width={15}
                  height={15}
                />
                <h1 className="">Last Active</h1>
              </div>
              <p className="bg-emerald-300/65  px-3 py-0.5 inline-flex font-semibold items-center gap-1">
                14 hours ago
              </p>
            </div>
            <div className="inline-flex items-center gap-2">
              <Image
                src="/icons/integration.svg"
                alt="Client"
                width={15}
                height={15}
              />
              <h1 className="">Integrations</h1>
            </div>
            <div className="flex items-center  justify-end mb-1 mt-3">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/images/fitnessPal.svg"
                  alt="Client"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col justify-start">
                  <h1 className=" font-sans font-bold mb-0">MyFitnessPal</h1>

                  <span className=" text-sm font-sans font-thin text-green-500">
                    Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-sm w-full min-h-72 p-5 px-6">
            <div className="flex items-center  justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/notes.svg"
                  alt="Client"
                  width={20}
                  height={20}
                />
                <h1 className="text-xl">Notes</h1>
              </div>
              <button className=" hover:bg-slate-50 px-2 inline-flex items-center gap-1">
                <span>Add Note</span>
                <AiFillPlusCircle className="text-primary-50 text-lg" />
              </button>
            </div>
            <div className="w-full flex justify-center">
              <Image
                src="/icons/noNotes.svg"
                alt="Client"
                width={200}
                height={200}
                className="
                  object-contain object-center
                "
              />
            </div>
          </div>
          <div className=" bg-white shadow-sm w-full min-h-72 p-5 px-6">
            <div className="flex items-center  justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/dataChart.svg"
                  alt="Client"
                  width={25}
                  height={25}
                />
                <h1 className="text-xl">Client Data</h1>
              </div>
              <button className=" hover:bg-slate-50 px-2 inline-flex items-center gap-1">
                <span>View</span>
                <FaCircleChevronRight className="text-primary-50 text-lg" />
              </button>
            </div>
            <div className="flex items-center  justify-between mb-2.5">
              <div className="inline-flex items-center gap-2">
                <h1 className="">Weight</h1>
              </div>
              <div className="inline-flex items-center gap-2">
                <p className=" font-semibold">78 kg</p>
                <p className="bg-red-500/55 px-2 text-sm py-1 inline-flex font-semibold items-center gap-1">
                  <IoChevronDownOutline className="text-black mr-1 " />
                  5%
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-between mb-2.5">
              <div className="inline-flex items-center gap-2">
                <h1 className="">body Fat</h1>
              </div>
              <div className="inline-flex items-center gap-2">
                <p className=" font-semibold">0 %</p>
                <p className="bg-slate-300/55 px-2 text-sm py-1 inline-flex font-semibold items-center gap-1">
                  <span className="mr-2">-</span>
                  0%
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-between mb-2.5">
              <div className="inline-flex items-center gap-2">
                <h1 className="">Steps</h1>
              </div>
              <div className="inline-flex items-center gap-2">
                <p className=" font-semibold">9349 steps</p>
                <p className="bg-red-500/55 px-2 text-sm py-1 inline-flex font-semibold items-center gap-1">
                  <IoChevronDownOutline className="text-black mr-1 " />
                  7%
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-between mb-2.5">
              <div className="inline-flex items-center gap-2">
                <h1 className="">Calories</h1>
              </div>
              <div className="inline-flex items-center gap-2">
                <p className=" font-semibold">640 calories</p>
                <p className="bg-red-500/55 px-2 text-sm py-1 inline-flex font-semibold items-center gap-1">
                  <IoChevronDownOutline className="text-black mr-1 " />
                  5%
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-sm w-full min-h-72 p-5 px-6">
            <div className="flex items-center  justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/icons/images.svg"
                  alt="Client"
                  width={25}
                  height={25}
                />
                <h1 className="text-xl">Recent Photos</h1>
              </div>
              <button className=" hover:bg-slate-50 px-2 inline-flex items-center gap-1">
                <span>View</span>
                <FaCircleChevronRight className="text-primary-50 text-lg" />
              </button>
            </div>
            <div className="w-full flex justify-center mt-12">
              <Image
                src="/icons/noPhotos.svg"
                alt="Client"
                width={200}
                height={200}
                className="
                  object-contain object-center
                "
              />
            </div>
          </div>
        </div>
        <div
          className=" w-full h-[570px]   lg:w-[35%] p-4 bg-white"
          style={{
            height: "",
          }}
        >
          <h1 className=" text-xl font-semibold ">Unread Messages</h1>
          <div className=" h-full flex items-center justify-center">
            <Image
              src="/images/messages.svg"
              alt="Empty"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
