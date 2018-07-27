import React, { Component } from 'react';
import './App.css';
// import {Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import routes from './routes'

class App extends Component {
  render() {
    // const nav = this.props.location.pathname;
    return (
      <div className="App">
       <Nav
       />
        {routes}
      </div>
    );
  }
}

export default App;
