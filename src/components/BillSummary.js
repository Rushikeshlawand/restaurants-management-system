import React from 'react';
import './BillSummary.css';

const BillSummary = ({ selectedItems }) => {
  const calculateTotal = () => {
    const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = total * 0.09;
    return {
      total,
      gst,
      grandTotal: total + gst
    };
  };

  const { total, gst, grandTotal } = calculateTotal();

  return (
    <div className="bill-summary-container">
      <h2>Bill Summary</h2>
      {selectedItems.map((item, index) => (
        <div key={index} className="bill-item">
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
  );
};

export default BillSummary;
