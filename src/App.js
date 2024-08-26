import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu/:tableId" component={Menu} />
        <Route path="/table/:tableId" component={WelcomePage} />
      </Switch>
    </Router>
  );
}

export default App;
