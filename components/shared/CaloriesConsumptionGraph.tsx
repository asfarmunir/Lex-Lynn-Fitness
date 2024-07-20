import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";

// Example data for a week
const data = [
  { day: "Mon", fat: 300, protein: 900, carbs: 1300 },
  { day: "Tue", fat: 900, protein: 900, carbs: 300 },
  { day: "Wed", fat: 600, protein: 900, carbs: 1200 },
  { day: "Thur", fat: 0, protein: 0, carbs: 0 },
  { day: "Fri", fat: 750, protein: 450, carbs: 1050 },
  { day: "Sat", fat: 0, protein: 0, carbs: 0 },
  { day: "Sun", fat: 500, protein: 950, carbs: 400 },
];

// Custom bar component with border radius
const CustomBar = (props: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  radius?: number;
}) => {
  const { x, y, width, height, fill, radius } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={radius}
      rx={radius} // Adding border radius
      ry={radius} // Adding border radius
    />
  );
};

const CaloriesBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barCategoryGap="20%" // Increase space between stacked bars
        barGap={5} // Increase space between categories (bars)
      >
        <XAxis dataKey="day" />
        <YAxis domain={[0, 3000]} />
        <Tooltip />
        <ReferenceLine
          y={2400}
          label={"2280"}
          stroke="red"
          strokeDasharray="5 5"
        />

        <Bar
          dataKey="protein"
          stackId="a"
          name="Protein"
          barSize={10}
          fill="#6DB1EF"
          radius={5} // Adding border radius
        />
        <Bar
          dataKey="carbs"
          stackId="a"
          name="Carbs"
          barSize={10}
          fill="#87E27F"
          radius={5} // Adding border
        />
        <Bar
          dataKey="fat"
          stackId="a"
          name="Fat"
          barSize={10}
          fill="#EE3636"
          radius={5} // Adding border
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CaloriesBarChart;
