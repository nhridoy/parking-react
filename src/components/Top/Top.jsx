import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Charts from "./Charts";
import Stats from "./Stats";

const Top = () => {
  return (
    <>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h5">Welcome</Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Stats title={"Entry Today"} numbers={12345} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Exit Today"} numbers={12345} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Total Entry"} numbers={12345} />
        </Grid>
        <Grid item md={3}>
          <Stats title={"Total Exit"} numbers={12345} />
        </Grid>
      </Grid>
      <Charts />
    </>
  );
};

export default Top;
