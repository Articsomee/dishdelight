import React, { useEffect, useRef } from "react";
import styles from "./cssc/CardOverlay.module.css";
import Card from "./Card";

const CardOverlay = ({ title, time, rating, image, instructions, onClose }) => {
  const overlayRef = useRef();

  const handleClickOutside = (event) => {
    // Close the overlay if the user clicks outside of it
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the overlay
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent} ref={overlayRef}>
        {/* Button to close the overlay */}
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <Card
          title={title}
          time={time}
          rating={rating}
          image={image}
          className={styles.overlayCard} // Pass a custom class
          style={{ width: "100%", maxWidth: "500px" }} // Pass custom inline styles
        />
        <div className={styles.instructions}>
          <h4>Preparation:</h4>
          {/* Display the preparation instructions */}
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
