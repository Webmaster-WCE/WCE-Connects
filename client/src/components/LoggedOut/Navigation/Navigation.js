import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid } from '@material-ui/core';
// import { useHistory } from "react-router-dom";
// import swal from 'sweetalert';
import { Link, useLocation } from 'react-router-dom';
// import {  } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.77rem',
    textAlign: 'left',
    fontFamily:'RocknRoll One',
  },
  navitem: {
    fontFamily:'RocknRoll One',
    // backgroundColor:'black',
    color: 'white',
  },
  active: {
    fontFamily:'RocknRoll One',
    backgroundColor: 'black',
    "&:hover": {
      backgroundColor:"black"
    }
  },
}));

export default function Navigation() {
  const classes = useStyles();
  // const history = useHistory();
  const [activeNav, toggleActiveNav] = useState('/')
  const location = useLocation();
  useEffect(() => {
    toggleActiveNav(location.pathname);
  }, [location]);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#011940", color:"white"}}>
        <Toolbar>
          <Box display="flex" width="100%">
            <Link to="/" style={{textDecoration:"none", color: "white"}}>
              <Typography variant="h1" className={classes.title}>
                WCE Connects
              </Typography>
            </Link>
          </Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            >
            <Grid item xs={2}>
              <Link to="/" style={{textDecoration:"none"}}>
                <Button className={activeNav==='/' ? classes.active : classes.navitem}>
                  <Typography variant="subtitle2" className={classes.navitem}>Home</Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/gallery" style={{textDecoration:"none"}}>
                <Button  className={activeNav.startsWith('/gallery') ? classes.active : classes.navitem}>
                  <Typography variant="subtitle2" className={classes.navitem}>Gallery</Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/events" style={{textDecoration:"none"}}>
                <Button  className={activeNav.startsWith('/events') ? classes.active : classes.navitem}>
                  <Typography variant="subtitle2" className={classes.navitem}>Events</Typography>
                </Button>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/activities" style={{textDecoration:"none"}}>
                <Button  className={activeNav.startsWith('/activities') ? classes.active : classes.navitem}>
                  <Typography variant="subtitle2" className={classes.navitem}>Alumni Activities</Typography>
                </Button>
              </Link>
            </Grid>
            {/* Portal Login And Registration code below... */}
            {/* <Grid item xs={2}>
            <Button onClick={()=>{
              // history.push("/register");
              swal("Portal is opening soon...")
            }} style={{backgroundColor:"black", color:"white"}}>
            <Typography variant="subtitle2" className={classes.navitem}>Register</Typography>
            </Button>
            
            </Grid>
            <Grid item xs={2}>
            <Button onClick={()=>{
              // history.push("/login");
              swal("Portal is opening soon...")
            }} style={{backgroundColor:"black", color:"white"}}>
            <Typography variant="subtitle2" className={classes.navitem}>Login</Typography>
            </Button>
            
          </Grid> */}
          </Grid>
          {/* </Router> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
