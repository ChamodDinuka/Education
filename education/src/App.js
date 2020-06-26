import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/homepage/home'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import Insert from './components/dashboard/insert./insert'
import Admin_side from './components/dashboard/admin-side'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
    
        <Route
    path="/dashboard"
    render={({ match: { url } }) => (
      <>
        <Admin_side/>
        <Route path={`${url}/`} component={Dashboard} exact />
        <Route path={`${url}/new`} component={Insert} />
        
      </>
    )}
  />
        <Sidebar/>
        </Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
