import React from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Navigation from './Navigation/Navigation';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Events from './Events/Events';
import { VerifyEmail } from './Register/VerifyEmail';
import EmailVerified from './Register/EmailVerified';

export default function LoggedOut(props){
    const { loggedIn, setLoggedIn } = props;

    return(
        <>
            <Router>
                <Navigation/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/events" component={Events}/>
                <Route
                    path='/login'
                    render={(props) => (
                        <Login {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                    )}
                    />
                <Route exact path="/register" component={Register}/>
                <Route exact path="/verify" component={VerifyEmail}/>
                <Route exact path="/verified" component={EmailVerified}/>
            </Router>
        </>
    );
}