import React from 'react'
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import About from './About'
import Provinsi from './Provinsi'
import ProvDetail from './ProvDetail'
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
          <Route path="/provinsi" exact component={Provinsi}/>
          <Route path="/provinsi/:id" component={ProvDetail} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );

}

export default App;
