import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Protein",
    achieved: 30,
    target: 50,
    fillColor: "pink",
  },
  {
    name: "Fat",
    achieved: 35,
    target: 32,
    fillColor: "red",
  },
  {
    name: "Carb",
    achieved: 20,
    target: 35,
    fillColor: "#FFBB28",
  },
];

const Graph = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#9CA3AF" }} // Slate color for tick labels
          />
          <YAxis
            tickFormatter={(tick) => `${tick}%`}
            tick={{ fill: "#9CA3AF" }} // Slate color for tick labels
          />{" "}
          <Bar
            dataKey="achieved"
            name="Achieved"
            fill={data[0].fillColor}
            barSize={20}
          />
          <Bar
            dataKey="target"
            name="Target"
            fill="#F1EEE9
"
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Graph;
