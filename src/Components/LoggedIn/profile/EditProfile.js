import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import defaultPic from './default.png';
import { Button, Grid, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


let user = {
    short_profile: {
        first_name: 'Saurabh',
        last_name: 'Hirugade',
        post:'Student',
        organization:'Walchand College of Engineering, Sangli',
    },
    professional_info: [
        {
            post: 'Program Director',
            company: 'WCE ACM Student Chapter',
            from:'2019-04-01',
            to: '2021-05-28'
        },
    ],
    educational_info:[
        {
            school:'Walchand College of Engineering, Sangli',
            course:'B.Tech in Computer Science and Engineering',
            score:'8.37',
            outof:'10',
        },
        {
            
            school:'Swami Vivekanand College, Kolhapur',
            course:'HSC (Science)',
            score:'89.85',
            outof:'100'
        },

    ],
    personal_info: {
        about_me: "Hello, I'm Pre-Final Year Computer Science And Enigneering Student. I love development and problem solving.",
        birthdate:'2000-09-11',
    },
    contact_info: {
        mobile_no: '7769983805',
        email: 'saurabhhirugade@gmail.com',
    },
    profiles: {
        linkedin: 'https://www.linkedin.com/in/saurabh-hirugade/',
        github: 'https://github.com/cognitive-ninja',
        twitter: 'https://twitter.com/DarkEnergy__',
        youtube: '',
        instagram: '',
        facebook: '',
    }
}
const useStyles = makeStyles((theme) => ({
    short_profile: {
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

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    const updatePersonalInfo = (e) => {
        e.preventDefault();
        var form = document.getElementById('updatePersonalInfo');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        user.personal_info.about_me = updatedUser.about_me;
        user.personal_info.birthdate = updatedUser.birthdate;
    }

    const updateContactInfo = (e) => {
        e.preventDefault();
        var form = document.getElementById('updateContactInfo');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        user.contact_info.email = updatedUser.email;
        user.contact_info.mobile_no = updatedUser.mobile_no;
    }

    const updateProfessionalInfoSingle = (e) => {
        e.preventDefault();
        var form = document.getElementById('updateProfessionalInfoSingle');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        //updation to made locally
    }

    const updateProfessionalInfoAll = (e) => {
        e.preventDefault();
        var form = document.getElementById('updateProfessionalInfoAll');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        //updation to made in database
    }

    const updateEducationalInfoSingle = (e) => {
        e.preventDefault();
        var form = document.getElementById('updateEducationalInfoSingle');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        //updation to be made locally
    }
    
    const updateEducationalInfoAll = (e) => {
        e.preventDefault();
        var form = document.getElementById('updateEducationalInfoSingle');
        var data = new FormData(form);
        const entries = data.entries();
        const updatedUser = Object.fromEntries(entries);
        console.log(updatedUser)
        //updation to be made in database
    }

    return (
        <>
            <div className={classes.short_profile}>
                <Avatar alt="Profile Photo" className={classes.propic} src={defaultPic} />
                <div className={classes.basic_info}>
                    <div className={classes.short_profile_heading}>
                        <p style={{fontFamily:"Montserrat", fontSize:"40px", margin: "0px" }}>{user.short_profile.first_name} {user.short_profile.last_name}</p>
                        <a href="/u/profile/userid/edit" style={{textDecoration:"none"}}><Button variant="contained">Edit Profile</Button></a>
                    </div>
                    <div className={classes.short_profile_subheading}>
                        <p style={{ fontSize:"large",   margin:"10px 0px 0px 0px" }}>{user.short_profile.post}</p>
                        <p style={{fontSize:"x-large",  margin:"0px" }}>{user.short_profile.organization}</p>
                    </div>
                </div>
            </div>
        

            <Grid container justify="center" direction="row">
                {user.profiles.linkedin && <IconButton href={user.profiles.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon className={classes.profileIcons}/>
                </IconButton>}
                {user.profiles.github && <IconButton href={user.profiles.github} target="_blank" rel="noreferrer">
                    <GitHubIcon className={classes.profileIcons}/>
                </IconButton>}
                {user.profiles.twitter && <IconButton href={"https://twitter.com/"+user.profiles.twitter} target="_blank" rel="noreferrer">
                    <TwitterIcon className={classes.profileIcons}/>
                </IconButton>}
                {user.profiles.youtube && <IconButton href={user.profiles.youtube} target="_blank" rel="noreferrer">
                    <YouTubeIcon className={classes.profileIcons}/>
                </IconButton>}
                {user.profiles.facebook && <IconButton href={user.profiles.facebook} target="_blank" rel="noreferrer">
                    <FacebookIcon className={classes.profileIcons}/>
                </IconButton>}
                {user.profiles.instagram && <IconButton href={"https://www.instagram.com/"+user.profiles.instagram} target="_blank" rel="noreferrer">
                    <InstagramIcon className={classes.profileIcons}/>
                </IconButton>}
            </Grid>

            <div className={classes.root}>
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
                                <form onSubmit={updateProfessionalInfoAll} id="updateProfessionalInfoAll" name="updateProfessionalInfoAll">
                                <form className={classes.container} onSubmit={updateProfessionalInfoSingle} id="updateProfessionalInfoSingle" name="updateProfessionalInfoSingle">
                                    <TextField
                                        id="post"
                                        name="post"
                                        label="Post"
                                        defaultValue={user.professional_info[0].post}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="company"
                                        name="company"
                                        label="Company"
                                        defaultValue={user.professional_info[0].company}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="from"
                                        name="from"
                                        label="From:"
                                        type="date"
                                        defaultValue={user.professional_info[0].from}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="to"
                                        name="to"
                                        label="To:"
                                        type="date"
                                        defaultValue={user.professional_info[0].to}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />  
                                    <button type="submit">Save</button>
                                </form> 
                                <hr></hr>
                                <button type="submit">Save professional_info</button>
                                </form>
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
                                <form onSubmit={updateEducationalInfoAll} id="updateEducationalInfoAll" name="updateEducationalInfoAll">
                                <form className={classes.container} onSubmit={updateEducationalInfoSingle} id="updateEducationalInfoSingle" name="updateEducationalInfoSingle">
                                    <TextField
                                        id="school"
                                        name="school"
                                        label="Institute"
                                        defaultValue={user.educational_info[0].school}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="course"
                                        name="course"
                                        label="Course"
                                        defaultValue={user.educational_info[0].course}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="score"
                                        name="score"
                                        label="Your Score:"
                                        defaultValue={user.educational_info[0].score}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="outof"
                                        name="outof"
                                        label="Out of:"
                                        defaultValue={user.educational_info[0].outof}
                                        className={classes.textField}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />  
                                    <button type="submit">Save</button>
                                </form> 
                                <hr></hr>
                                <button type="submit">Save educational_info</button>
                                </form>
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
                            <form className={classes.container} onSubmit={updatePersonalInfo} id="updatePersonalInfo" name="updatePersonalInfo">
                                <TextField
                                    id="about_me"
                                    name="about_me"
                                    label="About Me"
                                    defaultValue={user.personal_info.about_me}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <TextField
                                    id="birthdate"
                                    name="birthdate"
                                    label="Birthday"
                                    type="date"
                                    defaultValue={user.personal_info.birthdate}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <button type="submit">Update</button>
                            </form>
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
                            <form className={classes.container} onSubmit={updateContactInfo} id="updateContactInfo" name="updateContactInfo">
                                <TextField
                                    id="email"
                                    name="email"
                                    label="E-mali"
                                    defaultValue={user.contact_info.email}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <TextField
                                    id="mobile_no"
                                    name="mobile_no"
                                    label="Mobile No"
                                    type="number"
                                    defaultValue={user.contact_info.mobile_no}
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                                <button type="submit">Update</button>
                            </form>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}
