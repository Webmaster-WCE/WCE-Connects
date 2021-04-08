import React from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Events from './Events/Events';

export default function LoggedOut(){
    return(
        <>
            <Router>
                {console.log("In LoggedOut")}
                <Navigation/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Footer/>
            </Router>
        </>
    );
}