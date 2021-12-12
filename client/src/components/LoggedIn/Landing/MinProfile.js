import React, {useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {AuthContext} from '../../../context/AuthContext';
import axios from 'axios';

//styling used
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
    maxWidth: 345,
    position:"fixed",
    scroll:"no-scroll",
    marginTop: "5%"
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
  const { token } = useContext(AuthContext);
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    async function getID(){
      const res = await axios.get("http://localhost:5000/users/getid/", {
        headers: {'x-auth-token':token}
      })
      setCurrentUserId(res.data);
    }
    getID();
  },[token]);

  useEffect(() => {
    async function fetchUser(){
        
      if(currentUserId)
      {
        const res = await axios.get("http://localhost:5000/users/"+currentUserId, {
          headers: {'x-auth-token':token}
        });
        setCurrentUser(res.data);
      }
    }
    fetchUser();
  },[currentUserId, token]);

  return (
    <>
    {currentUser? <Card className={classes.root}>
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
          justifyContent="center"
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
              {currentUser.info.first_name+" "+currentUser.info.last_name}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              component="p"
            >
              {currentUser.info.current_post+" at "+currentUser.info.current_organization}
            </Typography>  
          </Grid>
        </Grid>
        <div style={{display:"flex",justifyContent:"center", marginTop:"4%"}}>
          <div style={{backgroundColor:'lightgrey', borderRadius:"50%", padding:"10px", fontFamily:"Montserrat"}}>
            {currentUser.info.user_role==="alumni"?"Alumni":null}
            {currentUser.info.user_role==="student"?"Student":null}
            {currentUser.info.user_role==="teacher"?"Professor":null}
          </div>
        </div>
      </CardContent>
    </Card>: null}
    </>
  );
}
