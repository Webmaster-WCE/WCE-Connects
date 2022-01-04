import React, { useEffect } from 'react';
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
// import DevPlanTable from './DevPlanTable';
import { Link } from "react-router-dom";



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
    function createECData(sr, name, designation, mobile, email) {
        return { sr, name, designation, mobile, email };
    }
    function createACData(sr, name, designation, department, mobile, email) {
        return { sr, name, designation, department, mobile, email };
    }
    function createSceduleData(time, desc) {
        const obj = { time, desc };
        // setIndex(index+1);
        return obj;
    }
    const ecCommittee = [
        createECData(1, "Dr. P. G. Sonavane", "Deputy Director", "9822534868", "deputy.director@walchandsangli.ac.in"),
        createECData(2, "Dr. D. B. Kulkarni", "Chairman WIC", "9422615058", "dinesh.kulkarni@walchandsangli.ac.in"),
        createECData(3, "Mr. S. B. Dhaigude", "TPO", "9422615070", "tpo@walchandsangli.ac.in"),
        createECData(4, "Dr. M. A. Shah", "HOD CSE", "9423872296", "hod.cse@walchandsangli.ac.in"),
        createECData(5, "Dr. S. G. Tamhankar", "PG Coordinator", "9822345672", "finance@walchandsangli.ac.in"),
        createECData(6, "Mr. A. V. Kamble", "Vice-Principal (Polytechnic Wing)", "9765165390", "ashok.kamble@walchandsangli.ac.in"),
        createECData(7, "Dr. M. M. Khot", "Chairman Student Welfare Committee", "7588842269", "maruti.khot@walchandsangli.ac.in"),
        createECData(8, "Smit Deshmukh", "Student, CSE", "7387201101", "smit.deshmukh@walchandsangli.ac.in"),
        createECData(9, "Atharvi Mali","Student, IT", "7249764504", "atharvi.mali@walchandsangli.ac.in"),
        createECData(10, "Prathamesh Kerkar","Student, Mech", "9096975233", "prathamesh.kerkar@walchandsangli.ac.in"),
    ]
    const acCommittee = [
        createACData(1, "Dr. S. N. Tande", "HOD", "Civil", "9422613886", "hod.civil@walchandsangli.ac.in"),
        createACData(2, "Mr. S. B. Dhaigude", "TPO", "Electronics", "9422615070", "tpo@walchandsangli.ac.in"),
        createACData(3, "Dr. K. H.  Inamdar", "HOD", "Mechanical", "9850532432", "hod.mechanical@walchandsangli.ac.in"),
        createACData(4, "Dr. A. A. Agashe", "HOD", "Electronics", "9423270340", "hod.electronics@walchandsangli.ac.in"),
        createACData(5, "Dr. M. A. Shah", "HOD", "CSE", "9423872296", "hod.cse@walchandsangli.ac.in"),
        createACData(6, "Dr. S. G. Tamhankar", "PG Coordinator", "Electronics", "9822345672", "finance@walchandsangli.ac.in"),
        createACData(7, "Dr. A. J. Umbarkar", "HOD", "Information Technology", "9850644060", "hod.it@walchandsangli.ac.in"),
        createACData(8, "Dr. R. P. Hasabe", "HOD", "Electrical", "9422614878", "hod.electrical@walchandsangli.ac.in"),
        createACData(9, "Dr. A. K. Kokane", "Coordinator, Industry Institute Interaction", "Civil", "9822964111", "iiic@walchandsangli.ac.in"),
        createACData(10, "Dr. Anil .A. Agashe", "Coordinator (Polytechnic Wing)", "Industrial Electronics", "9822026036", "anil.agashe@walchandsangli.ac.in"),
        createACData(11, "Mr. A. V. Kamble", "Vice-Principal (Polytechnic Wing)", "Mechanical", "9765165390", "ashok.kamble@walchandsangli.ac.in"),
        createACData(12, "Dr. P. K. Sohoni", "Women's Representative", "Civil", "9717673322", "prachi.sohoni@walchandsangli.ac.in"),
    ];
    const Schedule = [
        createSceduleData("9.00 am to 10.00 am", "Welcome & issuing a kit"),
        createSceduleData("10.00 am to 10.15 am", "Brief presentation on “75 glorious years of WCE”"),
        createSceduleData("10.15 am to 10.25 am", "Address by Director, WCE"),
        createSceduleData("10.25 am to 10.30 am ", "Address by Chairman, WCE"),
        createSceduleData("10.30 am to 10.35 am", "Felicitation of Chief Guest"),
        createSceduleData("10.35 am to 11.00 am", "Address by Chief Guest"),
        createSceduleData("11.00 am to 12.00 noon", "Felicitation of Distinguished Alumni & Industry representative"),
        createSceduleData("12.00 noon to 12.30 pm", "Reminiscences of student hood: Portraying by Alumni"),
        createSceduleData("12.30 pm to 01.30 pm", "Panel Discussion on “Role of Alumni and Industry in Development of WCE”"),
        createSceduleData("01.30 pm to 02.30 pm", "Lunch"),
        createSceduleData("02.30 pm to 03.15 pm", "Exploring New Facilities Created"),
        createSceduleData("03.15 pm to 05.00 pm", "Visit and Interaction at Respective Department"),
        createSceduleData("05.00 pm", "Farewell & Go ahead"),
    ];
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='eventpage_root' >
            <div style={{ backgroundColor: "#011940", color: "white" }}>
                <img src={`${PF}events/Platinum_Jublee_Meet.webp`} alt="EVENT_BANNER" style={{ maxWidth: "-webkit-fill-available", maxHeight: "400px" }} />
            </div>
            <div className={classes.root}  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#011940", color: "white" }}>
                <Grid container style={{padding:"3%"}}>
                    <Grid item xs={12} sm={6}>
                        <div style={{  }} className={classes.abc}>
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>EVENT DAY: 8th Jan 2022</p>
                            <p style={{ fontSize: "large", fontWeight: "bold", fontFamily: "Montserrat" }}>EVENT TIME: 10:00 AM</p>
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
                                
                                <Button
                                    type="button"
                                    variant="contained"
                                    style={{ background: 'lightgrey' }}
                                    onClick={()=> alert("The Registration has been closed")}
                                >
                                    <div style={{ color: "blue", fontSize: "medium" }}>
                                        REGISTER NOW
                                    </div>
                                </Button>
                                

                                <p><small style={{color:'red'}}>Registration link will be closed by 4th January 2022, 5.00 pm IST</small></p>
                            </div>
                            
                            <p style={{ color: "white", fontFamily: "Montserrat", fontSize: "20px" }}>
                                Considering pandemic situation, prior registration is necessary.<br /> On the spot registration can not be permitted.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "x-large", fontWeight: "bold", paddingTop: "2%" }}>Important Notice </p>
                <div style={{ fontSize: "20px",  padding: "2%", backgroundColor: "#011940",margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px",border:"5px red solid" ,color:"white"}}>
                    <p style={{whiteSpace:'pre-line'}}>{"Dear Alumnus,\n\nThe celebrations of the event ‘Platinum Jubilee Meet’ on 8th January 2022 shall be in the restricted presence because of norms issued by the Government of Maharashtra. In the current COVID related situation everyone has to observe the norms being published from time to time.\n\nIn order to observe the norms for attendance of 50 numbers per department function, the registration link will be closed by 4th January 2022, 5.00 pm. Entry will be restricted to only registered participants.\nLooking forward to meet you all\n\nFor any further assistance,\nContact person email: - ajeet.patil@walchandsangli.ac.in \nMobile no: - 7588920388"}</p>
                   
               </div>
            </div>
            {/* <svg style={{ marginBottom: "-200px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,0L120,10.7C240,21,480,43,720,48C960,53,1200,43,1320,37.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>Platinum Jubilee Meet (2021-22)</p>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>Invocation</p>
                <p style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    Every alumni meet has been a significant event for all the stakeholders associated with our institute. The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus on the <strong>8th day of January 2022</strong>. As intended every year, this meet also ensures strengthening a strong bond between the alumni and current stakeholders of the institute. Please spare your time to witness progress of alma matter, meet and felicitate your teachers, be a role model for young students and extend yourself by giving back to the institute what it deserves !</p>
            </div>
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "3%" }}>Event Purpose</p>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <p>This alumni meet aims to:  </p>
                    <ul>
                        <li>Celebrate alumni meet of Platinum Jubilee Year 2021-22</li>
                        <li>Establish a lifelong relationship with the alumni</li>
                        <li>Highlight the achievements of the alumni and other stakeholders</li>
                        <li>Provide the alumni rewarding opportunities to serve the institute, its faculty, and students</li>
                        <li>Help the stakeholders to establish and to rejuvenate professional relations</li>
                    </ul>
               </div>
            </div>
            <div style={{ fontFamily: "Montserrat", }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "3%" }}>Specific Objectives</p>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "3%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}> 
                    <ul>
                        <li>To tap the collective wisdom and creativity of the alumni to assist the institute to enhance academics, research, training, and infrastructure creating the impact over the coming decade.</li>
                        <li>To prepare a development plan for the transformation Sangli into a smart city.</li>
                        <li>To create endowment fund for research, awards, merit scholarships, infrastructure development, prizes and incentives for students and faculties and also awards to stakeholders for outstanding societal or technical contribution.</li>
                    </ul>
               </div>
            </div>

            <p style={{ fontSize: "xx-large", fontWeight: "bold", fontFamily: "Montserrat", paddingTop: "3%" }}>Tentative Schedule of the Program</p>
            <div style={{ display: "flex", justifyContent: "center" }}>

                <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat" }}>
                    <Table size="small">
                        <TableBody>
                            {
                                // var i=1;
                                Schedule.map((row, index) => (
                                    <TableRow style={index % 2 ? { background: "lightgrey" } : { background: "#e6e6e6" }} key={index}>
                                        {/* <TableCell align="right">{row.sr}</TableCell> */}
                                        <TableCell align="center" style={{ width: 500, fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.time}</TableCell>
                                        <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.desc}</TableCell>
                                    </TableRow>
                                ))}
                            <TableRow align="left">
                                <TableCell colSpan={2}>
                                    <div style={{ marginLeft: "4%", fontFamily: 'Montserrat', fontSize: 'large' }}>

                                        <p><i>Detailed schedule will be displayed soon...</i></p>
                                        <p>Please Note – </p>
                                        <ul>
                                            <li>The spot registration & money transaction is not permitted.<br /> The details of
                                                accompanying members should<br /> also be communicated at the time of online
                                                registration</li>
                                            <li>Welcome breakfast is arranged for all the participants upon arrival</li>
                                            <li>All the participants should take all precautions recommended<br /> for COVID,
                                                including wearing a well-fitted mask</li>
                                        </ul>
                                    </div>
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            {/* <div style={{height:"70vh"}}>
                <DevPlanTable/>
            </div> */}
            <p style={{ fontSize: "xx-large", fontWeight: "bold", fontFamily: "Montserrat", paddingTop: "3%" }}>Event Core Committee</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large' }}>Sr. No.</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Name</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Designation</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Mobile No</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Email ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ecCommittee.map((row) => (
                                <TableRow key={row.sr}>
                                    {/* <TableCell align="right">{row.sr}</TableCell> */}
                                    <TableCell component="th" scope="row" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>
                                        {row.sr}
                                    </TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.name}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.designation}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.mobile}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><a href={"mailto:" + row.email} target="_blank" rel="noreferrer">{row.email}</a></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <p style={{ fontSize: "xx-large", fontWeight: "bold", fontFamily: "Montserrat", paddingTop: "3%" }}>Alumni Coordination Committee</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Sr. No.</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Name</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Designation</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Department</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Mobile No</TableCell>
                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 'large', paddingRight: "0px" }}>Email ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {acCommittee.map((row) => (
                                <TableRow key={row.sr}>
                                    {/* <TableCell align="right">{row.sr}</TableCell> */}
                                    <TableCell component="th" scope="row" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>
                                        {row.sr}
                                    </TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.name}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.designation}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.department}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{row.mobile}</TableCell>
                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><a href={"mailto:" + row.email} target="_blank" rel="noreferrer">{row.email}</a></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div style={{ fontFamily: "Montserrat", paddingTop: "3%" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>Platinum Jubilee Meet (2021-22) Registration</p>
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
                
                    <Button
                        type="button"
                        variant="contained"
                        style={{ background: 'lightgrey' }}
                        onClick={()=> alert("The Registration has been closed")}
                    >
                    <div style={{ color: "blue", fontSize: "medium" }}>
                        REGISTER NOW
                    </div>
                    </Button>
                
                 <p><small style={{color:'red'}}>Registration link will be closed by 4th January 2022, 5.00 pm IST</small></p>
                         
                <p style={{ color: "grey", fontFamily: "Montserrat", fontSize: "20px" }}>
                    Considering pandemic situation, prior registration is necessary.<br /> On the spot registration can not be permitted.
                </p>
            </div>
            <div style={{width:'100%'}}>
                <img src={PF+"Advertisement.jpeg"}  alt="WCE_IMAGE" style={{maxWidth: "50%"}}/>
            </div>
            <div style={{ fontFamily: "Montserrat", }}>
                <p style={{ fontSize: "x-large", fontWeight: "bold", paddingTop: "3%" }}>Nearby Hotels</p>
                <div style={{ backgroundColor: "lightgrey", padding: "1%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <p style={{ fontSize: "medium", fontWeight: "normal", fontStyle: "italic", color: "red", marginLeft: "3%" }}>(Click on the name for details...)</p>
                    <div style={{ listStyleType: "none"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} >   
                                <a href="https://goo.gl/maps/iwH2p8CwFBcHNFDc9" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4e009c", fontSize: "large" }}><li>Hotel Season 4 </li></a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <a href="https://goo.gl/maps/WWe9V6qAEZMJmAGm7" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4e009c", fontSize: "large" }}><li>Hotel Icon INN</li></a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}> 
                                <a href="https://goo.gl/maps/EA6cZ9xbsPrcCpz98" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4e009c", fontSize: "large" }}><li>Hotel White House Executive </li></a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <a href="https://goo.gl/maps/md5zsXE9ZmR1roik9" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4e009c", fontSize: "large" }}><li>Hotel Ambassador</li></a>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <a href="https://goo.gl/maps/KduQ5DzV5dnrh4HPA" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4e009c", fontSize: "large" }}><li>Hotel Pearl</li></a>
                            </Grid >
                        </Grid>
                    </div>
                </div>
            </div>
            <div style={{ padding: '5%' }}></div>
        </div>
    );
}