import React from "react";
import styles from "./Logo.module.css";
import LogoImage from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <img src={LogoImage} alt="logo" width={67} />
    </>
  );
};

export default Logo;
