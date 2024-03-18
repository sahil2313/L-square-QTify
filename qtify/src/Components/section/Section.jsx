import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({ title, data, type, filterSource }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggel = () => {
    setCarouselToggle((prev) => !prev);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card,
  );

  return (
    <div className={showFilters ? styles.sectionWrapper : null}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (
          <h4 className={styles.toggleText} onClick={handleToggel}>
            {!carouselToggle ? "Collapse" : "Show all"}
          </h4>
        )}
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length == 0 ? (
        <div className={styles.circularProgress}>
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((item) => (
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
              data={cardsToRender}
              renderElement={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
