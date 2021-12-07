import React from 'react';

export default function Footer(){
    return(
        <>
            <div style={{ fontSize:"large",backgroundColor:"black", color:"lightgrey",fontFamily:"Montserrat", padding:'1px 20px 5px 20px', textAlign:"left"}}>
            <div style={{display:"flex",justifyContent:"space-around", color:"white"}}>
                <p>Walchand College of Engineering, Sangli</p>
                <p>Website: <a href="http://www.walchandsangli.ac.in" style={{color:"white"}}>www.walchandsangli.ac.in</a></p>
                <p>Email: <a href="mailto:wce@walchandsangli.ac.in" style={{color:"white"}}>wce@walchandsangli.ac.in</a></p>
            </div>
            {/* <div style={{ fontSize:"small",backgroundColor:"black", color:"grey",fontFamily:"Montserrat", textAlign:"center" }}>
                Developed by: 
                <a href="http://www.linkedin.com/in/rushikesh-shelke" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Rushikesh Shelke</a>
                <a href="https://www.linkedin.com/in/saurabh-hirugade/" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Saurabh Hirugade</a>
                <a href="https://www.linkedin.com/in/aryan-mali-22a501172/" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Aryan Mali</a>
            </div> */}
            </div>
        </>
    );
}