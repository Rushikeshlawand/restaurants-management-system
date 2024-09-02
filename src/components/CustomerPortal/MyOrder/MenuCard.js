import React, { useState } from 'react';
import './MenuCard.css';
import FoodItemCard from '../MyOrder/FoodItemCard';
import BillSummary from '../MyOrder/BillSummary';

const MenuCard = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    // Example food items
    const foodItems = [
        {
            id: 1,
            name: 'Paneer Butter Masala',
            image: '/path/to/paneer.jpg',
            price: 250,
            rating: 4.5
        },
        {
            id: 2,
            name: 'Chicken Biryani',
            image: '/path/to/biryani.jpg',
            price: 300,
            rating: 4.7
        },
        // Add more food items here
    ];

    const handleAddToBill = (item) => {
        setSelectedItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                );
            }
            return [...prevItems, item];
        });
    };

    return (
        <div className="menu-card-container">
            <h1>Menu Card</h1>
            <div className="food-items-container">
                {foodItems.map((item) => (
                    <FoodItemCard key={item.id} item={item} onAddToBill={handleAddToBill} />
                ))}
            </div>
            <BillSummary selectedItems={selectedItems} />
        </div>
    );
};

export default MenuCard;
