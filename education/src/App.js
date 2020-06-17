import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
