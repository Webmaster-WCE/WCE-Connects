import React, {useContext} from 'react'
import {Route, HashRouter, Redirect} from "react-router-dom";
// import { Landing } from './Landing/Landing';
// import Navigation from './Navigation/Navigation';
// import EditProfile from './Profile/EditProfile';
// import ProfilePage from './Profile/ProfilePage';
// import Inbox from './Inbox/Inbox';
import {AuthContext} from '../../context/AuthContext';
// import Notification from './Notification/Notification';
import AdminPanel from './AdminPanel/AdminPanel';

export const LoggedIn = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            <HashRouter>
                    {/* <Navigation/> */}
                    {/* <Route exact path="/u/landing">
                        {user? <Landing/>  : <Redirect to="/login"/>}
                    </Route> 
                    <Route exact path="/u/profile/userid/edit" component={EditProfile}/> 
                    <Route exact path="/u/profile/:userid" component={ProfilePage} />
                    <Route exact path="/u/inbox" component={Inbox} />
                    <Route exact path="/u/notifications" component={Notification} /> */}
                    <Route path="/u/adminpanel">
                        {user? <AdminPanel/>  : <Redirect to="/login"/>}
                    </Route>
            </HashRouter>
        </div>
    )
}
