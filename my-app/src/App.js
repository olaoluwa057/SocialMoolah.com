
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/index';
import FooterPagePro from './components/footer'

function AppContainer() {
  const location = useLocation();
  const NoAuthRoutes = ['/dashboard', '/admin']



  return (
    <div>
      {!NoAuthRoutes.includes(location.pathname) ? <Nav /> : ''}
      <Switch>
          <Route path="/" exact component={Index} />
      </Switch>
      {!NoAuthRoutes.includes(location.pathname) ? <FooterPagePro /> : ''}
     
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;
