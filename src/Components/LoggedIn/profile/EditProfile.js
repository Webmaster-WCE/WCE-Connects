import React, {useContext, useState, useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import BusinessIcon from '@material-ui/icons/Business';
// import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import { Button, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {AuthContext} from '../../../context/AuthContext';


const useStyles = makeStyles((theme) => ({
    short_profile: {
        marginTop:"5%",
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    basic_info: {
        textAlign:"left",
        marginLeft:"25px",
    },
    short_profile_heading:{
        display:"flex", 
        justifyContent:"space-between", 
        alignItems: 'center', 
        minWidth: '700px',
    },
    short_profile_subheading:{
        fontFamily:"Montserrat",
        fontStyle:"italic",
        fontWeight:"300",
    },
    root:{
        padding:"2% 20% 10% 20%",
    },
    profileIcons:{
        color:"#000000"
    },
    content: {
        justifyContent: "center"
    },
    accordionItem: {
        backgroundColor:"lightgrey",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: "600",
        fontFamily: "Montserrat",
        textAlign: "center"
    },
    subheading: {
        textAlign:"left",
        fontFamily:"Montserrat", fontSize:"medium",
        fontWeight:"500",
        margin:"0px",
    },
    
    propic: {
        minWidth:'150px',
        minHeight:'150px'
    },
    details: {
        fontFamily:"Montserrat",
        textAlign:"left",
        fontWeight: "300"
    }
  }));

export default function EditProfile() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [userProfile, setUserProfile] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {token} = useContext(AuthContext);
    
    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try{
                const res = await axios.get(`http://localhost:5000/users/current`, 
                    { headers: {'x-auth-token':token}
                });
                setUser(res.data);
            }
            catch(err){
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchUser();
    },[token]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            setIsLoading(true);
            try{
                const res = await axios.get(`http://localhost:5000/userProfile/current`, 
                    { headers: {'x-auth-token':token}
                });
                setUserProfile(res.data);
            }
            catch(err){
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchUserProfile();
    },[token]);


    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    // const updatePersonalInfo = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updatePersonalInfo');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     user.personal_info.about_me = updatedUser.about_me;
    //     user.personal_info.birthdate = updatedUser.birthdate;
    // }

    // const updateContactInfo = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updateContactInfo');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     user.contact_info.email = updatedUser.email;
    //     user.contact_info.mobile_no = updatedUser.mobile_no;
    // }

    // const updateProfessionalInfoSingle = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updateProfessionalInfoSingle');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     //updation to made locally
    // }

    // const updateProfessionalInfoAll = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updateProfessionalInfoAll');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     //updation to made in database
    // }

    // const updateEducationalInfoSingle = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updateEducationalInfoSingle');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     //updation to be made locally
    // }
    
    // const updateEducationalInfoAll = (e) => {
    //     e.preventDefault();
    //     var form = document.getElementById('updateEducationalInfoSingle');
    //     var data = new FormData(form);
    //     const entries = data.entries();
    //     const updatedUser = Object.fromEntries(entries);
    //     console.log(updatedUser)
    //     //updation to be made in database
    // }

    const handleSaveAll = (e) => {
        e.preventDefault();

    }
    return (
        <>
            {isLoading ? console.log("Loading in progress...") : null}
            
            {user? <div className={classes.short_profile}>
                <Avatar alt="Profile Photo" className={classes.propic} src={PF+"default.png"} />
                <div className={classes.basic_info}>
                    <div className={classes.short_profile_heading}>
                        <TextField
                            id="first_name"
                            name="first_name"
                            label="First Name"
                            defaultValue={user.info.first_name}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            id="last_name"
                            name="last_name"
                            label="Last Name"
                            defaultValue={user.info.last_name}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <Button variant="contained" onClick={handleSaveAll}>Save All Changes</Button>
                    </div>
                    <div className={classes.short_profile_subheading}>
                        <TextField
                            id="current_post"
                            name="current_post"
                            label="Current Post"
                            defaultValue={user.info.current_post}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            style={{ margin:"10px 0px 10px 0px" }}
                        /><br/>
                        <TextField
                            id="current_organization"
                            name="current_organization"
                            label="Current Organization / College"
                            defaultValue={user.info.current_organization}
                            className={classes.textField}
                            fullWidth
                            style={{ marginTop:"10px" }}
                        />
                    </div>
                </div>
            </div> : null}
        
{/****************************************************************************************************************/}
            {userProfile ? <div className={classes.root}>
                <Accordion className={classes.accordionItem} expanded={expanded} onChange={toggleExpanded}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    >
                    <Typography className={classes.heading}>PROFESSIONAL INFORMATION</Typography>
                    </AccordionSummary>

                    <AccordionDetails className={classes.details}>
                        <div style={{padding:"10px"}}>
                            <TextField
                                id="post"
                                name="post"
                                label="Post"
                                defaultValue={userProfile.professional_info[0].post}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            />
                            <TextField
                                id="company"
                                name="company"
                                label="Company"
                                defaultValue={userProfile.professional_info[0].company}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            <TextField
                                id="from"
                                name="from"
                                label="From:"
                                // type="date"
                                defaultValue={userProfile.professional_info[0].from}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <TextField
                                id="to"
                                name="to"
                                label="To:"
                                // type="date"
                                defaultValue={userProfile.professional_info[0].to}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                style={{marginLeft:"10px"}}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionItem}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>EDUCATIONAL INFORMATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <div style={{padding:"0px 10px"}}>
                            <TextField
                                id="school"
                                name="school"
                                label="Institute"
                                defaultValue={userProfile.educational_info[0].school}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            <TextField
                                id="course"
                                name="course"
                                label="Course"
                                defaultValue={userProfile.educational_info[0].course}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            <TextField
                                id="score"
                                name="score"
                                label="Your Score:"
                                defaultValue={userProfile.educational_info[0].score}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <TextField
                                id="outof"
                                name="outof"
                                label="Out of:"
                                defaultValue={userProfile.educational_info[0].outof}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                style={{marginLeft:"10px"}}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionItem}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>PERSONAL INFORMATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{width:"70%", textAlign:"left", padding:"10px"}}>
                            <TextField
                                id="about_me"
                                name="about_me"
                                label="About Me"
                                defaultValue={userProfile.personal_info.about_me}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            <TextField
                                id="birthdate"
                                name="birthdate"
                                label="Birthday"
                                type="date"
                                defaultValue={userProfile.personal_info.birthdate}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionItem}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>CONTACT INFORMATION</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{width:"50%", textAlign:"left", padding:"10px"}}>
                            <TextField
                                id="email"
                                name="email"
                                label="E-mali"
                                defaultValue={userProfile.contact_info.email}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            <TextField
                                id="mobile_no"
                                name="mobile_no"
                                label="Mobile No"
                                type="number"
                                defaultValue={userProfile.contact_info.mobile_no}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            />
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordionItem}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>PROFILES</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div style={{width:"50%", textAlign:"left", padding:"10px"}}>
                            <TextField
                                id="linkedin"
                                name="linkedin"
                                label="LinkedIn URL"
                                defaultValue={userProfile.profiles.linkedin}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                                
                            /><br/><br/>
                            <TextField
                                id="github"
                                name="github"
                                label="GitHub URL"
                                defaultValue={userProfile.profiles.github}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/><br/>
                            <TextField
                                id="twitter"
                                name="twitter"
                                label="Twitter Username"
                                defaultValue={userProfile.profiles.twitter}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/><br/>
                            <TextField
                                id="youtube"
                                name="youtube"
                                label="YouTube Channel"
                                defaultValue={userProfile.profiles.youtube}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/><br/>
                            <TextField
                                id="facebook"
                                name="facebook"
                                label="Facebook URL"
                                defaultValue={userProfile.profiles.facebook}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/><br/>
                            <TextField
                                id="instagram"
                                name="instagram"
                                label="Instagram Username"
                                defaultValue={userProfile.profiles.instagram}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            /><br/>
                            
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div> : null}
        </>
    );
}
