import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoggedIn } from './Components/LoggedIn/LoggedIn';
import { VerifyEmail } from './Components/LoggedOut/Register/VerifyEmail';
import EmailVerified from './Components/LoggedOut/Register/EmailVerified';
import Home from './Components/LoggedOut/Home/Home';
import Login from './Components/LoggedOut/Login/Login';
import Register from './Components/LoggedOut/Register/Register';
import Navigation from './Components/LoggedOut/Navigation/Navigation';
import Events from './Components/LoggedOut/Events/Events';
import {AuthContext} from './context/AuthContext';

function App() {
  const {token} = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        {token !== null? <Redirect to="/u/landing"/> : 
        <Switch>
            <Route exact path="/">
              <Navigation/>
              <Home/>
            </Route>
            <Route exact path="/events">
              <Navigation/>
              <Events/>
            </Route>
            <Route exact path='/login'>
              <Navigation/>
              <Login/>
            </Route>
            <Route exact path="/register">
              <Navigation/>
              <Register/>
            </Route>
            <Route exact path="/verify">
              <VerifyEmail/>
            </Route>
            <Route exact path="/verified">
              <EmailVerified/>
            </Route>
        </Switch>}
        <Route path="/u"> 
          <LoggedIn/>
        </Route>
          
      </Router>
    </div>
  );
}

export default App;
