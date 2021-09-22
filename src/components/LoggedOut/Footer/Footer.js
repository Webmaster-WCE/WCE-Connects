import React from 'react';

export default function Footer(){
    return(
        <>
            <div style={{ backgroundColor:"black", color:"lightgrey",fontFamily:"Montserrat", display:"flex", justifyContent:"space-around", padding:"10px" }}>
                Developers: 
                <a href="http://www.linkedin.com/in/rushikesh-shelke" style={{textDecoration:"none", color:"white"}}>Rushikesh Shelke</a>
                <a href="https://www.linkedin.com/in/saurabh-hirugade/" style={{textDecoration:"none", color:"white"}}>Saurabh Hirugade</a>
                <a href="https://www.linkedin.com/in/aryan-mali-22a501172/" style={{textDecoration:"none", color:"white"}}>Aryan Mali</a>
            </div>
        </>
    );
}