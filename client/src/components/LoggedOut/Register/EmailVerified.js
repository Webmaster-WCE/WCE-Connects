import React from 'react'
import { Button } from "@material-ui/core";

const EmailVerified = () => {
    return (
        <div style={{ fontFamily:"Montserrat",textAlign:"center",height:"70vh"}}>
            <div style={{  fontSize:"40px",  paddingTop:"70px"}}>
                Your Email is Verified Successfully !! <br/>
                You can now use WCE Connects services from now onwards. <br/>
            </div>
            <div style={{marginTop:"50px"}}>
                Click below button to login: <br/><br/>
                <a href="/login" style={{ textDecoration: "none"}}>
                    <Button style={{fontFamily:"Montserrat", backgroundColor:"black", color:"white"}}>Login to My Account</Button>
                </a>
            </div>
        </div>
    )
}

export default EmailVerified
