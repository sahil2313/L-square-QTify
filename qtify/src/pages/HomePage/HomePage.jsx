import React from "react";
import styles from "./HomePage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/section/Section";
import { fetchFilters } from "../../api/api";
import FAQ from "../../Components/FAQ/FAQ";
import AccordionTransition from "../..//Components/AccordionTransition/AccordionTransition";
import Player from "../../Components/Player/Player";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          type="song"
          filterSource={fetchFilters}
        />
      </div>
      <FAQ />
      {/* <AccordionTransition /> */}
      <Player />
    </>
  );
}

export default HomePage;
