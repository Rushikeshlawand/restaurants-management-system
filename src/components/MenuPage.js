import { useLocation } from 'react-router-dom';
import './styles/MenuPage.css';

const MenuPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const customerName = query.get('name');

  return (
    <div className="menu-page">
      <h1>Hi {customerName}, here’s our menu:</h1>
      {/* Static menu items would be listed here */}
    </div>
  );
}

export default MenuPage;
