import React from 'react'
import {Route, BrowserRouter as Router} from "react-router-dom";
import { Landing } from './Landing/Landing';
import Navigation from './Navigation/Navigation';
import EditProfile from './profile/EditProfile';
import ProfilePage from './profile/ProfilePage';

export const LoggedIn = () => {
    return (
        <div>
            <Router>
                    <Navigation/>
                    <Route path="/u/landing" render={props => <Landing {...props} />}/> 
                    <Route path="/u/profile/userid/edit" component={EditProfile}/> 
                    <Route exact path="/u/profile/userid" component={ProfilePage} /> 
            </Router>
        </div>
    )
}
