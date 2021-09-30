import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'

import './App.scss';

import Navbar from './components/navbar/Navbar'
import User from './components/user/User'
import Navigation from './router/Navigation'
import Friend from './components/friend/Friend'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <tbody className="app-body">
          <User />
          <Navigation />
          <Friend />
        </tbody>
      </div>
    </Router>
  );
}

export default App;
