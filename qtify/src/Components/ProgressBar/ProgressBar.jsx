import React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import styles from "./ProgressBar.module.css";

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

const ProgressBar = ({ currentTime, duration }) => {
  const progress = (currentTime / duration) * 100 || 0;
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const remainingMinutes = Math.floor((duration - currentTime) / 60);
  const remainingSeconds = Math.floor((duration - currentTime) % 60);

  return (
    <Box sx={{ width: "700px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p>{`${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`}</p>
        <p>{`${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`}</p>
      </Box>
      <BorderLinearProgress
        variant="determinate"
        value={progress}
        className={styles.progressBar}
      />
    </Box>
  );
};

export default ProgressBar;