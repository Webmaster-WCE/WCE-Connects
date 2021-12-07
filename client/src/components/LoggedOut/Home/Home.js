import React, {useEffect} from 'react';
import Footer from '../Footer/Footer';
import WaveBorder from "./WaveBorder";
import {Link} from 'react-router-dom';

export default function Home(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
            {/* {PF+"wce_pic.jpg"} */}
            <div style={{backgroundColor:"black", color:"white"}}>
                <img src={PF+"/wce_pic.jpg"} alt="WCE_IMAGE" style={{minWidth:"-webkit-fill-available",maxWidth:"-webkit-fill-available", maxHeight:"460px"}}/>
            </div>
            <WaveBorder
                upperColor="#000000"
                lowerColor="#FFFFFF"
                // className={classes.waveBorder}
                animationNegativeDelay={2}
            />
            <div style={{height:"70vh"}}>
                <div>
                    <p style={{fontSize:"x-large", fontWeight:"bold", fontFamily:"Montserrat"}}>Featured Events</p>
                    <Link to="/events/eventid" style={{backgroundColor:"white", textDecoration: "none"}}><img src={PF+"/event_banner.jpg"} alt="EVENT_BANNER" style={{ maxHeight:"250px", padding:"30px"}}/></Link>
                </div>
                <Link to="/events/" style={{ textDecoration:"none"}}><p style={{fontSize:"x-large", fontWeight:"bold", fontFamily:"Montserrat"}}>View All Events</p></Link>
            </div>
            <Footer/>
        </>
    );
}