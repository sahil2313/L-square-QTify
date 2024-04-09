import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { Link, Modal, Box } from "@mui/material";
import Feedback from "../Feedback/Feedback";

const Navbar = ({ searchData }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleFeedbackClick = () => {
    console.log("clicked");
    setShowFeedbackForm(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedbackForm(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
        <div onClick={handleFeedbackClick}>
          <Button>Give Feedback</Button>
        </div>
      </nav>

      <Modal
        open={showFeedbackForm}
        onClose={handleCloseFeedback}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Feedback handleCloseFeedback={handleCloseFeedback} />
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;