import React, { useState } from 'react';
import './FoodItemCard.css';

const FoodItemCard = ({ item, onAddToBill }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToBill = () => {
    onAddToBill({ ...item, quantity });
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
        <button onClick={handleAddToBill} className="add-to-bill-button">Add to Bill</button>
      </div>
    </div>
  );
};

export default FoodItemCard;
