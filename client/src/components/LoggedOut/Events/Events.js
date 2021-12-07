import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Events() {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [eventCount, setEventCount] = useState(1);
  
  useEffect(() => {
    setEventCount(1);
  }, [eventCount]);
  
  return (
    <>
      { eventCount===0 ? 
          <div style={{ fontFamily:"Montserrat", fontSize:"Bold", height:"70vh", textAlign:"center", padding:"70px 0"}}>
                 EVENTS WILL BE DISPLAYED HERE...
          </div> :
          <div style={{padding: '15px', margin:"5px 100px 5px 100px"}}>
            <Link to="/events/eventid" style={{textDecoration:"none"}}>
              <Card className={classes.root}>
              <CardActionArea>
                  <CardMedia
                  component="img"
                  alt="EVENT_BANNER"
                  height="100%"
                  width="100%"
                  image={PF+"/event_banner.jpg"}
                  title="Platinum Jubilee Meet 2021-22"
                  />
                  <CardContent style={{backgroundColor:"lightgrey"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                  Platinum Jubilee Meet 2021-22
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify", padding:"5px"}}>
                  The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus. 
                  </Typography>
                  </CardContent>
              </CardActionArea>
              </Card>
            </Link>
          </div>
      }
    </>
  );
}
