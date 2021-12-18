import React from 'react';

export default function Footer(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <>
            <div style={{ backgroundColor:"black", fontFamily:"Montserrat"}}>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    {/* <div style={{ display: 'flex'}}> */}
                        <div style={{display:"flex", flexDirection:"column", color:"white", textAlign: "left", padding:"3% 0% 1% 0%"}}>
                            <p style={{ fontSize:"large", fontWeight:"bold"}}>About WCE</p>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                <div>
                                    <img src={PF+"/logo/android-chrome-192x192.png"} alt="WCE_IMAGE" style={{maxWidth:"70%", padding:"5%"}}/>
                                </div>
                                <div>
                                    <p style={{ fontSize:"large", color:"lightgrey"}}>
                                        &nbsp;&nbsp;&nbsp;Walchand College of Engineering, Sangli<br/><br/>
                                    </p>
                                    <div style={{ fontSize:"1.05rem", color:"grey", marginTop:"-1%"}}>
                                        <p style={{ marginBottom:"8px"}}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Website: 
                                            <a href="http://www.walchandsangli.ac.in" target="_blank" rel="noreferrer" style={{color:"grey"}}>www.walchandsangli.ac.in</a>
                                            <br/>
                                        
                                        &nbsp;&nbsp;&nbsp;&nbsp;Email: <a href="mailto:wce@walchandsangli.ac.in" target="_blank" rel="noreferrer" style={{color:"grey"}}>wce@walchandsangli.ac.in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                    <div style={{display:"flex", flexDirection:"column", color:"white", textAlign: "left", padding:"3% 0% 1% 0%"}}>
                        <p style={{ fontSize:"large", fontWeight:"bold"}}>Developed By:</p>
                        <p style={{ fontSize:"large", color:"lightgrey"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Department of Computer Science and Engineering</p>
                        <div style={{ fontSize:"1.05rem", color:"grey", marginTop:"-1%"}}>
                            <p style={{ fontSize:"1.05rem", fontWeight:"bold", color:"white" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developers</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.linkedin.com/in/rushikesh-shelke" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Rushikesh Shelke</a><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/saurabh-hirugade/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Saurabh Hirugade</a><br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/aryan-mali-22a501172/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Aryan Mali</a><br/><br/>
                        </div>
                        <div style={{ fontSize:"medium", color:"grey", marginTop:"-5%"}}>
                            <p style={{ fontSize:"medium", fontWeight:"bold", color:"white" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poster Design</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/atharav-patil-2931b921a" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Atharav Patil</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}