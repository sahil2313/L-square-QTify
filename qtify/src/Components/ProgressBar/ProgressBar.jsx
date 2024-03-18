import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box"; // Add this import

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${theme.palette.mode === "light" ? "colorPrimary" : "colorSecondary"}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#34c94b",
  },
}));

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ width: "700px" }}>
      <BorderLinearProgress variant="determinate" value={30} />
    </Box>
  );
}
