import React, { useState } from "react";
import Card from "../components/Card";
import CardOverlay from "../components/CardOverlay";
import styles from "./cssv/Recipes.module.css";
import carbonara from "../assets/images/carbonara.webp";
import lasagne from "../assets/images/lasagne.webp";
import tiramisu from "../assets/images/tiramisu.webp";

const Recipes = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample recipes data
  const recipes = [
    {
      image: carbonara,
      title: "Carbonara",
      time: "25 min",
      rating: "4.6",
      category: "Pasta",
      instructions:
        "1. Cook pasta.\n2. Fry guanciale.\n3. Mix eggs and cheese.\n4. Combine everything off heat to create a creamy sauce.",
    },
    {
      image: lasagne,
      title: "Lasagna",
      time: "3h 15min",
      rating: "5",
      category: "Pasta",
      instructions:
        "1. Layer pasta sheets with meat sauce, béchamel, and cheese.\n2. Bake until golden and bubbly.\n3. Rest before serving.",
    },
    {
      image: tiramisu,
      title: "Tiramisu",
      time: "5h",
      rating: "4.9",
      category: "Dessert",
      instructions:
        "1. Layer coffee-soaked ladyfingers with mascarpone cream.\n2. Chill before serving.",
    },
  ];

  // Handle card click to show overlay
  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setShowOverlay(true);
  };

  // Handle closing the overlay
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setSelectedRecipe(null);
  };

  // Filter recipes based on search term and selected category
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.recipes}>
      <h1>Explore Recipes</h1>
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="All">All Categories</option>
          <option value="Pasta">Pasta</option>
          <option value="Dessert">Dessert</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className={styles.recipeList}>
        {filteredRecipes.map((recipe, index) => (
          <div key={index} onClick={() => handleCardClick(recipe)}>
            <Card {...recipe} />
          </div>
        ))}
      </div>
      <h3>See more</h3>
      {showOverlay && selectedRecipe && (
        <CardOverlay
          title={selectedRecipe.title}
          time={selectedRecipe.time}
          rating={selectedRecipe.rating}
          image={selectedRecipe.image}
          instructions={selectedRecipe.instructions}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};

export default Recipes;
