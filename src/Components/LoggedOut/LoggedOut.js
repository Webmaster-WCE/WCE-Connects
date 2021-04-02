import React from 'react';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
export default function LoggedOut(){
    return(
        <>
            <Navigation/>
            <Home/>
            <Footer/>
        </>
    );
}