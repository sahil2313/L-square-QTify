import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data, type }) {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggel = () => {
    setCarouselToggle((prev) => !prev);
  };

  console.log(data, title);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggel}>
          {!carouselToggle ? "Collapse" : "Show all"}
        </h4>
      </div>
      {data.length == 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card
                  key={item.id}
                  data={item}
                  type={type}
                  title={item.title}
                />
              ))}
            </div>
          ) : (
            // Carousel content goes here
            <Carousel
              data={data}
              renderElement={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
