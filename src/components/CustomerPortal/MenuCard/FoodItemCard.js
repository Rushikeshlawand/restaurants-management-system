import React, { useState } from 'react';
import './FoodItemCard.css';

const FoodItemCard = ({ item, onQuantityChange, onSelectionChange, isSelected, quantity }) => {
  const increaseQuantity = () => {
    onQuantityChange(item.id, true);
  };

  const decreaseQuantity = () => {
    onQuantityChange(item.id, false);
  };

  const handleSelectionChange = (event) => {
    onSelectionChange(item.id, event.target.checked);
  };

  return (
    <div className="food-item-card">
      <img src={item.image} alt={item.name} className="food-item-image" />
      <div className="food-item-details">
        <h3 className="food-item-name">{item.name}</h3>
        <p className="food-item-price">₹{item.price.toFixed(2)}</p>
        <div className="quantity-selector">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
        <div className="food-item-rating">Rating: {item.rating}⭐</div>
        <div className="selection-container">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleSelectionChange}
          />
          <label>Select</label>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
