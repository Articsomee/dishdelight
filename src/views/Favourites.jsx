import { useState, useEffect } from "react";
import CardForm from "../components/CardForm.jsx";
import Form from "../components/Form.jsx";
import styles from "../views/cssv/Favourites.module.css";

const Favourites = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Load saved recipes from localStorage on component mount
  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setSavedRecipes(recipes);
  }, []);

  // Handle saving a new recipe
  const handleSave = (recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleEdit = (index, updatedRecipe) => {
    const updatedRecipes = savedRecipes.map((recipe, i) =>
      i === index ? updatedRecipe : recipe
    );
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  const handleDelete = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className={styles.favourites}>
      <h1>Save Your Own!</h1>
      <div className={styles.content}>
        {/* Display saved recipes */}
        <div className={styles.savedRecipes}>
          {savedRecipes.map((recipe, index) => (
            <CardForm
              key={index}
              {...recipe}
              onEdit={(updatedRecipe) => handleEdit(index, updatedRecipe)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
        {/* Form to add new recipes */}
        <Form onSave={handleSave} />
      </div>
    </div>
  );
};

export default Favourites;
