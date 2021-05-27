import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


//styling used
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

//Exported Min Profile Component
export default function MinProfile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Button 
        href="/u/profile/userid/edit" 
        color="primary" 
        style={{
          justifyContent:"flex-end", 
          display: "flex", 
          backgroundColor:'lightgrey', 
          color: 'black'
        }}
      >
        Edit Profile
      </Button>  
      <CardContent>
        <Grid
          container
          direction="row"
          spacing={1}
          justify="center"
        >
          <Grid 
            item 
            style={{
              display:"flex", 
              flexDirection:"column", 
              justifyContent:"center"
              }}
          >
            <Avatar/>
          </Grid>
          <Grid item>
            <Typography 
              style={{
                fontSize:"large", 
                fontFamily:"Open Sans"
              }}
            >
              Mark Zukerberg
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              component="p"
            >
              CEO at Facebook
            </Typography>  
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
