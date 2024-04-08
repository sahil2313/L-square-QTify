// import { Accordion } from "@mui/material";
import React, { useEffect } from "react";
import AccordionTransition from "../../Components/AccordionTransition/AccordionTransition";
import styles from "./FAQ.module.css";
import { Accordion } from "@mui/material";
import { fetchFaqs } from "../../api/api";
export default function FAQ() {
  const [faqs, setFaqs] = React.useState([]);

  useEffect(() => {
    fetchFaqs().then((res) => {
      setFaqs(res.data);
    });
  }, []);

  return (
    <div className={styles.accordionWrapper}>
      <h1>FAQs</h1>
      {faqs.slice(0, 2).map((faq, idx) => (
        <AccordionTransition key={idx} value={faq} />
      ))}
    </div>
  );
}