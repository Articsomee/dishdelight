import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./cssc/Header.module.css";
import logo from "../assets/logo.webp"; // Adjust the path as necessary

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <Link to="Recipes" className={styles.navLink}>
          Recipes
        </Link>
        <Link to="About" className={styles.navLink}>
          About
        </Link>
        <Link to="Contact" className={styles.navLink}>
          Contact
        </Link>
        <Link to="Favourites" className={styles.navLink}>
          Favourites
        </Link>
      </nav>

      {/* Burger Menu */}
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        <div className={styles.burgerMenuLine}></div>
        <div className={styles.burgerMenuLine}></div>
        <div className={styles.burgerMenuLine}></div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/Recipes" className={styles.navLink} onClick={toggleMenu}>
          Recipes
        </Link>
        <Link to="/About" className={styles.navLink} onClick={toggleMenu}>
          About
        </Link>
        <Link to="/Contact" className={styles.navLink} onClick={toggleMenu}>
          Contact
        </Link>
        <Link to="/Favourites" className={styles.navLink} onClick={toggleMenu}>
          Favourites
        </Link>
      </div>
    </header>
  );
}
