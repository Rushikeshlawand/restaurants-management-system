import { useParams, useLocation } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = () => {
  const { tableId } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const customerName = query.get('name');

  return (
    <div className="menu-page">
      <h1>Hi {customerName}, here’s our menu for Table {tableId}:</h1>
      {/* Menu items will be listed here */}
    </div>
  );
}

export default MenuPage;
