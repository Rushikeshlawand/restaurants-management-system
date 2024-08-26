import React from 'react';
import './styles/MenuPage.css';

const MenuPage = () => {
  // Static menu items
  const menuItems = [
    { id: 1, name: 'Burger', price: 5.99, image: 'burger.png', quantity: 2 },
    { id: 2, name: 'Pizza', price: 7.99, image: 'pizza.png', quantity: 1 },
    // Add more items as needed
  ];

  // Static order list based on predefined menu items
  const orderList = menuItems.map(item => ({
    ...item,
    total: item.price * item.quantity
  }));

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-cards">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={`../assets/${item.image}`} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h2>{item.name}</h2>
              <p>${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-list">
        <h2>Order List</h2>
        {orderList.length > 0 ? (
          <ul>
            {orderList.map((order, index) => (
              <li key={index}>
                {order.name} x {order.quantity} - ${order.total.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in order.</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
