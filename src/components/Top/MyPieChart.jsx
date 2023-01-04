import { Paper } from "@mui/material";
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useStateContext } from "../../contexts/ContextProvider";

const MyPieChart = () => {
  const { getFromLocalStore, getAllVehicles } = useStateContext();

  const countBycar = getAllVehicles.reduce((counts, object) => {
    let car = object.vehicleType;
    counts[car] = (counts[car] || 0) + 1;
    return counts;
  }, {});

  let carCounts = Object.entries(countBycar).map(([car, count]) => {
    return { name: car, value: count };
  });

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
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={carCounts}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
      {/* </ResponsiveContainer> */}
    </Paper>
  );
};

export default MyPieChart;
