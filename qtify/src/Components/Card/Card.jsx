import React from "react";
import styles from "./Card.module.css"; // Import the CSS module
import { Chip, Link, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { title, image, songs, slug, follows } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link href={`/album/${slug}`} underline="none">
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <div>
                    <img src={image} alt="songs" loading="lazy" />
                  </div>
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { title, image, likes, songs, slug, follows } = data;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div>
                <img src={image} alt="songs" loading="lazy" />
              </div>
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes}</p>
                </div>
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  return getCard(type);
};

export default Card;
