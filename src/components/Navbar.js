import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you want to style the navbar

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  </nav>
);

export default Navbar;
