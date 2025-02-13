import React, { useEffect, useRef } from "react";
import styles from "./cssc/CardOverlay.module.css";
import Card from "./Card";

const CardOverlay = ({ title, time, rating, image, instructions, onClose }) => {
  const overlayRef = useRef();

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.overlayContent} ref={overlayRef}>
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
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOverlay;
