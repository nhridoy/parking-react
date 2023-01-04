import { Paper, Typography } from "@mui/material";
import React from "react";

const Stats = ({ title, numbers }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        marginTop: 2,
        p: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{numbers}</Typography>
    </Paper>
  );
};

export default Stats;
