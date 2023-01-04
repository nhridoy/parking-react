import { Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import Charts from "./Charts";
import Stats from "./Stats";

const Top = () => {
  const { getAllVehicles } = useStateContext();
  const [todayEntry, setTodayEntry] = useState(0);
  const [todayExit, setTodayExit] = useState(0);
  const [totalEntry, setTotalEntry] = useState(0);
  const [totalExit, setTotalExit] = useState(0);
  useEffect(() => {
    setTodayEntry(0);
    setTodayExit(0);
    setTotalEntry(0);
    setTotalExit(0);
    getAllVehicles.map((i) => {
      moment(i?.entryTime).format("MM/DD/YYYY") ===
        moment().format("MM/DD/YYYY") && setTodayEntry((prev) => prev + 1);
      moment(i?.exitTime).format("MM/DD/YYYY") ===
        moment().format("MM/DD/YYYY") && setTodayExit((prev) => prev + 1);
      i?.entryTime && setTotalEntry((prev) => prev + 1);
      i?.exitTime && setTotalExit((prev) => prev + 1);
    });
  }, [getAllVehicles]);
  return (
    <>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h5">Welcome</Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Stats title={"Entry Today"} numbers={todayEntry} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Exit Today"} numbers={todayExit} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Total Entry"} numbers={totalEntry} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Total Exit"} numbers={totalExit} />
        </Grid>
      </Grid>
      <Charts />
    </>
  );
};

export default Top;
