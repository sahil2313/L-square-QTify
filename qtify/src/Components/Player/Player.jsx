import React from "react";
import styles from "./Player.module.css"; // Import your CSS module
import ProgressBar from "../../Components/ProgressBar/ProgressBar"; // Import your ProgressBar component
import AudioPlayer from "../../Components/AudioPlayer/AudioPlayer";

export default function Player() {
  const audioUrl =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <div className={styles.wrapper}>
      <div className={styles.songDetail}>
        <img src={require("../../assets/coverImg.png")} alt="songImg" />
        <div>
          <h3>Song name</h3>
          <h5>Album name</h5>
        </div>
      </div>
      <AudioPlayer audioUrl={audioUrl} />
    </div>
  );
}
