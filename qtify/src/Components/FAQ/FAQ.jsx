// import { Accordion } from "@mui/material";
import React from "react";
import AccordionTransition from "../../Components/AccordionTransition/AccordionTransition";
import styles from "./FAQ.module.css";
import { Accordion } from "@mui/material";
export default function FAQ() {
  return (
    <div className={styles.accordionWrapper}>
      <h1>FAQs</h1>
      <AccordionTransition />
    </div>
  );
}
