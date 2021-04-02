import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
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
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"black", color:"white"}}>
        <Toolbar>
          <Box display="flex" width="100%">
            <Typography variant="h5" className={classes.title}>
              WCE Network
            </Typography>
          </Box>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            <Grid item xs={2}>
              <Typography variant="h6" >Home</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" >Donate</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" >Sign Up</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Login</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
