import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/homepage/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Route exact path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
