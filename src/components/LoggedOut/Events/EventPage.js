import React from 'react';
import Button from '@material-ui/core/Button';
export default function EventPage(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
             <div style={{backgroundColor:"black", color:"white"}}>
                <img src={PF+"event_banner.png"} alt="pic" style={{maxWidth:"-webkit-fill-available", maxHeight:"400px"}}/>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", backgroundColor:"black", color:"white"}}>
                <div style={{textAlign:"left", marginLeft:"45px"}}>
                    <p style={{fontSize:"large", fontWeight:"bold", fontFamily:"Montserrat"}}>EVENT DAY: 8th Jan 2022</p>
                    <p style={{fontSize:"large", fontWeight:"bold", fontFamily:"Montserrat"}}>EVENT TIME: 10:00 AM</p>
                </div>
                <div style={{marginRight:"35px"}}>
                    <Button
                    type="submit"
                    variant="contained"
                    style={{ background: 'lightgrey' }}
                    >
                    <div style={{color:"black"}}>
                        <a href="/events/eventid/register">REGISTER NOW</a>
                    </div>
                    </Button>
                </div>
            </div>
            <svg style={{marginBottom:"-200px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div style={{fontFamily:"Montserrat", height:"70vh"}}>
                <p style={{fontSize:"x-large", fontWeight:"bold", color:"purple"}}>Platinum Jubilee Celebration (2021-22)</p>
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>Invocation</p>
                <p style={{backgroundColor:"lightgrey", padding:"5%", margin:"1% 10% 1% 10%", textAlign:"left", lineHeight:"1.5"}}>
                    Every alumni meet has been a significant event for all the stakeholders associated with our institute. The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus on the <strong>8th day of January 2022</strong>. As intended every year, this meet also ensures strengthening a strong bond between the alumni and current stakeholders of the institute. Please spare your time to witness progress of alma matter, meet and felicitate your teachers, be a role model for young students and extend yourself by giving back to the institute what it deserves !</p>
            </div>
        </>
    );
}