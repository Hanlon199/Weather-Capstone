import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from './components/main/nav';
import Weather from './components/main/weather';
import News from './components/main/news';

function App() {
  return (
    <Router>

      <div>
        <Navigation/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/weather" component={Weather}/>
        <Route exact path="/news" component={News}/>
      </div>
    </Router>

  );
}

function Home(){
  return     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>;
}

export default App;
