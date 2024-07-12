"use client";
import Image from "next/image";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import ClientNavbar from "@/components/shared/ClientNavbar";
import { Switch } from "@/components/ui/switch";

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className=" flex max-h-screen overflow-y-auto flex-col mb-12 pb-12 gap-4 w-full items-start  justify-start">
      <ClientNavbar id={id} />

      <section className="  lg:px-8 w-full  bg-white p-4">
        <div className="flex flex-col gap-1 mb-10">
          <h2 className="text-xl xl:text-3xl">Settings</h2>
          <p className=" font-sans">Manage all your clients access</p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 w-full items-start  justify-start">
          <div className=" w-full xl:w-[33%]">
            <div className="flex flex-col mb-12">
              <div className=" mb-4">
                <h2 className=" inline-flex text-xl items-center gap-3">
                  <Image
                    src="/icons/integrationPink.svg"
                    alt="Clients"
                    width={26}
                    height={26}
                  />
                  Integrations
                </h2>
                <p className="  text-slate-400/70 font-sans">
                  See what integrations the client has connected with.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-3">
                <Image
                  src="/images/fitnessPal.svg"
                  alt="Clients"
                  width={44}
                  height={44}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    MyFitnessPal
                  </h2>
                  <p className=" text-green-400 font-sans ">Connected</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className=" mb-6">
                <h2 className=" inline-flex text-xl items-center gap-3">
                  <Image
                    src="/icons/feature.svg"
                    alt="Clients"
                    width={26}
                    height={26}
                  />
                  Feature Control
                </h2>
                <p className="  text-slate-400/70 font-sans">
                  Show or hide features on the app for this client.{" "}
                </p>
              </div>
              <div className="flex mb-4 items-center justify-between">
                <div className="flex items-center  gap-2">
                  <Image
                    src="/images/message-off.svg"
                    alt="Clients"
                    width={25}
                    className=" opacity-80"
                    height={25}
                  />
                  <div className="flex flex-col">
                    <h2 className="text-slate-700 font-sans font-bold">
                      Messaging
                    </h2>
                    <p className=" text-sm text-slate-400/70 font-sans ">
                      Message the client directly through the platform.
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex mb-4 items-center justify-between">
                <div className="flex items-center  gap-2">
                  <Image
                    src="/icons/checkIn2.svg"
                    alt="Clients"
                    width={25}
                    className=" opacity-80"
                    height={25}
                  />
                  <div className="flex flex-col">
                    <h2 className="text-slate-700 font-sans font-bold">
                      Check-In
                    </h2>
                    <p className=" text-sm text-slate-400/70 font-sans ">
                      Create check-ins for daily/weekly reporting.{" "}
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="flex mb-4 items-center justify-between">
                <div className="flex items-center  gap-2">
                  <Image
                    src="/icons/workout.svg"
                    alt="Clients"
                    width={28}
                    height={28}
                  />
                  <div className="flex flex-col">
                    <h2 className="text-slate-700 font-sans font-bold">
                      Workout
                    </h2>
                    <p className=" text-sm text-slate-400/70 font-sans ">
                      Assign workouts and track training progress.{" "}
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
          <div className=" w-full xl:w-[33%]">
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-center  gap-2">
                <Image
                  src="/icons/logger.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Workout Logger
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Allow the client to track their workouts.{" "}
                  </p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-center  gap-2">
                <Image
                  src="/icons/nutrition.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Nutrition
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Share nutrition plans or macros goals.{" "}
                  </p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-center  gap-2">
                <Image
                  src="/icons/dataChart.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Metrics
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Allow the client to input metrics.{" "}
                  </p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-center  gap-2">
                <Image
                  src="/icons/progress.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Progress Photo
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Visualize improvement with before/after photos.{" "}
                  </p>
                </div>
              </div>
              <Switch />
            </div>
          </div>
          <div className=" w-full xl:w-[33%]">
            <div className="flex flex-col mb-6 lg:mb-12">
              <div className=" mb-4">
                <h2 className=" inline-flex text-xl items-center gap-3">
                  <Image
                    src="/icons/danger.svg"
                    alt="Clients"
                    width={26}
                    height={26}
                  />
                  Danger
                </h2>
                <p className="  text-slate-400/70 font-sans">
                  You should be careful with these.{" "}
                </p>
              </div>
            </div>
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-start  gap-2">
                <Image
                  src="/icons/archive.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80 mt-1"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Archive Client
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Once archived, they lose access to the app but their data
                    persists. You can always unarchive a client to bring them
                    back.{" "}
                  </p>
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex mb-4 items-center justify-between">
              <div className="flex items-start  gap-2">
                <Image
                  src="/icons/delete.svg"
                  alt="Clients"
                  width={25}
                  className=" opacity-80"
                  height={25}
                />
                <div className="flex flex-col">
                  <h2 className="text-slate-700 font-sans font-bold">
                    Delete Client
                  </h2>
                  <p className=" text-sm text-slate-400/70 font-sans ">
                    Once you delete a client, they lose access to the app and
                    their data is gone forever. You can't undo this!{" "}
                  </p>
                </div>
              </div>
              <button className=" px-3 py-1 pb-1.5 text-sm font-semibold bg-red-600 text-white font-sans">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
