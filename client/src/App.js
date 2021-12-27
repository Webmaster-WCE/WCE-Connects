import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import { LoggedIn } from './components/LoggedIn/LoggedIn';
// import { VerifyEmail } from './components/LoggedOut/Register/VerifyEmail';
// import EmailVerified from './components/LoggedOut/Register/EmailVerified';
import Home from './components/LoggedOut/Home/Home';
import Login from './components/LoggedOut/Login/Login';
// import Register from './components/LoggedOut/Register/Register';
import Navigation from './components/LoggedOut/Navigation/Navigation';
import Events from './components/LoggedOut/Events/Events';
import EventPage from './components/LoggedOut/Events/EventPage';
import EventRegister from './components/LoggedOut/Events/EventRegister';
import Activities from './components/LoggedOut/Activities/Activities';
import ActivityForm from './components/LoggedOut/Activities/ActivityForm';
// import {AuthContext} from './context/AuthContext';
import GalleryPage from './components/LoggedOut/Gallery/GalleryPage';
import Footer from './components/LoggedOut/Footer/Footer'

function App() {
  // const {token} = useContext(AuthContext);

  return (
    <div className="App">
      <HashRouter>
        <Navigation/>
        <Switch>
            {/* {token !== null? <Redirect to="/u/landing"/> :  */}
            
            {/* } */}
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/gallery">
              <GalleryPage/>
            </Route>
            <Route exact path="/activities">
              <Activities/>
            </Route>
            <Route exact path="/activities/form">
              <ActivityForm/>
            </Route>
            <Route exact path="/events">
              <Events/>
            </Route>
            <Route exact path="/events/eventid">
              <EventPage/>
            </Route>
            <Route exact path="/events/eventid/register">
              <EventRegister/>
            </Route>
             <Route exact path='/login'>
              <Login/>
            </Route>
            {/*<Route exact path="/register">
              <Register/>
            </Route> */}
            {/* <Route exact path="/verify">
              <VerifyEmail/>
            </Route>
            <Route exact path="/verified">
              <EmailVerified/>
            </Route> */}
        </Switch>
        <Route path="/u"> 
          <LoggedIn/>
        </Route>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
