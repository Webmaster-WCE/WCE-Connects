import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import { Button, Grid, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
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

export default function ProfilePage() {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [userProfile, setUserProfile] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {token} = useContext(AuthContext);
    const {userid} = useParams();
    // alert(userId);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try{
                const res = await axios.get(`http://localhost:5000/users/${userid}`, 
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
    },[token, userid]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            setIsLoading(true);
            try{
                const res = await axios.get(`http://localhost:5000/userProfile/${userid}`, 
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
    },[token, userid]);

    return (
        <>
            {isLoading ? console.log("Loading in progress...") : null}
            {user? <div className={classes.short_profile}>
                <Avatar alt="Profile Photo" className={classes.propic} src={PF+"default.png"} />
                <div className={classes.basic_info}>
                    <div className={classes.short_profile_heading}>
                        <p style={{fontFamily:"Montserrat", fontSize:"40px", margin: "0px" }}>{user.info.first_name} {user.info.last_name}</p>
                        {userid==="current" && <a href="/u/profile/userid/edit" style={{textDecoration:"none"}}><Button variant="contained">Edit Profile</Button></a>}
                        {userid!=="current" && 
                            <div style={{backgroundColor:'lightgrey', borderRadius:"50%", padding:"10px", fontFamily:"Montserrat"}}>
                                {user.info.user_role==="alumni"?"Alumni":null}
                                {user.info.user_role==="student"?"Student":null}
                                {user.info.user_role==="teacher"?"Faculty":null}
                            </div>}
                    </div>
                    <div className={classes.short_profile_subheading}>
                        <p style={{ fontSize:"large",   margin:"10px 0px 0px 0px" }}>{user.info.current_post}</p>
                        <p style={{fontSize:"x-large",  margin:"0px" }}>{user.info.current_organization}</p>
                    </div>
                </div>
            </div> : null}
        

            {userProfile ? <Grid container justifyContent="center" direction="row">
                {userProfile.profiles.linkedin && <IconButton href={userProfile.profiles.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon className={classes.profileIcons}/>
                </IconButton>}
                {userProfile.profiles.github && <IconButton href={userProfile.profiles.github} target="_blank" rel="noreferrer">
                    <GitHubIcon className={classes.profileIcons}/>
                </IconButton>}
                {userProfile.profiles.twitter && <IconButton href={"https://twitter.com/"+userProfile.profiles.twitter} target="_blank" rel="noreferrer">
                    <TwitterIcon className={classes.profileIcons}/>
                </IconButton>}
                {userProfile.profiles.youtube && <IconButton href={userProfile.profiles.youtube} target="_blank" rel="noreferrer">
                    <YouTubeIcon className={classes.profileIcons}/>
                </IconButton>}
                {userProfile.profiles.facebook && <IconButton href={userProfile.profiles.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon className={classes.profileIcons}/>
                </IconButton>}
                {userProfile.profiles.instagram && <IconButton href={"https://www.instagram.com/"+userProfile.profiles.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon className={classes.profileIcons}/>
                </IconButton>}
            </Grid> : null}

            {userProfile ? <div className={classes.root}>
                <Accordion className={classes.accordionItem} expanded={expanded} onChange={toggleExpanded}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    //   classes={{ content: classes.content }}
                    >
                    <Typography className={classes.heading}>PROFESSIONAL INFORMATION</Typography>
                    </AccordionSummary>

                    <AccordionDetails className={classes.details}>
                        <div style={{display:"flex", alignItems:"flex-start", padding:"2px 10px"}}>
                            <BusinessIcon />
                            <div style={{padding:"0px 10px"}}>
                                <div style={{fontWeight: "700"}}>
                                    {userProfile.professional_info[0].post}
                                </div>  
                                {/* <br/> */}
                                <div style={{fontWeight: "500"}}>
                                    {userProfile.professional_info[0].company}
                                </div>
                                {/* <br/>   */}
                                <div style={{fontSize: "small"}}>
                                    {userProfile.professional_info[0].from}-{userProfile.professional_info[0].to}
                                </div>  
                            </div>
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
                        <div style={{display:"flex", alignItems:"flex-start", padding:"2px 10px"}}>
                            <SchoolRoundedIcon />
                            <div style={{padding:"0px 10px"}}>
                                <div style={{fontWeight: "700"}}>
                                    {userProfile.educational_info[0].school}
                                </div>  
                                <div style={{fontWeight: "500"}}>
                                    {userProfile.educational_info[0].course}
                                </div>
                                <div style={{fontSize: "small"}}>
                                    {userProfile.educational_info[0].score}/{userProfile.educational_info[0].outof}
                                </div>  
                            </div>
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
                    
                        <div style={{display: 'flex', flexDirection: 'column', padding:"2px"}}>
                            <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>About me:</p> <p style={{ margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{userProfile.personal_info.about_me}</p></div>
                            <hr/>
                            <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Birth-Date:</p> <p style={{margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{userProfile.personal_info.birthdate}</p></div>
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
                        <div style={{display: 'flex', flexDirection: 'column', padding:"2px"}}>
                            <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Email:</p> <p style={{ margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{userProfile.contact_info.email}</p></div>
                            <hr/>
                            <div style={{display:"flex", padding:"4px"}}><p className={classes.subheading}>Mobile No:</p> <p style={{margin:"0px", padding:"2px 10px 2px 10px",textAlign: 'left', fontFamily:"Montserrat", fontWeight:"300"}}>{userProfile.contact_info.mobile_no}</p></div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div> : null}
        </>
    );
}


//dummy_data in case if needed

// const user = {
//     short_profile: {
//         first_name: 'Saurabh',
//         last_name: 'Hirugade',
//         post:'Student',
//         organization:'Walchand College of Engineering, Sangli',
//     },
//     professional_info: [
//         {
//             post: 'Program Director',
//             company: 'WCE ACM Student Chapter',
//             from:'April 2019',
//             to: 'Present'
//         },
//     ],
//     educational_info:[
//         {
//             school:'Walchand College of Engineering, Sangli',
//             course:'B.Tech in Computer Science and Engineering',
//             score:'8.37',
//             outof:'10',
//         },
//         {
            
//             school:'Swami Vivekanand College, Kolhapur',
//             course:'HSC (Science)',
//             score:'89.85',
//             outof:'100'
//         },

//     ],
//     personal_info: {
//         about_me: "Hello, I'm Pre-Final Year Computer Science And Enigneering Student. I love development and problem solving.",
//         birthdate:'11/09/2000',
//     },
//     contact_info: {
//         mobile_no: '7769983805',
//         email: 'saurabhhirugade@gmail.com',
//     },
//     profiles: {
//         linkedin: 'https://www.linkedin.com/in/saurabh-hirugade/',
//         github: 'https://github.com/cognitive-ninja',
//         twitter: 'https://twitter.com/DarkEnergy__',
//         youtube: '',
//         instagram: '',
//         facebook: '',
//     }
// }