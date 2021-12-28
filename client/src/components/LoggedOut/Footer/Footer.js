import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

 const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Footer(){
   
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const classes = useStyles();
    return(
        <>
            <div style={{ backgroundColor:"black", fontFamily:"Montserrat"}} className='container'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}  lg={6}>
                            <div style={{color:"white", textAlign: "left"}}>
                                <p style={{ fontSize:"large", fontWeight:"bold"}}>About WCE</p>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} lg={6}>
                                        <img src={PF+"/logo/android-chrome-192x192.png"} alt="WCE_IMAGE" style={{maxWidth:"70%", padding:"5%"}}/>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <p style={{ fontSize:"large", color:"lightgrey"}}>
                                            Walchand College of Engineering, Sangli<br/><br/>
                                        </p>
                                        <div style={{ fontSize:"1.05rem", color:"grey", marginTop:"-1%"}}>
                                            <p style={{ marginBottom:"8px"}}>
                                                Website: 
                                                <a href="http://www.walchandsangli.ac.in" target="_blank" rel="noreferrer" style={{color:"grey"}}>www.walchandsangli.ac.in</a>
                                                <br/>
                                            
                                           Email: <a href="mailto:wce@walchandsangli.ac.in" target="_blank" rel="noreferrer" style={{color:"grey"}}>wce@walchandsangli.ac.in</a>
                                            </p>
                                        </div>
                                    </Grid>
                                </Grid>  
                            </div>
                        </Grid>
                         <Grid item xs={12} lg={6}>
                            <div style={{ color:"white", textAlign: "left"}}>
                                <p style={{ fontSize:"large", fontWeight:"bold"}}>Developed By:</p>
                                <p style={{ fontSize:"large", color:"lightgrey"}}>
                                    Department of Computer Science and Engineering</p>
                                <div style={{ fontSize:"1.05rem", color:"grey", marginTop:"-1%"}}>
                                    <p style={{ fontSize:"1.05rem", fontWeight:"bold", color:"white" }}>Developers</p>
                                    <a href="http://www.linkedin.com/in/rushikesh-shelke" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Rushikesh Shelke</a><br/>
                                    <a href="https://www.linkedin.com/in/saurabh-hirugade/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Saurabh Hirugade</a><br/>
                                    <a href="https://www.linkedin.com/in/aryan-mali-22a501172/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Aryan Mali</a><br/><br/>
                                </div>
                                <div style={{ fontSize:"medium", color:"grey", marginTop:"-5%"}}>
                                    <p style={{ fontSize:"medium", fontWeight:"bold", color:"white" }}>Poster Design</p>
                                    <a href="https://www.linkedin.com/in/atharav-patil-2931b921a" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"grey", marginLeft:"10px"}}>Atharav Patil</a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>               
                </div>
            </div>
        </>
    );
}