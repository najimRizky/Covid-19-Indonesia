import React from 'react'
import './App.css';
import Nav from './Nav'
import About from './About'
import Detail from './Detail'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;
