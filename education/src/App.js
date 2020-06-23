import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/homepage/home'
import Login from './components/login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
