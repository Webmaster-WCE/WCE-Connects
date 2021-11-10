import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Events() {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div style={{padding: '15px', margin:"5px 100px 5px 100px"}}>
        <a href="/events/eventid">
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="WCE Hackathon"
            height="100%"
            width="100%"
            image={PF+"/event_banner.png"}
            title="WCE Hackathon"
            />
            <CardContent style={{backgroundColor:"lightgrey"}}>
            <Typography gutterBottom variant="h5" component="h2">
            WCE Hackathon
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"justify", padding:"5px"}}>
            Moving ahead with our efforts towards promoting innovation and start-up culture across the country , WCE ACM Student Chapter presents WCE Hackathon 2022
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        </a>
    </div>
  );
}

// import React from 'react';

// export default function Events(){
//     return(
//         <>
//             <div style={{ fontFamily:"Montserrat", fontSize:"Bold", height:"70vh", textAlign:"center", padding:"70px 0"}}>
//                 EVENTS WILL BE DISPLAYED HERE...
//             </div>

//         </>
//     );
// }