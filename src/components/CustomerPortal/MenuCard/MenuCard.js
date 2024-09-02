import React, { useState } from 'react';
import './MenuCard.css';
import FoodItemCard from './FoodItemCard';

// Example food data
const foodData = {
    drinks: [
        { id: 1, name: 'Coke', image: '/Images/drinks/coke.jpg', price: 50 },
        { id: 2, name: 'Pepsi', image: '/Images/drinks/pepsi.jpg', price: 50 }
    ],
    breakfast: [
        { id: 3, name: 'Pancakes', image: '/Images/breakfast/pancakes.jpg', price: 100 },
        { id: 4, name: 'Waffles', image: '/Images/breakfast/waffles.jpg', price: 120 }
    ],
    veg: [
        { id: 5, name: 'Paneer Butter Masala', image: '/Images/veg/paneer.jpg', price: 250 },
        { id: 6, name: 'Dal Makhani', image: '/Images/veg/dal.jpg', price: 200 }
    ],
    nonveg: [
        { id: 7, name: 'Chicken Curry', image: '/Images/nonveg/chicken.jpg', price: 300 },
        { id: 8, name: 'Mutton Kebab', image: '/Images/nonveg/kebab.jpg', price: 350 }
    ],
    chinese: [
        { id: 9, name: 'Spring Rolls', image: '/Images/chinese/springrolls.jpg', price: 150 },
        { id: 10, name: 'Fried Rice', image: '/Images/chinese/friedrice.jpg', price: 200 }
    ]
};

const MenuCard = () => {
    const [selectedCategory, setSelectedCategory] = useState('drinks');
    const [selectedItems, setSelectedItems] = useState({});

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleQuantityChange = (id, increment) => {
        setSelectedItems(prevItems => {
            const currentItem = prevItems[id] || { quantity: 0 };
            const newQuantity = increment ? currentItem.quantity + 1 : Math.max(0, currentItem.quantity - 1);
            return { ...prevItems, [id]: { ...currentItem, quantity: newQuantity } };
        });
    };

    const handleSelectionChange = (id, isSelected) => {
        if (isSelected) {
            setSelectedItems(prevItems => {
                const item = foodData[selectedCategory].find(i => i.id === id);
                return { ...prevItems, [id]: { ...item, quantity: 1 } };
            });
        } else {
            setSelectedItems(prevItems => {
                const newItems = { ...prevItems };
                delete newItems[id];
                return newItems;
            });
        }
    };

    const calculateTotal = () => {
        const total = Object.values(selectedItems).reduce((sum, item) => sum + item.price * item.quantity, 0);
        const gst = total * 0.09;
        return {
            total,
            gst,
            grandTotal: total + gst
        };
    };

    const { total, gst, grandTotal } = calculateTotal();

    return (
        <div className="menu-card-container">
            <div className="sidebar">
                <h2>Food Categories</h2>
                <ul>
                    {Object.keys(foodData).map(category => (
                        <li
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={selectedCategory === category ? 'active' : ''}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="food-items">
                {foodData[selectedCategory].map(item => (
                    <FoodItemCard
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onSelectionChange={handleSelectionChange}
                        isSelected={!!selectedItems[item.id]}
                        quantity={selectedItems[item.id]?.quantity || 0}
                    />
                ))}
            </div>

            <div className="bill-summary">
                <h2>Bill Summary</h2>
                {Object.values(selectedItems).map(item => (
                    <div key={item.id} className="bill-item">
                        <span className="bill-item-name">{item.name} x {item.quantity}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="bill-total">
                    <div className="bill-item">
                        <span>Subtotal</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div className="bill-item">
                        <span>GST (9%)</span>
                        <span>₹{gst.toFixed(2)}</span>
                    </div>
                    <div className="bill-item grand-total">
                        <span>Total</span>
                        <span>₹{grandTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
