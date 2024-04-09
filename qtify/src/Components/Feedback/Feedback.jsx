import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import styles from "./Feedback.module.css";
import ClearIcon from "@mui/icons-material/Clear";

import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#34c94b", // Change the outline color
  },

  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#34c94b", // Change the label color when focused
  },
});
const CustomButton = styled(Button)({
  color: "#34c94b", // Text color
  backgroundColor: "#fff", // Background color
  "&:hover": {
    backgroundColor: "#34c94b", // Background color on hover
    color: "#fff", // Text color on hover
  },
});

export default function Feedback({ handleCloseFeedback }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm" className={styles.formContainer}>
      <div className={styles.title}>
        <h3>Feedback</h3>
        <ClearIcon className={styles.icon} onClick={handleCloseFeedback} />
      </div>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <CustomTextField
          fullWidth
          label="Full Name"
          variant="outlined"
          margin="normal"
          required
        />
        <CustomTextField
          fullWidth
          label="Email Address"
          variant="outlined"
          margin="normal"
          required
          type="email"
        />
        <CustomTextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
          required
        />
        <CustomTextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <CustomButton sx={{ marginTop: "0.8rem" }} fullWidth>
          Submit Feedback
        </CustomButton>
      </Box>
    </Container>
  );
}