import React, {useContext} from 'react'
import {Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import { Landing } from './Landing/Landing';
import Navigation from './Navigation/Navigation';
import EditProfile from './profile/EditProfile';
import ProfilePage from './profile/ProfilePage';
import Messenger from './Messenger/Messenger';
import {AuthContext} from '../../context/AuthContext';
import Home from '../LoggedOut/Home/Home';

export const LoggedIn = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <Router>
                    <Navigation/>
                    <Route exact path="/u/landing">
                        {/* {window.location.reload()} */}
                        {user? <Landing/>  : <Redirect to="/login"/>}
                    </Route> 
                    <Route exact path="/u/profile/userid/edit" component={EditProfile}/> 
                    <Route exact path="/u/profile/userid" component={ProfilePage} />
                    <Route exact path="/u/messenger" component={Messenger} />
            </Router>
        </div>
    )
}
