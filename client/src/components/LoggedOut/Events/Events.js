import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  root: {
    flexGrow:1,
    //padding: "2%",
    // maxWidth: 345,
  },
});



export default function Events() {
  const classes = useStyles();
  
  
  
  
  const [eventCount, setEventCount] = useState(1);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [PF, setPublichFolderPath] = useState(process.env.REACT_APP_PUBLIC_FOLDER);
  const activeEventID = [1];
  const events = [
    {
      eventid: 0,
      banner: `${PF}events/Data_centre.webp`,
      title: "Inauguration of Data Centre",
      description: "Coming up in Dec 2021..."
    },
    {
      eventid: 1,
      banner: `${PF}events/Platinum_Jublee_Meet.webp`,
      title: "Platinum Jubilee Meet 2021-22",
      description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus.\nComing up in Jan 2022..."
    },
    {
      eventid: 2,
      banner: `${PF}events/Graduation.webp`,
      title: "Graduation",
      description: "Coming up in March 2022.."
    },
    {
      eventid: 3,
      banner: `${PF}events/Conference.webp`,
      title: "Conference",
      description: "Coming up in March 2022.."
    },
    {
      eventid: 4,
      banner: `${PF}events/Industry_meet.webp`,
      title: "Industry meet",
      description: "Coming up in April 2022.."
    },
    
    {
      eventid: 5,
      banner: `${PF}events/Gathering_n_Sports.webp`,
      title: "Gathering and Sports",
      description: "Coming up in April 2022.."
    },
    {
      eventid: 6,
      banner: `${PF}events/OpenHouse.webp`,
      title: "Open House",
      description: "Coming up in May 2022.."
    },
    {
      eventid: 7,
      banner: `${PF}events/Closing_ceremony.webp`,
      title: "Closing ceremony",
      description: "Coming up in June 2022.."
    }
  ];
  useEffect(() => {
    setEventCount(1);
      if(process.env.NODE_ENV ==='development'){
        setPublichFolderPath(process.env.REACT_APP_LOCAL_HOST_PUBLIC_FOLDER);
      }
  }, []);

  
  
  
  return (
    <>
      { eventCount===0 ? 
          <div style={{ fontFamily:"Montserrat", fontSize:"Bold", height:"70vh", textAlign:"center", padding:"70px 0",marginTop:"3%"}}>
                 EVENTS WILL BE DISPLAYED HERE...
          </div> :
           <div className={classes.root} style={{width:"98%"}}> 
           <Grid container  style={{padding: '2%', margin:"5% 6% 2% 0%"}} spacing={4}>
          {events.map((event) => {
          return <Grid item key={event.eventid} style={{ height:"100%"}} xs={12}  sm={6} lg={4} >
              <Card>
                    <Link to={activeEventID.includes(event.eventid)?"/events/eventid":"/events"} style={{textDecoration:"none"}} >
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          alt="EVENT_BANNER"
                          height="100%"
                          width="100%"
                          image={event.banner}
                          title={event.title}
                          />
                          <CardContent style={{backgroundColor:"lightgrey", height:"30%", minHeight:"30%"}}>
                          <Typography gutterBottom variant="h5" component="h2"  style={{color:"black"}}>
                          {event.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify", padding:"5px"}}>
                          {event.description} 
                          </Typography>
                          </CardContent>
                      </CardActionArea>
                    </Link>
              </Card>
          </Grid>})}
          </Grid>
          </div>
      }
    </>
  );
}
