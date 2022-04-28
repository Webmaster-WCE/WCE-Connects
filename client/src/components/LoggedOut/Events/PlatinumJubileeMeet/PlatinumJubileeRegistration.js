import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import swal from 'sweetalert';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundColor: 'lightgrey',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    height: '120vh',
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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


export default function PlatinumJubileeRegistration() {
  const classes = useStyles();
  // const history= useHistory();
  const [helperText, setHelperText] = useState('');
  const [programme, setProgramme] = useState('');
  const [branch, setBranch] = useState('');

  const branchChange = (event) => {
    setBranch(event.target.value);
  };
  const programmeChange = (event) => {
    setProgramme(event.target.value);
  };


  function handleSubmit(e) {
    e.preventDefault();
    var form = document.getElementById('signup_form');
    var data = new FormData(form);
    const entries = data.entries();
    const userData = Object.fromEntries(entries);
    let post = false;
    let currentYear = new Date().getFullYear();
    setHelperText("");
    
    userData.branch = branch;
    userData.programme = programme;
    if (currentYear - userData.passout_year > 0) {
      userData.user_role = "alumni";
    }
    else {
      userData.user_role = "student";
    }
    if (branch === "") {
      setHelperText("Please Select Branch");
    }
    else if (programme === "") {
      setHelperText("Please Select Programme");
    }
    else {
      post = true;
    }

    if (post === true) {
      post = false;
      // axios.post('http://localhost:5000/auth/register', userData)
      // .then(res => { 
      //   console.log(res);
      //   if(res.status === 202)
      //   {
      swal("Registered Successfully");
      //   }
      // }).catch(err => {
      //   if(res.status !== 202)
      //   {  
      //       swal("Error while registering...\n"+err.message)
      //       new Promise(r => setTimeout(r, 10000));
      //       history.push("/events/eventid");
      //    });
    }
  }

  return (
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
              style={{ width: '250px', marginRight: '15px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              style={{ width: '250px' }}
              name="last_name"
              label="Last Name"
              type="text"
              id="last_name"
            />
          </div>
        </div>
        <div style={{ width: '515px', alignItems: "right" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passout_year"
            label="Passout Year"
            name="passout_year"
          />
          <FormControl className={classes.formControl} style={{ width: "50ch" }}>
            <InputLabel>Select Branch</InputLabel>
            <Select
              value={branch}
              onChange={branchChange}
              label="Select Branch"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="cse">Computer Science and Engineering</MenuItem>
              <MenuItem value="it">Information Technology</MenuItem>
              <MenuItem value="mech">Mechanical Engineering</MenuItem>
              <MenuItem value="civil">Civil Engineering</MenuItem>
              <MenuItem value="electrical">Electrical Engineering</MenuItem>
              <MenuItem value="electronics">Electronics Engineering</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} style={{ width: "50ch" }}>
            <InputLabel>Select Programme</InputLabel>
            <Select
              value={programme}
              onChange={programmeChange}
              label="Select Branch"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ug">UG</MenuItem>
              <MenuItem value="pg">PG</MenuItem>
              <MenuItem value="phd">PhD</MenuItem>
              <MenuItem value="diploma">Diploma</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="current_post"
            label="Current Post (Ex. Software Engineer)"
            name="current_post"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="current_organization"
            label="Current Organization/Company/Institute"
            name="current_organization"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label="City Location"
            name="city"
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
            fullWidth
            id="alternate_email"
            label="Alternate Email Address (if any)"
            name="alternate_email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="mobile"
            label="Mobile No"
            type="tel"
            id="mobile"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="alternate_mobile"
            label="Alternate Mobile No (if any)"
            type="tel"
            id="alternate_mobile"
          />
        </div>
        <div style={{ color: "red", fontSize: "medium" }}>
          {helperText}
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{ background: 'black' }}
          className={classes.submit}
        >
          <div style={{ color: "white" }}>Register</div>
        </Button>
      </form>
    </div>
  );
}