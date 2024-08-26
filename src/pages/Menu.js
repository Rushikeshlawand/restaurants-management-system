import React, { useState, useEffect } from 'react';
import '../styles/MenuPage.css';
import Bill from '../pages/Bill'; 

const Menu = () => {
  const initialMenuItems = {
    drinks: [
      { id: 1, name: 'Coke', price: 20, image: 'coke.png', quantity: 1, selected: true },
      { id: 2, name: 'Lemonade', price: 30, image: 'lemonade.png', quantity: 1, selected: true },
    ],
    veg: [
      { id: 3, name: 'Paneer Tikka', price: 150, image: 'misalpav.png', quantity: 1, selected: true },
      { id: 4, name: 'Veg Biryani', price: 120, image: 'pavbhaji.png', quantity: 1, selected: true },
    ],
    nonVeg: [
      { id: 5, name: 'Chicken Curry', price: 180, image: 'chickencurry.png', quantity: 1, selected: true },
      { id: 6, name: 'Fish Fry', price: 200, image: 'fishfry.png', quantity: 1, selected: true },
    ],
    chinese: [
      { id: 7, name: 'Hakka Noodles', price: 130, image: 'hakkanoodles.png', quantity: 1, selected: true },
      { id: 8, name: 'Spring Rolls', price: 90, image: 'springrolls.png', quantity: 1, selected: true },
    ],
  };

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [selectedCategory, setSelectedCategory] = useState('drinks');

  const updateQuantity = (category, id, change) => {
    setMenuItems(prevItems => ({
      ...prevItems,
      [category]: prevItems[category].map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      ),
    }));
  };

  const toggleSelection = (category, id) => {
    setMenuItems(prevItems => ({
      ...prevItems,
      [category]: prevItems[category].map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      ),
    }));
  };

  const orderList = Object.values(menuItems)
    .flat()
    .filter(item => item.selected)
    .map(item => ({
      ...item,
      total: item.price * item.quantity,
    }));

  return (
    <div className="menu-page">
      <div className="category-bar">
        {Object.keys(initialMenuItems).map(category => (
          <button
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="menu-section">
        <div className="menu-category">
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div className="menu-cards">
            {menuItems[selectedCategory].map(item => (
              <div key={item.id} className="menu-card">
                <img src={`../assets/${item.image}`} alt={item.name} className="menu-image" />
                <div className="menu-details">
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(selectedCategory, item.id, -1)}>-</button>
                    <span>Quantity: {item.quantity}</span>
                    <button onClick={() => updateQuantity(selectedCategory, item.id, 1)}>+</button>
                  </div>
                  <div className="checkbox-container">
                    <label>
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleSelection(selectedCategory, item.id)}
                      />
                      Select
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bill orderList={orderList} />
    </div>
  );
}

export default Menu;
