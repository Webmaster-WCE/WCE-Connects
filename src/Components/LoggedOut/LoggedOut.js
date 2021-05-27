import React from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Events from './Events/Events';
import { EmailVerifation } from './Register/EmailVerifation';

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
                <Route exact path="/verify" component={EmailVerifation}/>
                <Footer/>
            </Router>
        </>
    );
}