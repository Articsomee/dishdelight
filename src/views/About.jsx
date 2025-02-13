import React from "react";
import styles from "./cssv/About.module.css";
import aboutImage from "../assets/images/aboutus.webp"; // Adjust the path as needed

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <img src={aboutImage} alt="About Us" className={styles.image} />
        <div className={styles.textContent}>
          <h1>About Us</h1>
          <p>
            Welcome to DishDelight! We are passionate about bringing you the
            best recipes from around the world. Our mission is to make cooking
            easy and enjoyable for everyone. Whether you're a beginner or a
            seasoned chef, you'll find something to inspire you in our
            collection of delicious recipes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
