import React from 'react';

import './App.css';
import ErrorComp from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import NavBar from './components/NavBar'
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/rooms/' exact component={Rooms}/>
      <Route path='/rooms/:slug' exact component={SingleRoom}/>
      <Route component={ErrorComp}/>
    </Switch>
    </>
  );
}

export default App;
