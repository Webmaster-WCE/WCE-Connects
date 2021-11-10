import React from 'react';
import Footer from '../Footer/Footer';
import WaveBorder from "./WaveBorder";
export default function Home(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <div style={{backgroundColor:"black", color:"white"}}>
                <img src={PF+"wce_pic.jpg"} alt="pic" style={{minWidth:"-webkit-fill-available",maxWidth:"-webkit-fill-available", maxHeight:"460px"}}/>
            </div>
            <WaveBorder
                upperColor="#000000"
                lowerColor="#FFFFFF"
                // className={classes.waveBorder}
                animationNegativeDelay={2}
            />
            <div style={{height:"60vh"}}>
                <div>
                    <p style={{fontSize:"large", fontWeight:"bold", fontFamily:"Montserrat"}}>Featured Events</p>
                    <a href="/events/eventid" style={{backgroundColor:"white"}}><img src={PF+"event_banner.png"} alt="pic" style={{ maxHeight:"250px", padding:"30px"}}/></a>
                </div>
                <a href="/events/" style={{fontSize:"large", fontWeight:"bold", fontFamily:"Montserrat"}}>View All Events</a>
            </div>
            <Footer/>
        </>
    );
}