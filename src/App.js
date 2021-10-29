import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';
import AvlSeats from './pages/AvlSeats/AvlSeats';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/AvlSeats" exact>
          <AvlSeats/>
        </Route>
        
        
        
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;