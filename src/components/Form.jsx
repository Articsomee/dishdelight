import { useState, useEffect } from "react";
import CardForm from "./CardForm";
import styles from "./cssc/Form.module.css";

const Form = ({ onSave }) => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    dishName: "",
    category: "",
    time: "",
    rating: "",
    steps: [""],
  });

  // Initialize cards state
  const [cards, setCards] = useState([]);

  // Load saved cards from localStorage on component mount
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
    setCards(savedCards);
  }, []);

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle changes for steps input fields
  const handleStepChange = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps.map((step, i) => (i === index ? value : step)),
    }));
  };

  // Add a new step input field
  const addStep = () => {
    setFormData((prev) => ({
      ...prev,
      steps: [...prev.steps, ""],
    }));
  };

  // Remove a step input field
  const removeStep = (index) => {
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index),
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { ...formData };
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));

    // Reset the form data
    setFormData({
      dishName: "",
      category: "",
      time: "",
      rating: "",
      steps: [""],
    });
  };

  // Handle editing a card
  const handleEdit = (index, updatedCard) => {
    const updatedCards = cards.map((card, i) =>
      i === index ? updatedCard : card
    );
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  // Handle deleting a card
  const handleDelete = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="dishName"
          placeholder="Dish Name"
          value={formData.dishName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <div className={styles.stepsContainer}>
          <h4>Instructions:</h4>
          {formData.steps.map((step, index) => (
            <div key={index} className={styles.stepInput}>
              <textarea
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                required
              />
              {formData.steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  className={styles.deleteStepButton}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addStep}
            className={styles.addStepButton}
          >
            Add Step
          </button>
        </div>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </form>
      <div className={styles.preview}>
        {cards.map((card, index) => (
          <CardForm
            key={index}
            {...card}
            onEdit={(updatedCard) => handleEdit(index, updatedCard)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
