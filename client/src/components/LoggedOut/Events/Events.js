import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile} from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    flexGrow:1,
    padding: "2%",
    // maxWidth: 345,
  },
});

export default function Events() {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [eventCount, setEventCount] = useState(1);
  const events = [
    {
      eventid: 1,
      banner: `${PF}event_banner.jpg`,
      title: "Platinum Jubilee Meet 2021-22",
      description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus."
    },
    // {
    //   eventid: 2,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Hackathon 2021",
    //   description: "WCE Hackathon'21 will be a 48-hours long developing venture where participants will innovate, strategize, code, and beat the odds with some ingenious solutions to the most sought real-life problems."
    // },
    // {
    //   eventid: 3,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Platinum Jubilee Meet 2021-22",
    //   description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus."
    // },
    // {
    //   eventid: 4,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Hackathon 2021",
    //   description: "WCE Hackathon'21 will be a 48-hours long developing venture where participants will innovate, strategize, code, and beat the odds with some ingenious solutions to the most sought real-life problems."
    // },
    // {
    //   eventid: 2,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Hackathon 2021",
    //   description: "WCE Hackathon'21 will be a 48-hours long developing venture where participants will innovate, strategize, code, and beat the odds with some ingenious solutions to the most sought real-life problems."
    // },
    // {
    //   eventid: 3,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Platinum Jubilee Meet 2021-22",
    //   description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus."
    // },
    // {
    //   eventid: 4,
    //   banner: `${PF}event_banner.jpg`,
    //   title: "Hackathon 2021",
    //   description: "WCE Hackathon'21 will be a 48-hours long developing venture where participants will innovate, strategize, code, and beat the odds with some ingenious solutions to the most sought real-life problems."
    // }
  ];
  useEffect(() => {
    setEventCount(1);
  }, [eventCount]);
  
  return (
    <>
      { eventCount===0 ? 
          <div style={{ fontFamily:"Montserrat", fontSize:"Bold", height:"70vh", textAlign:"center", padding:"70px 0",marginTop:"3%"}}>
                 EVENTS WILL BE DISPLAYED HERE...
          </div> :
           <div className={classes.root}> 
           <GridList cols={3} style={{padding: '2%', margin:"5% 6% 2% 6%"}}>
          {events.map((event) => {
          return <GridListTile  key={event.eventid} style={{ height:"100%",padding: "2%"}}>
              <Card style={{height:"300px",}}>
              <Link to="/events/eventid" style={{textDecoration:"none"}}>
              <CardActionArea>
                  <CardMedia
                  component="img"
                  alt="EVENT_BANNER"
                  height="100%"
                  width="100%"
                  image={event.banner}
                  title={event.title}
                  />
                  <CardContent style={{backgroundColor:"lightgrey", height:"20vh"}}>
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
          </GridListTile>})}
          </GridList>
          </div>
      }
    </>
  );
}
