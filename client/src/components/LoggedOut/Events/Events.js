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
  const [screenWidth, setScreenWidth] = useState();
  const [flexState, setFlexState] = useState(12);
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [PF, setPublichFolderPath] = useState(process.env.REACT_APP_PUBLIC_FOLDER);
  const events = [
    {
      eventid: 0,
      banner: `${PF}Data_centre.png`,
      title: "Inauguration of Data Centre",
      description: "Information will be diplayed soon.."
    },
    {
      eventid: 1,
      banner: `${PF}event_banner.jpg`,
      title: "Platinum Jubilee Meet 2021-22",
      description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus."
    },
    {
      eventid: 2,
      banner: `${PF}Graduation.png`,
      title: "Graduation",
      description: "Information will be diplayed soon.."
    },
    {
      eventid: 3,
      banner: `${PF}Conference.png`,
      title: "Conference",
      description: "Information will be diplayed soon.."
    },
    {
      eventid: 4,
      banner: `${PF}Industry_meet.png`,
      title: "Industry meet",
      description: "Information will be diplayed soon.."
    },
    
    {
      eventid: 5,
      banner: `${PF}Gathering_n_Sports.png`,
      title: "Gathering and Sports",
      description: "Information will be diplayed soon.."
    },
    {
      eventid: 6,
      banner: `${PF}OpenHouse.png`,
      title: "Open House",
      description: "Information will be diplayed soon.."
    },
    {
      eventid: 7,
      banner: `${PF}Closing_ceremony.png`,
      title: "Closing ceremony",
      description: "Information will be diplayed soon.."
    }
  ];
  useEffect(() => {
    setEventCount(1);
     //console.log(screen.availWidth,screen.width)
     setScreenWidth(window.screen.width);
      if(process.env.NODE_ENV ==='development'){
        setPublichFolderPath(process.env.REACT_APP_LOCAL_HOST_PUBLIC_FOLDER);
      }
  }, []);

  const handleResize = ()=> {
    setScreenWidth(window.screen.width);
  }
  useEffect(() => {
    if(window.screen.width > 900)
      setFlexState(4);
    else if(window.screen.width > 600)
      setFlexState(6);
    else
      setFlexState(12);
    window.addEventListener('resize', handleResize)
  }, [screenWidth])
  
  
  return (
    <>
      { eventCount===0 ? 
          <div style={{ fontFamily:"Montserrat", fontSize:"Bold", height:"70vh", textAlign:"center", padding:"70px 0",marginTop:"3%"}}>
                 EVENTS WILL BE DISPLAYED HERE...
          </div> :
           <div className={classes.root} style={{width:"100%"}}> 
           <Grid container  style={{padding: '2%', margin:"5% 6% 2% 0%"}} spacing={3}>
          {events.map((event) => {
          return <Grid item key={event.eventid} style={{ height:"100%"}} xs={flexState} >
              <Card style={{height:"350px"}}>
                {
                  event.eventid ===1 ? (
                    <Link to="/events/eventid" style={{textDecoration:"none"}} >
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          alt="EVENT_BANNER"
                          height="100%"
                          width="100%"
                          image={event.banner}
                          title={event.title}
                          />
                          <CardContent style={{backgroundColor:"lightgrey", height:"30vh"}}>
                          <Typography gutterBottom variant="h5" component="h2"  style={{color:"black"}}>
                          {event.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify", padding:"5px"}}>
                          {event.description} 
                          </Typography>
                          </CardContent>
                      </CardActionArea>
                    </Link>
                  ) : (
                     <Link to="/events/eventid" style={{pointerEvents: "none",textDecoration:"none"}}>
                      <CardActionArea>
                          <CardMedia
                          component="img"
                          alt="EVENT_BANNER"
                          height="100%"
                          width="100%"
                          image={event.banner}
                          title={event.title}
                          />
                          <CardContent style={{backgroundColor:"lightgrey", height:"30vh"}}>
                          <Typography gutterBottom variant="h5" component="h2"  style={{color:"black"}}>
                          {event.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify", padding:"5px"}}>
                          {event.description} 
                          </Typography>
                          </CardContent>
                      </CardActionArea>
                      </Link>
                  )
                }
             
              </Card>
          </Grid>})}
          </Grid>
          </div>
      }
    </>
  );
}
