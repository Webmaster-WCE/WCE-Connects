import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoggedIn } from './components/LoggedIn/LoggedIn';
import { VerifyEmail } from './components/LoggedOut/Register/VerifyEmail';
import EmailVerified from './components/LoggedOut/Register/EmailVerified';
import Home from './components/LoggedOut/Home/Home';
import Login from './components/LoggedOut/Login/Login';
import Register from './components/LoggedOut/Register/Register';
import Navigation from './components/LoggedOut/Navigation/Navigation';
import Events from './components/LoggedOut/Events/Events';
import {AuthContext} from './context/AuthContext';

function App() {
  const {token} = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Switch>
            {token !== null? <Redirect to="/u/landing"/> : 
            <Route exact path="/">
              <Navigation/>
              <Home/>
            </Route>}
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
        </Switch>
        <Route path="/u"> 
          <LoggedIn/>
        </Route>
          
      </Router>
    </div>
  );
}

export default App;
