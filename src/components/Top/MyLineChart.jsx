import { Paper } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useStateContext } from "../../contexts/ContextProvider";

const MyLineChart = () => {
  const { getFromLocalStore } = useStateContext();

  const countBycar = getFromLocalStore().reduce((counts, object) => {
    let car = object.vehicleType;
    counts[car] = (counts[car] || 0) + 1;
    return counts;
  }, {});

  let carCounts = Object.entries(countBycar).map(([car, count]) => {
    return { name: car, value: count };
  });
  console.log(carCounts);

  const data = [
    {
      name: "Daily",
      microbus: 4000,
      car: 2400,
      truck: 2400,
    },
    {
      name: "Weekly",
      microbus: 3000,
      car: 1398,
      truck: 2210,
    },
    {
      name: "Monthly",
      microbus: 2000,
      car: 9800,
      truck: 2290,
    },
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="car"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="microbus" stroke="#82ca9d" />
        <Line type="monotone" dataKey="truck" stroke="#ce399c" />
      </LineChart>
    </Paper>
  );
};

export default MyLineChart;
