import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {
  const { tableId } = useParams();
  const [name, setName] = useState('');
  const history = useHistory();

  const handleNameSubmit = () => {
    history.push(`/menu/${tableId}?name=${name}`);
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to Our Restaurant!</h1>
      <p>You are seated at Table {tableId}.</p>
      <label htmlFor="name">Enter your name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <button onClick={handleNameSubmit}>Submit</button>
    </div>
  );
}

export default WelcomePage;
