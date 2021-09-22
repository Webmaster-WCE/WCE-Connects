import React from 'react';
import Footer from '../Footer/Footer';

export default function Home(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <div style={{backgroundColor:"black", color:"white"}}>
                <img src={PF+"wce_pic.jpg"} alt="pic" style={{minWidth:"100%", height:"80%"}}/>
            </div>
            <Footer/>
        </>
    );
}