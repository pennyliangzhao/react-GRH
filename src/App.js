import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landlords from './components/pages/Landlords';
import Tenants from './components/pages/Tenants';
import SignIn from './components/pages/SignIn';
import RateLandlord from "./components/pages/RateLandlord";
import RateAtHome from "./components/pages/RateAtHome";
import RateHouse from "./components/pages/RateHouse";
import RateTenant from "./components/pages/RateTenant";
import RateNeighbour from "./components/pages/RateNeighbour";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/landlords' component={Landlords} />
          <Route path='/tenants' component={Tenants} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/ratelandlord' component={RateLandlord} />
          <Route path='/rateathome' component={RateAtHome} />
          <Route path='/ratehouse' component={RateHouse} />
          <Route path='/rateneighbour' component={RateNeighbour} />
          <Route path='/ratetenant' component={RateTenant} />
          <Route path='/register' component={Register} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
