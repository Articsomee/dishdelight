import React from "react";
import Card from "../components/Card";
import styles from "./cssv/Recipes.module.css";
import carbonara from "../assets/images/carbonara.webp";
import lasagne from "../assets/images/lasagne.webp";
import tiramisu from "../assets/images/tiramisu.webp";

const Recipes = () => {
  const recipes = [
    {
      image: carbonara,
      title: "Carbonara",
      time: "25 min",
      rating: "4.6",
    },
    {
      image: lasagne,
      title: "Lasagna",
      time: "3h 15min",
      rating: "5",
    },
    {
      image: tiramisu,
      title: "Tiramisu",
      time: "5h",
      rating: "4.9",
    },
  ];

  return (
    <div className={styles.recipes}>
      <h1>Explore New Recipes</h1>
      <div className={styles.recipeList}>
        {recipes.map((recipe, index) => (
          <Card key={index} {...recipe} />
        ))}
      </div>
      <h3>See more</h3>
    </div>
  );
};

export default Recipes;
