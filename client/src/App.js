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
import Activities from './components/LoggedOut/Activities/Activities';
import ActivityForm from './components/LoggedOut/Activities/ActivityForm';
// import {AuthContext} from './context/AuthContext';
import GalleryPage from './components/LoggedOut/Gallery/GalleryPage';
import Footer from './components/LoggedOut/Footer/Footer'
import PrivacyPolicy from './components/LoggedOut/Footer/PrivacyPolicy'
import { DonorPackage } from './components/LoggedOut/DonarPackage/DonarPackage';
import { DepartmentActivities } from './components/LoggedOut/DepartmentActivities/DepartmentActivities';
import { EventsMap } from './components/LoggedOut/Events/EventsMap';
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
            <Route exact path='/login'>
              <Login/>
            </Route>
             <Route path="/events">
              <EventsMap/>
            </Route>
            <Route exact path="/donorpackage">
                <DonorPackage/>
            </Route>
            <Route exact path="/departmentactivities">
                <DepartmentActivities/>
            </Route>
            <Route exact path="/policy">
              <PrivacyPolicy/>
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
