import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, makeStyles } from '@material-ui/core';



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

export default function OpenHouse() {

    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [carouselProps, setCarouselProps] = useState({
        autoPlay: false,
        navButtonsAlwaysVisible: false,
        duration: 2000,
        index:0
    });
  


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
                <img src={`${PF}events/OpenHouse.webp`} alt="EVENT_BANNER" style={{ maxWidth: "-webkit-fill-available", maxHeight: "400px" }} />
            </div>
            <div className={classes.root}  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#011940", color: "white" }}>
                <Grid container style={{padding:"3%"}}>
                    <Grid item xs={12} sm={6}>
                        <div style={{  }} className={classes.abc}>
                           <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Event Date: Thursday, 21th April 2022</p>
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Event Time: 11:00 am to 4:00 pm</p>
                             <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Event Venue : Walchand College of Engineering, Sangli</p>                           
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div style={{  }} className={classes.xyz} >
                            <div>
                                <a href="https://forms.gle/onnnVMbEDZoXVvEZ9" target="_blank" style={{ textDecoration: "none" }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{ background: 'lightgrey' }}
                                    >
                                        <div style={{ color: "blue", fontSize: "medium" }}>
                                            Registration Link
                                        </div>
                                    </Button>
                                </a> 
                                <p><small style={{color:'red'}}>Please make sure you register yourself by filling the following form</small></p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

           
            
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>Open House </p>
            </div>
             <div style={{width:'100%'}}>
                <img src={PF+"OpenHousePoster.jpeg"}  alt="WCE_IMAGE" style={{maxWidth: "50%"}}/>
            </div>

             <div style={{ fontFamily: "Montserrat",fontSize: "x-large", textAlign: "left", lineHeight: "1.5" ,backgroundColor: "lightgrey" ,  padding: "3%", margin: "1% 5%", borderRadius: "30px"}}>
                <p >
                    Walchand College of Engineering ,Sangli cordially invites you for an upcoming event Innovative Project Showcase and Campus tour for Students under Open House initiative</p>
                <p>Highlights of the event :</p>
                <ul>
                    <li>Exhibition of Innovative technical projects made by students</li>
                    <li>Informative session on How exactly internet works</li>
                    <li>Tour throughout the campus, Ajit Gulabchand Central Library (One of the Asia's biggest libraries!),Walchand Informatics Centre,WCE Studio,Video Recording Rooms, walk through all the departments,and much more...</li>
                </ul>
                <p>
                    For any queries, please contact
                </p>
                <ul>
                    <li>Shreeshail Mahajan :+91 73876 49121</li>
                    <li>Chetana Patil : +91 93596 65119</li>
                </ul>
            </div>
        </div>
    );
}