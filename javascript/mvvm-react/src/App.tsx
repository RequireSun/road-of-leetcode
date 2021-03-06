import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './images/logo.svg';
import './styles/App.less';
import Context from './pages/Context';
import RenderProps from './pages/RenderProps';
import HighOrderComponent from './pages/HighOrderComponent.jsx';
import Hooks from './pages/Hooks';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-header-icon">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-header-info">
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org"
                 target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </div>
          </div>
          <ul className="App-header-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Context">Context</Link>
            </li>
            <li>
              <Link to="/RenderProps">RenderProps</Link>
            </li>
            <li>
              <Link to="/HighOrderComponent">HOC</Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
          </ul>
        </header>
        <div className="App-body">
          <Switch>
            <Route exact path="/">
              <h1>Hello!</h1>
            </Route>
            <Route path="/Context">
              <Context />
            </Route>
            <Route path="/RenderProps">
              <RenderProps />
            </Route>
            <Route path="/HighOrderComponent">
              <HighOrderComponent />
            </Route>
            <Route path="/Hooks">
              <Hooks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
