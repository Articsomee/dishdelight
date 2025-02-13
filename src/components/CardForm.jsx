import React, { useState } from "react";
import styles from "./cssc/CardForm.module.css";

const CardForm = ({
  dishName,
  category,
  time,
  rating,
  steps,
  onEdit,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [editedData, setEditedData] = useState({
    dishName,
    category,
    time,
    rating,
    steps,
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStepChange = (index, value) => {
    setEditedData((prev) => ({
      ...prev,
      steps: prev.steps.map((step, i) => (i === index ? value : step)),
    }));
  };

  const addStep = () => {
    setEditedData((prev) => ({
      ...prev,
      steps: [...prev.steps, ""],
    }));
  };

  const removeStep = (index) => {
    setEditedData((prev) => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index),
    }));
  };

  const handleSaveEdit = () => {
    onEdit(editedData);
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            name="dishName"
            value={editedData.dishName}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="category"
            value={editedData.category}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="time"
            value={editedData.time}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="rating"
            value={editedData.rating}
            onChange={handleEditChange}
          />
          <div className={styles.stepsContainer}>
            <h4>Instructions:</h4>
            {editedData.steps.map((step, index) => (
              <div key={index} className={styles.stepInput}>
                <textarea
                  placeholder={`Step ${index + 1}`}
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                />
                {editedData.steps.length > 1 && (
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
          <button onClick={handleSaveEdit} className={styles.SaveButton}>
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className={styles.CancelButton}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div
            className={styles.cardContent}
            onClick={() => setShowInstructions(!showInstructions)}
          >
            <h3>{dishName}</h3>
            <p>Category: {category}</p>
            <p>Time: {time}</p>
            <p>Rating: {rating}</p>
            {showInstructions && (
              <>
                <h4>Instructions:</h4>
                <ol>
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </>
            )}
          </div>
          <div className={styles.cardActions}>
            <button
              className={styles.EditButton}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className={styles.DeleteButton} onClick={onDelete}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardForm;
