import styles from "./cssc/Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, time, rating, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
        <div className={styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <span>{rating}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.boldP}>Time:</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Card;
