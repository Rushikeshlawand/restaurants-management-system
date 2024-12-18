import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MyOrder.css';
import Navbar from '../Navbar/Navbar'; // Assuming Navbar component
import myOrderBackground from '../../../Images/Myorder/Myorderbackground.jpg'; // Background image

const MyOrder = () => {
    const location = useLocation();
    const { selectedItems = {} } = location.state || {};
    const navigate = useNavigate();

    const calculateTotal = () => {
        const total = Object.values(selectedItems).reduce((sum, item) => sum + item.price * item.quantity, 0);
        const gst = total * 0.09;
        return {
            total,
            gst,
            grandTotal: total + gst
        };
    };

    const handleDeleteItem = (id) => {
        // Implement item removal logic
    };

    const handleCallWaiter = () => {
        alert("Your call to the waiter has been placed!");
    };

    const handleFinalizeOrder = () => {
        alert("Foodies are getting started with your order. We’ll prepare it shortly!");
    };

    const goBackToMenu = () => {
        navigate('/menu'); // Assuming the MenuCard page route is '/menu'
    };

    const { total, gst, grandTotal } = calculateTotal();

    return (
        <div className="myorder-page" style={{ backgroundImage: `url(${myOrderBackground})` }}>
            <Navbar />
            <div className="order-container">
                <div className="order-items">
                    <h2>Your Order</h2>
                    {Object.keys(selectedItems).length === 0 ? (
                        <p>No items selected</p>
                    ) : (
                        <div className="order-cards-container">
                            {Object.values(selectedItems).map(item => (
                                <div key={item.id} className="order-card">
                                    <img src={item.image} alt={item.name} className="order-item-image" />
                                    <div className="order-item-details">
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price.toFixed(2)} x {item.quantity}</p>
                                        <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => handleDeleteItem(item.id)} className="remove-item-button">Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bill-summary">
                    <h2>Bill Summary</h2>
                    <div className="order-total">
                        <p>Subtotal: ₹{total.toFixed(2)}</p>
                        <p>GST (9%): ₹{gst.toFixed(2)}</p>
                        <p className="grand-total">Total: ₹{grandTotal.toFixed(2)}</p>
                    </div>
                    <div className="button-group">
                        <button onClick={handleFinalizeOrder} className="finalize-order-button">Finalize Order</button>
                        <button onClick={handleCallWaiter} className="call-waiter-button">Call Waiter</button>
                        <button onClick={goBackToMenu} className="back-to-menu-button">Back to Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
