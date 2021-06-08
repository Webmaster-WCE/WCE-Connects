import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
// import HighlighedInformation from '../../Shared/HighlightedInformation';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/home">
        WCE Connects
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundColor: 'lightgrey',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'top',
    backgroundSize:'cover',
    /* color: white; */
    /* opacity: 40%; */
    /* margin-top: 10px; */
    // background-position-y: 20px;
    height: '100vh',

  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));



export default function Register() {
  const classes = useStyles();
  const history= useHistory();
  const [value, setValue] = useState('');
  const [error, setError] = useState(true);
  const [helperText, setHelperText] = useState('');
  // const [post, setPost] = useState();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  function handleSubmit(e) {
    
    e.preventDefault();
    var form = document.getElementById('signup_form');
    var data = new FormData(form);
    const entries = data.entries();
    const userData = Object.fromEntries(entries);
    var post=false;
  
    if (value === 'student') {
     if(!userData.email.includes('walchandsangli.ac.in'))
      {
        setHelperText('Use college email ID');
        setError(true);
        post=false;
      }
      else
      {
        setError(false);
        post=true;
      }
    } else if (value === 'teacher') {
      if(!userData.email.includes('walchandsangli.ac.in'))
      {
        setHelperText('Use college email ID');
        setError(true);
        post=false;
      }
      else
      {
        setError(false);
        post=true;
      }
    } else if (value === 'alumni') {
      setError(false);
      post=true;
    }else {
      setHelperText('Please select an option.');
      setError(true);
      post=false;
    }

    if(post===true && error===false) 
    {
      post=false;
      console.log(userData);
      axios.post('http://localhost:5000/auth/register', userData)
      .then(res => { 
        if(res.status === 202)
        {
          history.push("/verify"); 
        }
      }).catch(res => {
        if(res.status !== 202)
        {
          if( res.status === 404)
          {
            swal("Sorry but currently our server is sleeping...\nTry after some time...");
          }
          else
          {
            swal("Already Registered with this Email ID")
            .then((value) => {
              if(value)
              {
                history.push("/register");
              }
            }
            );
          }
        }
      });
    }

}

  return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} name="signup_form" id="signup_form" onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
            <div className="p-2 flex-fill">
            <TextField
              variant="outlined"
              margin="normal"
              required
              autoFocus
              name="first_name"
              label="First Name"
              type="text"
              id="first_name"
              style={{width:'260px', marginRight:'42px'}}
            />
            {/* </div>
            <div className="p-2"> */}
            <TextField
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              name="last_name"
              label="Last Name"
              type="text"
              id="last_name"
              style={{width:'260px'}}
            />
            </div>
        </div>
          
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">You are ...</FormLabel>
          <RadioGroup aria-label="role" name="user_role" value={value} onChange={handleRadioChange} row>
            <FormControlLabel value="student" control={<Radio />} label="Student" />
            <FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
            <FormControlLabel value="alumni" control={<Radio />} label="Alumni" />
          </RadioGroup>
          
        </FormControl>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="current_post"
              label="Current Post (Ex. Software Engineer, Student)"
              name="current_post"
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="current_organization"
              label="Current Organization/ College Name"
              name="current_organization"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <div style={{color:"red", fontSize:"medium"}}>
                {helperText}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: 'black' }}
              className={classes.submit}
              // onClick={}
            >
              
              <div style={{color:"white"}}>Register</div>
            </Button>
            </form>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item> */}
                <Link to="/login" variant="body2" style={{textDecoration: 'none', fontSize:'15px'}}>
                  Already have an account? Login
                </Link>
              {/* </Grid>
            </Grid> */}
            <Box mt={5}>
              <Copyright />
            </Box>
          
        </div>
      </Grid>
    </Grid>
  );
}