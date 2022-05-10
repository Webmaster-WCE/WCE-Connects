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

export default function Graduation() {

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
    function createSceduleData(time, activity,duration) {
        const obj = { time, activity,duration};
        // setIndex(index+1);
        return obj;
    }
    const Schedule = [
        createSceduleData("3:30 pm", "Arrival of VC","10 min"),
        createSceduleData("3:40 pm", "Exam Section Inauguration","5 min"),
        createSceduleData("3:45 pm", "Exam Section Video with Tea & Snacks","10 min"),
        createSceduleData("3:55 pm", "Information about Exam Section Processes","10 min"),
        createSceduleData("4:05 pm", "Tree Plantation in Exam Section Premises","10 min"),
        createSceduleData("4:15 pm", "@ Tilak Hall for GDC Program","5 min"),
        createSceduleData("4:20 pm", "Saraswati Vandana","5 min"),
        createSceduleData("4:25 pm", "Welcome and Felicitation of VC","5 min"),
        createSceduleData("4:30 pm", "Welcome Address by Director","10 min"),
        createSceduleData("4:40 pm", "Address by Chairman (video)","15 min"),
        createSceduleData("4:55 pm", "Address by Mashelkar sir (video)","25 min"),
        createSceduleData("5:20 pm", "Address by VC","10 min"),
        createSceduleData("5:30 pm", "Award Ceremony","35 min"),
        createSceduleData("6:05 pm", "Student Feedback","10 min"),
        createSceduleData("6:15 pm", "Vote of Thanks","5 min"),
        createSceduleData("6:25 pm", "National Anthem","5 min"),
        createSceduleData("6:30 pm", "High Tea at Saraswati Idol premises","30 min"),
        createSceduleData("7:00 pm", "Cultural event @ Tilak Hall","")
        
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
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Date & Time : 17<sup>th</sup> May at 3.00 pm</p>
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Venue: Tilak Hall</p>
                            {/* <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>Date & Time : <span style={{color:"#8793ff"}}>Projection of the event is postponed</span>  </p> */}
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
                                <p style={{fontWeight: "bold", fontFamily: "Montserrat" }}>Link to view Virtual GDC: <a href={"https://youtu.be/VXQqI9gtwrs" }className="blink_me" target="_blank">click here</a></p>
                                 <p><small style={{color:'red'}}>Content under this link will be publicly available after 4pm on 17th May.</small></p>
                            
                            </div>
                            
                           
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
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>Invocation</p>
                <p style={{ fontSize: "x-large", backgroundColor: "#e6e6e6", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    The 10th Graduation Day Ceremony link projection and Award distribution function is scheduled on 17th May 2022 in the presence of Vice-chancellor, Shivaji University Kolhapur at the same time inauguration of New Exam Section facilities is planned. For this program Award winning students with max two family members and our faculties are invited. All invitees are requested to follow COVID government guidelines during the program.
                </p>
               
            </div>
             <p style={{ fontSize: "xx-large", fontWeight: "bold", fontFamily: "Montserrat", paddingTop: "3%" }}>Tentative Schedule of the Program</p>
            <div style={{ display: "flex", justifyContent: "center" ,margin:"1%"}}>

                <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat" }}>
                    <Table size="small">
                        <TableBody>
                            <TableRow style={{background: "lightgrey" } } >
                                <TableCell align="center" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Time</b></TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Activity</b></TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Duration</b></TableCell>
                            </TableRow>
                            {
                                // var i=1;
                                Schedule.map((row, index) => (
                                    <TableRow style={index % 2 ? { background: "lightgrey" } : { background: "#e6e6e6" }} key={index}>
                                        <TableCell align="center" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.time}</TableCell>
                                        <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.activity}</TableCell>
                                        <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.duration}</TableCell>
                                    </TableRow>
                                ))}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            
           
            
           
            
            
        </div>
    );
}