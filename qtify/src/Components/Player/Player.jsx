// Player.js

import React from "react";
import styles from "./Player.module.css"; // Import your CSS module
import ProgressBar from "../../Components/ProgressBar/ProgressBar"; // Import your ProgressBar component

export default function Player() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.songDetail}>
        <img src={require("../../assets/coverImg.png")} alt="songImg" />
        <div>
          <h3>Song name</h3>
          <h5>Album name</h5>
        </div>
      </div>
      <div className={styles.playSection}>
        <img
          src={require("../../assets/play.png")}
          style={{ width: "30px", height: "30px" }}
          alt="playButton"
        />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <p>0:38</p>
          <ProgressBar />
          <p>3:38</p>
        </div>
      </div>
    </div>
  );
}
