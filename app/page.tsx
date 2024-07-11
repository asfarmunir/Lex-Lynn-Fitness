"use client";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieChart } from "react-minimal-pie-chart";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row pb-24 max-h-screen overflow-y-auto  items-start justify-between py-8 px-4 md:px-8 gap-5   w-full">
      <div className=" w-full lg:w-[65%] flex flex-col items-center justify-center gap-4">
        <div className=" w-full flex flex-col xl:flex-row items-start justify-center gap-4">
          <div className=" bg-white w-full p-5">
            <h1 className="text-xl font-semibold mb-5">Recent Clients</h1>

            <div className="flex items-center mb-4 justify-start gap-3">
              <Image
                src="/images/client1.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className=" text-nowrap">Bryce Caton</h3>
              <Progress value={33} className="text-blue-400 h-2" color="blue" />
              <p className=" text-nowrap">70%</p>
            </div>
            <div className="flex items-center mb-4 justify-start gap-3">
              <Image
                src="/images/client2.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className=" text-nowrap">Clair Stark</h3>
              <Progress value={73} className="text-blue-400 h-2" color="blue" />
              <p className=" text-nowrap">40%</p>
            </div>
            <div className="flex items-center mb-4   justify-start gap-3">
              <Image
                src="/images/client3.svg"
                alt="Client"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className=" text-nowrap">James Ford</h3>
              <Progress value={93} className="text-blue-400 h-2" color="blue" />
              <p className=" text-nowrap">90%</p>
            </div>
          </div>
          <div className=" bg-white h-full w-full xl:w-3/4 p-5">
            <div className=" w-full flex items-center mb-6 justify-between">
              <h1 className="text-xl font-semibold ">Check-Ins Progress</h1>
              <Select>
                <SelectTrigger className="w-[100px] bg-primary shadow-none font-semibold">
                  <SelectValue placeholder="Week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Week">Week</SelectItem>
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="Yesterday">Yesterday</SelectItem>
                </SelectContent>
              </Select>
            </div>{" "}
            <div className="flex items-center justify-evenly gap-4">
              <PieChart
                className=" w-36"
                animate={true}
                animationDuration={700}
                animationEasing="ease-out"
                center={[50, 50]}
                data={[
                  {
                    color: "#FEAFB1",
                    title: "One",
                    value: 78,
                  },
                  {
                    color: "#FEE2E4",
                    title: "Two",
                    value: 22,
                  },
                ]}
                labelPosition={0}
                label={({ dataEntry }) => {
                  return dataEntry.title === "One" ? `${dataEntry.value}%` : "";
                }}
                lengthAngle={360}
                labelStyle={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
                lineWidth={18}
                paddingAngle={0}
                radius={50}
                startAngle={280}
                background="slategray"
                viewBoxSize={[100, 100]}
              />
              <div className=" flex flex-col items-center justify-center gap-3">
                <div className=" flex items-center gap-2">
                  <div className=" w-3 h-3 bg-primary-50 rounded-full"></div>
                  <p>2 Reviewd</p>
                </div>
                <div className=" flex items-center gap-2">
                  <div className=" w-3 h-3 bg-black rounded-full"></div>
                  <p>0 Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full bg-white p-5">
          <div className=" w-full flex items-center mb-6 justify-between">
            <h1 className="text-xl font-semibold ">Recent Check-Ins</h1>
            <Select>
              <SelectTrigger className="w-[100px] bg-primary font-semibold">
                <SelectValue placeholder="Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Week">Week</SelectItem>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="Yesterday">Yesterday</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap items-center mb-6 md:mb-3 justify-between">
            <div className=" inline-flex items-center gap-2 md:gap-4">
              <Image
                src="/images/client1.svg"
                alt="Check-In"
                width={40}
                height={40}
              />
              <p className=" font-semibold"> Charlotte </p>
            </div>
            <p className="text-xs md:text-base">Weekly Check-In (Sample)</p>
            <p>2 days ago</p>
            <button className=" bg-primary-50 px-6 py-2 text-white">
              Reviewd
            </button>
          </div>
          <div className="flex flex-wrap items-center mb-6 md:mb-3 justify-between">
            <div className=" inline-flex items-center gap-2 md:gap-4">
              <Image
                src="/images/client1.svg"
                alt="Check-In"
                width={40}
                height={40}
              />
              <p className=" font-semibold"> Charlotte </p>
            </div>
            <p className="text-xs md:text-base">Weekly Check-In (Sample)</p>
            <p>2 days ago</p>
            <button className=" bg-primary-50 px-6 py-2 text-white">
              Reviewd
            </button>
          </div>
          <div className="flex flex-wrap items-center mb-6 md:mb-3 justify-between">
            <div className=" inline-flex items-center gap-2 md:gap-4">
              <Image
                src="/images/client1.svg"
                alt="Check-In"
                width={40}
                height={40}
              />
              <p className=" font-semibold"> Charlotte </p>
            </div>
            <p className="text-xs md:text-base">Weekly Check-In (Sample)</p>
            <p>2 days ago</p>
            <button className=" bg-primary-50 px-6 py-2 text-white">
              Reviewd
            </button>
          </div>
          <div className="flex flex-wrap items-center mb-6 md:mb-3 justify-between">
            <div className=" inline-flex items-center gap-2 md:gap-4">
              <Image
                src="/images/client1.svg"
                alt="Check-In"
                width={40}
                height={40}
              />
              <p className=" font-semibold"> Charlotte </p>
            </div>
            <p className="text-xs md:text-base">Weekly Check-In (Sample)</p>
            <p>2 days ago</p>
            <button className=" bg-primary-50 px-6 py-2 text-white">
              Reviewd
            </button>
          </div>
        </div>
      </div>
      <div
        className=" w-full h-[570px] pb-12  lg:w-[35%] p-4 bg-white"
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
    </main>
  );
}
