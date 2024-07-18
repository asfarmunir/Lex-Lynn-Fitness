import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "",
    uv: 40,
    pv: 24,
    amt: 24,
  },
  {
    name: "26 Apr",
    uv: 35,
    pv: 22,
    amt: 20,
  },
  {
    name: "27 Apr",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "28 Apr",
    uv: 28,
    pv: 12,
    amt: 21,
  },
  {
    name: "29 Apr",
    uv: 27,
    pv: 13,
    amt: 22,
  },
  {
    name: "30 Apr",
    uv: 27,
    pv: 13,
    amt: 22,
  },
  {
    name: "08 Jul",
    uv: 25,
    pv: 17,
    amt: 17,
  },
  {
    name: "09 Jul",
    uv: 23,
    pv: 15,
    amt: 15,
  },
  {
    name: "10 Jul",
    uv: 22,
    pv: 13,
    amt: 14,
  },
  {
    name: "11 Jul",
    uv: 21,
    pv: 12,
    amt: 12,
  },
  {
    name: "12 Jul",
    uv: 20,
    pv: 10,
    amt: 10,
  },
];

const ClientMetricsGraph = () => (
  <AreaChart
    width={800}
    height={400}
    data={data}
    className=" font-sans font-semibold  text-slate-400/70"
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#FEAFB1" fill="#FEE2E4" />
  </AreaChart>
);

export default ClientMetricsGraph;
