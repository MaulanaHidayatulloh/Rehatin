import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.navbarLogo}>
        <img src="../public/logo/Rehatin-removebg-preview 1.svg" alt="" />
      </a>
      <nav className={styles.navbar}>
        <a href="#" className={`${styles.nav} ${styles.homeNav}`}>
          Home
        </a>
        <a href="#" className={styles.nav}>
          About Us
        </a>
        <a href="#" className={styles.nav}>
          Wishlist
        </a>
        <a href="#" className={styles.nav}>
          Gallery
        </a>
        <a href="#" className={styles.nav}>
          Blog
        </a>
        <a href="#" className={`${styles.extra} ${styles.login}`}>
          Log in
        </a>
        <a href="#" className={styles.extra}>
          Register
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
