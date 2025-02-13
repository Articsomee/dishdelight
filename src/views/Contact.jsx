import React from "react";
import styles from "./cssv/About.module.css"; // Reuse the About styles
import contactImage from "../assets/images/austria.webp"; // Use the same image or replace with a contact-specific image

const Contact = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <img
          src={contactImage} // Use the imported image
          alt="Contact DishDelights"
          className={styles.image}
        />
        <div className={styles.textContent}>
          <h1>Contact</h1>
          <p>Phone: +123 456 789</p>
          <p>Email: dishdelight@gmail.com</p>
          <p>
            Location: 456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
          </p>
          <p>
            Have questions, feedback, or just want to share your culinary
            creations? We'd love to hear from you! Reach out to the DishDelights
            team via email or our contact form, and we'll get back to you as
            soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
