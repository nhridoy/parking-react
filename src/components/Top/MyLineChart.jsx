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
const counts = [
  { name: "Daily", microbus: 0, car: 0, truck: 0 },
  { name: "Weekly", microbus: 0, car: 0, truck: 0 },
  { name: "Monthly", microbus: 0, car: 0, truck: 0 },
];

const MyLineChart = () => {
  const { getFromLocalStore, getAllVehicles } = useStateContext();

  for (const vehicle of getAllVehicles) {
    // Increment the count for the appropriate vehicle type
    if (vehicle.vehicleType === "Microbus") {
      counts[0].microbus += 1;
      counts[1].microbus += 1;
      counts[2].microbus += 1;
    } else if (vehicle.vehicleType === "Car") {
      counts[0].car += 1;
      counts[1].car += 1;
      counts[2].car += 1;
    } else if (vehicle.vehicleType === "Truck") {
      counts[0].truck += 1;
      counts[1].truck += 1;
      counts[2].truck += 1;
    }
  }

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
        data={counts}
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
