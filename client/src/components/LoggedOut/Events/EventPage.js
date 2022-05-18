import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  xyz :{
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
      textAlign: "right",
    },
  },
  abc :{
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
      textAlign: "left",
    },
  },
}));

export default function EventPage() {

    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [carouselProps, setCarouselProps] = useState({
        autoPlay: false,
        navButtonsAlwaysVisible: false,
        duration: 2000,
        index:0
    });
  

    const videos = [
        
        {
            videoLink:`${PF}10thGraduationCeremonyTeaserVideo.mp4`,
            thumbnail:""
        }
        
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() =>{
       if(window.screen.width < 1000){
           setCarouselProps({
            autoPlay: false,
            navButtonsAlwaysVisible: false,
            duration: 2000,
            index:0
        }); 
        }
    },[window.screen.width]);


    return (
        <div className='eventpage_root' >
            <div style={{ backgroundColor: "#011940", color: "white" }}>
                <img src={`${PF}events/Graduation.webp`} alt="EVENT_BANNER" style={{ maxWidth: "-webkit-fill-available", maxHeight: "400px" }} />
            </div>
            <div className={classes.root}  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#011940", color: "white" }}>
                <Grid container style={{padding:"3%"}}>
                    <Grid item xs={12} sm={6}>
                        <div style={{  }} className={classes.abc}>
                            {/* <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>EVENT DAY: 8th Jan 2022</p>
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>EVENT TIME: 10:00 AM</p> */}
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Date & Time : <span style={{color:"#8793ff"}}>Projection of the event is postponed</span>  </p>
                            <p style={{fontWeight: "bold", fontFamily: "Montserrat" }}><a href={"https://youtu.be/9ZQUigvicBg"} target="_blank"> Glimpses of GDC</a></p>
                           
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{  }} className={classes.xyz} >
                            <div>
                                {/* <Link to="/events/eventid/preregistration" style={{ textDecoration: "none" }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{ background: 'lightgrey' }}
                                    >
                                        <div style={{ color: "blue", fontSize: "medium" }}>
                                            REGISTER NOW
                                        </div>
                                    </Button>
                                </Link> */}

                                {/* link is disabled */}
                                
                                {/* <Button
                                    type="button"
                                    variant="contained"
                                    style={{ background: 'lightgrey' }}
                                    onClick={()=> alert("The Registration has been closed")}
                                >
                                    <div style={{ color: "blue", fontSize: "medium" }}>
                                        REGISTER NOW
                                    </div>
                                </Button>
                                

                                <p><small style={{color:'red'}}>Registration link will be closed by 4th January 2022, 5.00 pm IST</small></p> */}
                            </div>
                            
                            {/* <p style={{ color: "white", fontFamily: "Montserrat", fontSize: "20px" }}>
                                Considering pandemic situation, prior registration is necessary.<br /> On the spot registration can not be permitted.
                            </p> */}
                        </div>
                    </Grid>
                </Grid>
            </div>

           
            
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>10<sup>th</sup> Graduation Day Ceremony </p>
            </div>
             <div>
                <Carousel index={carouselProps.index} navButtonsAlwaysVisible={carouselProps.navButtonsAlwaysVisible} autoPlay={carouselProps.autoPlay} animation="slide"  duration={carouselProps.duration}>
                    {
                        videos.map((video,i) => (<video key={i} controls loop muted poster={video.thumbnail} style={{maxWidth:'60%', maxHeight:"525px", padding:"2%"}}>
                                <source src={video.videoLink} type="video/mp4" />
                            </video>
                        )) 
                    }
                </Carousel>
            </div>
            {/* old invitation image link */}
            {/* <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "3%" }}>Invitation</p>
              
                <img src={`${PF}InvitationFin.webp`} style={{padding:"1%",width:"50%"}}/>
            </div> */}
            

            
           
            
           
            
            
        </div>
    );
}