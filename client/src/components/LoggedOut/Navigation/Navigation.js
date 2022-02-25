import React, {useState, useEffect, useRef} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import {
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
 import swal from 'sweetalert';
import { Link, useLocation } from 'react-router-dom';
// import {  } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';
import EventIcon from '@material-ui/icons/Event';

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import PersonAddIcon from '@material-ui/icons/PersonAdd';


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

const useOutsideAlerter = (ref,setAnchor) =>  {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //alert("You clicked outside of me!");
          setAnchor(null)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

export default function Navigation() {
  const classes = useStyles();
  // const history = useHistory();
  const [activeNav, toggleActiveNav] = useState('/')
  const location = useLocation();
  useEffect(() => {
    toggleActiveNav(location.pathname);
  }, [location]);

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };


  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef,setAnchor);
  return (
    <div className={classes.root} >
      <AppBar position="fixed" style={{backgroundColor:"#011940", color:"white"}}>
        <Toolbar>
          <Box display="flex" width="100%">
            <Link to="/" style={{textDecoration:"none", color: "white"}}>
              <Typography variant="h1" className={classes.title}>
                WCE Connects
              </Typography>
            </Link>
          </Box>


          {
            isMobile ? (
              <>
                <IconButton
                  color="primary"
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                  ref={wrapperRef}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchor}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                >
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/gallery"
                  >
                    <ListItemIcon>
                      <ImageIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Gallery </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/events"
                  >
                    <ListItemIcon>
                      <EventIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Events</Typography>
                  </MenuItem>

                   <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/donorpackage"
                  >
                    <ListItemIcon>
                      <BookmarksIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Donor Package </Typography>
                  </MenuItem>

                  <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/activities"
                  >
                    <ListItemIcon>
                      <BookmarksIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Alumni Activities </Typography>
                  </MenuItem>


                   {/* <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/register"
                  >
                    <ListItemIcon>
                      <PersonAddIcon />
                    </ListItemIcon>
                    <Typography variant="h6">Register </Typography>
                  </MenuItem>
                   <MenuItem
                    onClick={() => setAnchor(null)}
                    component={Link}
                    to="/login"
                  >
                    <ListItemIcon>
                      <EventIcon />
                    </ListItemIcon>
                    <Typography variant="h6"> Login </Typography>
                  </MenuItem> */}


                </Menu>
              </>
            ) : (
              <div style={{ marginRight: "2rem",flexDirection:'row',alignItems:"center",justifyContent:"flex-end" ,display:'flex'}}>
                <div>
                    <Link to="/" style={{textDecoration:"none"}}>
                      <Button className={activeNav==='/' ? classes.active : classes.navitem}>
                        <Typography variant="subtitle2" className={classes.navitem}>Home</Typography>
                      </Button>
                    </Link>
                </div>
                <div>
                  <Link to="/gallery" style={{textDecoration:"none"}}>
                    <Button  className={activeNav.startsWith('/gallery') ? classes.active : classes.navitem}>
                      <Typography variant="subtitle2" className={classes.navitem}>Gallery</Typography>
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/events" style={{textDecoration:"none"}}>
                    <Button  className={activeNav.startsWith('/events') ? classes.active : classes.navitem}>
                      <Typography variant="subtitle2" className={classes.navitem}>Events</Typography>
                    </Button>
                  </Link>
                </div>

                <div>
                  <Link to="/donorpackage" style={{textDecoration:"none"}}>
                    <Button  className={activeNav.startsWith('/donorpackage') ? classes.active : classes.navitem}>
                      <Typography variant="subtitle2" className={classes.navitem}>Donor Packages</Typography>
                    </Button>
                  </Link>
                </div>

                <div>
                    <Link to="/activities" style={{textDecoration:"none"}}>
                      <Button  className={activeNav.startsWith('/activities') ? classes.active : classes.navitem}>
                        <Typography variant="subtitle2" className={classes.navitem}>Alumni Activities</Typography>
                      </Button>
                    </Link>
                </div>
                {/* <div>
                  <Link to="/register" style={{textDecoration:"none"}}>
                    <Button onClick={()=>{
                      // history.push("/register");
                      //swal("Portal is opening soon...")
                    }} className={activeNav.startsWith('/register') ? classes.active : classes.navitem}>
                      <Typography variant="subtitle2" className={classes.navitem}>Register</Typography>
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/login" style={{textDecoration:"none"}}>
                    <Button onClick={()=>{
                    // history.push("/login");
                    //swal("Portal is opening soon...")
                    }} className={activeNav.startsWith('/login') ? classes.active : classes.navitem}>
                      <Typography variant="subtitle2" className={classes.navitem}>Login</Typography>
                    </Button>
                  </Link>
                </div> */}
                  
              </div>
            )
          }



          
          {/* </Router> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
