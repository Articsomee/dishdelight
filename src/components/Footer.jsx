import React from "react";
import styles from "./cssc/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        © DishDelights {new Date().getFullYear()} all rights reserved.
      </p>
    </footer>
  );
}
