import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = ({ searchData }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <Logo />
        </a>
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
        <Button>Give Feedback</Button>
      </nav>
    </>
  );
};

export default Navbar;
