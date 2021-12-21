import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Provinsi from './pages/Provinsi'
import ProvDetail from './pages/ProvDetail'
import Home from './pages/Home'
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
