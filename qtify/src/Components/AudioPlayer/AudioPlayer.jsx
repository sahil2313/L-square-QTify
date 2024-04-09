import React, { useState, useEffect } from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import styles from "./AudioPlayer.module.css";

const AudioPlayer = ({ audioUrl }) => {
  const [audio] = useState(new Audio(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
        // audio.currentTime = 0;
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });
      audio.removeEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
    };
  }, [audio]);

  return (
    <div className={styles.playSection}>
      {!isPlaying ? (
        <PlayCircleOutlineOutlinedIcon
          onClick={togglePlay}
          className={styles.playBtn}
        />
      ) : (
        <PauseCircleOutlineOutlinedIcon
          onClick={togglePlay}
          className={styles.playBtn}
        />
      )}

      <ProgressBar currentTime={currentTime} duration={duration} />
    </div>
  );
};

export default AudioPlayer;