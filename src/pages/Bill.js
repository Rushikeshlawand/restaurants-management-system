import React from 'react';
import '../styles/Bill.css'; // Create a corresponding CSS file for Bill component if needed

const Bill = ({ orderList }) => {
  const totalBill = orderList.reduce((acc, item) => acc + item.total, 0);
  const gst = totalBill * 0.05;
  const finalBill = totalBill + gst;
  const currentTime = new Date();

  return (
    <div className="order-list-card">
      <h2>Maharaja Hotel</h2>
      <p>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
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
      {orderList.length > 0 && (
        <div className="total-bill">
          <h3>Subtotal: ${totalBill.toFixed(2)}</h3>
          <h3>GST (5%): ${gst.toFixed(2)}</h3>
          <h3>Total Bill: ${finalBill.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Bill;
