import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import styles from "./Hero.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero({ album }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div onClick={goBack}>
        <ArrowCircleLeftOutlinedIcon className={styles.arrow} />
      </div>
      <div className={styles.hero}>
        <img
          src={album && album.image}
          alt={album && album.title}
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <p>2022</p>
          <p>
            {album.songs.length} songs , {album.follows} follows
          </p>
          <div className={styles.icons}>
            <Button
              sx={{ fontWeight: "bold" }}
              color="success"
              variant="contained"
              startIcon={<ShuffleRoundedIcon />}
            >
              Shuffle
            </Button>
            <Button
              sx={{ fontWeight: "bold" }}
              color="success"
              variant="outlined"
              startIcon={<PlaylistAddRoundedIcon />}
            >
              Add to library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}