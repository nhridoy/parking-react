import { Grid } from "@mui/material";
import React from "react";
import LineChart from "./MyLineChart";
import MyPieChart from "./MyPieChart";

const Charts = () => {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item md={6}>
        <MyPieChart />
      </Grid>
      <Grid item md={6}>
        <LineChart />
      </Grid>
    </Grid>
  );
};

export default Charts;
