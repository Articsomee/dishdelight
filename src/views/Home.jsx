import React from "react";
import styles from "./cssv/Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Elevate Your Kitchen Game!</h1>
        <p>With new and delicious recipes</p>
      </div>
    </div>
  );
};

export default Home;
