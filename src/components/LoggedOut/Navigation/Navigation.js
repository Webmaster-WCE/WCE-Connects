import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily:'RocknRoll One',
  },
  navitem: {
    fontFamily:'RocknRoll One',
  }
}));

export default function Navigation() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"black", color:"white"}}>
        <Toolbar>
          <Box display="flex" width="100%">
            <Typography variant="h5" className={classes.title}>
              WCE Connects
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Grid item xs={2}>
              <Button onClick={()=>{
                  history.push("/");
                }} style={{backgroundColor:"black", color:"white"}}>
                <Typography variant="subtitle2" className={classes.navitem}>Home</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
            <Button onClick={()=>{
                  history.push("/events");
                }} style={{backgroundColor:"black", color:"white"}}>
              <Typography variant="subtitle2" className={classes.navitem}>Events</Typography>
            </Button>
            </Grid>
            <Grid item xs={2}>
            <Button onClick={()=>{
                  history.push("/register");
                }} style={{backgroundColor:"black", color:"white"}}>
              <Typography variant="subtitle2" className={classes.navitem}>Register</Typography>
            </Button>
            
            </Grid>
            <Grid item xs={2}>
            <Button onClick={()=>{
                  history.push("/login");
                }} style={{backgroundColor:"black", color:"white"}}>
              <Typography variant="subtitle2" className={classes.navitem}>Login</Typography>
            </Button>
            
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
