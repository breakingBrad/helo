import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth/>
        <Dashboard/>
        <Form/>
        <Nav/>
        <Post/>
      </div>
    );
  }
}

export default App;
