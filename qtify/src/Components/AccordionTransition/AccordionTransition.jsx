import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import styles from "./AccordionTransition.module.css";

export default function AccordionTransition({ value }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        className={styles.accordionItem}
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
          "& .MuiAccordionDetails-root": {
            display: expanded ? "block" : "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.expandedIcon} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{value.question}</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>{value.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}