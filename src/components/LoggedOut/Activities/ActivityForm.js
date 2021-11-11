import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import swal from 'sweetalert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  checkActivity: {
    display: 'flex',
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



export default function ActivityForm() {
  const classes = useStyles();
  // const history = useHistory();
  const [helperText, setHelperText] = useState('');
  const [programme, setProgramme] = useState('');
  const [branch, setBranch] = useState('');
  const [state, setState] = useState({
    Serve_as_the_SPOC_for_Alumni_and_Institute: false,
    Talks_and_Meets: false,
    Employability_Assistance: false,
    Mentorship: false,
    Portal_for_Career_Opportunities: false,
    Curriculum_Revamping: false,
    Faculty_Alumni_Workshops: false,
    Annual_Alumni_Meet: false,
    Sponsored_Projects: false,
    Scholarships: false,
    Modernization_of_Labs: false,
    Industrial_Visits: false,
    Internships: false,
    Testing_and_Consultancy: false,
    Involvement_in_Evaluation_Process: false,
    Industrial_Consultancy_Committee_ICC: false,
    Industry_Institute_Interaction: false,
    Soft_Skill_Training: false,
    Member_Academic_Board_Board_of_Studies: false,
    Helping_Student_Activities: false,
    Felicitations_of_Distinguished_Alumni: false
  });

  
  const { Serve_as_the_SPOC_for_Alumni_and_Institute,
    Talks_and_Meets,
    Employability_Assistance,
    Mentorship,
    Portal_for_Career_Opportunities,
    Curriculum_Revamping,
    Faculty_Alumni_Workshops,
    Annual_Alumni_Meet,
    Sponsored_Projects,
    Scholarships,
    Modernization_of_Labs,
    Industrial_Visits,
    Internships,
    Testing_and_Consultancy,
    Involvement_in_Evaluation_Process,
    Industrial_Consultancy_Committee_ICC,
    Industry_Institute_Interaction,
    Soft_Skill_Training,
    Member_Academic_Board_Board_of_Studies,
    Helping_Student_Activities,
    Felicitations_of_Distinguished_Alumni } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
    
    userData.branch = branch;
    userData.programme = programme;
    if (currentYear - userData.passout_year > 0) {
      userData.user_role = "alumni";
    }
    else {
      userData.user_role = "student";
    }
    setHelperText("");
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
      //   axios.post('http://localhost:5000/auth/register', userData)
      //   .then(res => { 
      //     console.log(res);
      //     if(res.status === 202)
      //     {
            swal("Submitted Successfully");
      //     }
      //   }).catch(err => {
      //   if(res.status !== 202)
      //   {
      //      swal("Error while submitting...\n"+err.message)
      //   });
    }
  }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Activity Form
      </Typography>
      <form className={classes.form} name="signup_form" id="signup_form" onSubmit={handleSubmit}>
        <div className={classes.checkActivity}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select all the activities that you want to contribute...</FormLabel>
            <FormGroup style={{ display: 'flex', flexDirection: 'row', padding: "0px 80px 0px 160px" }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <FormControlLabel
                  control={<Checkbox checked={Serve_as_the_SPOC_for_Alumni_and_Institute} onChange={handleChange} value="true" name="Serve_as_the_SPOC_for_Alumni_and_Institute" />}
                  label={`Serve as the SPOC for Alumni & Institute`}
                />
                <FormControlLabel
                  control={<Checkbox checked={Talks_and_Meets} onChange={handleChange} value="true" name="Talks_and_Meets" />}
                  label="Talks and Meets"
                />
                <FormControlLabel
                  control={<Checkbox checked={Employability_Assistance} onChange={handleChange} value="true" name="Employability_Assistance" />}
                  label="Employability Assistance"
                />
                <FormControlLabel
                  control={<Checkbox checked={Mentorship} onChange={handleChange} value="true" name="Mentorship" />}
                  label="Mentorship"
                />
                <FormControlLabel
                  control={<Checkbox checked={Portal_for_Career_Opportunities} onChange={handleChange} value="true" name="Portal_for_Career_Opportunities" />}
                  label="Portal for Career Opportunities"
                />
                <FormControlLabel
                  control={<Checkbox checked={Curriculum_Revamping} onChange={handleChange} value="true" name="Curriculum_Revamping" />}
                  label="Curriculum Revamping"
                />
                <FormControlLabel
                  control={<Checkbox checked={Faculty_Alumni_Workshops} onChange={handleChange} value="true" name="Faculty_Alumni_Workshops" />}
                  label="Faculty Alumni Workshops"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel
                  control={<Checkbox checked={Annual_Alumni_Meet} onChange={handleChange} value="true" name="Annual_Alumni_Meet" />}
                  label="Annual Alumni Meet"
                />
                <FormControlLabel
                  control={<Checkbox checked={Sponsored_Projects} onChange={handleChange} value="true" name="Sponsored_Projects" />}
                  label="Sponsored Projects"
                />
                <FormControlLabel
                  control={<Checkbox checked={Scholarships} onChange={handleChange} value="true" name="Scholarships" />}
                  label="Scholarships"
                />
                <FormControlLabel
                  control={<Checkbox checked={Modernization_of_Labs} onChange={handleChange} value="true" name="Modernization_of_Labs" />}
                  label="Modernization of Labs"
                />
                <FormControlLabel
                  control={<Checkbox checked={Industrial_Visits} onChange={handleChange} value="true" name="Industrial_Visits" />}
                  label="Industrial Visits"
                />
                <FormControlLabel
                  control={<Checkbox checked={Internships} onChange={handleChange} value="true" name="Internships" />}
                  label="Internships"
                />
                <FormControlLabel
                  control={<Checkbox checked={Testing_and_Consultancy} onChange={handleChange} value="true" name="Testing_and_Consultancy" />}
                  label="Testing and Consultancy"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <FormControlLabel
                  control={<Checkbox checked={Involvement_in_Evaluation_Process} onChange={handleChange} value="true" name="Involvement_in_Evaluation_Process" />}
                  label=" Involvement in Evaluation Process"
                />
                <FormControlLabel
                  control={<Checkbox checked={Industrial_Consultancy_Committee_ICC} onChange={handleChange} value="true" name="Industrial_Consultancy_Committee_ICC" />}
                  label="Industrial Consultancy Committee (ICC)"
                />
                <FormControlLabel
                  control={<Checkbox checked={Industry_Institute_Interaction} onChange={handleChange} value="true" name="Industry_Institute_Interaction" />}
                  label="Industry Institute Interaction"
                />
                <FormControlLabel
                  control={<Checkbox checked={Soft_Skill_Training} onChange={handleChange} value="true" name="Soft_Skill_Training" />}
                  label="Soft Skill Training"
                />
                <FormControlLabel
                  control={<Checkbox checked={Member_Academic_Board_Board_of_Studies} onChange={handleChange} value="true" name="Member_Academic_Board_Board_of_Studies" />}
                  label="Member Academic Board / Board of Studies"
                />
                <FormControlLabel
                  control={<Checkbox checked={Helping_Student_Activities} onChange={handleChange} value="true" name="Helping_Student_Activities" />}
                  label="Helping Student Activities"
                />
                <FormControlLabel
                  control={<Checkbox checked={Felicitations_of_Distinguished_Alumni} onChange={handleChange} value="true" name="Felicitations_of_Distinguished_Alumni" />}
                  label="Felicitations of Distinguished Alumni"
                />
              </div>
            </FormGroup>
          </FormControl>
        </div>
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
            id="area_of_expertise"
            label="Area Of Expertise (Ex. Machine Learning, CAD Designing)"
            name="area_of_expertise"
          />
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
          <TextField
            margin="normal"
            label="Brief your idea about Conduction/Implementation of the Activity"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
            id="idea_description"
            name="idea_description"
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
          <div style={{ color: "white" }}>Submit</div>
        </Button>
      </form>
    </div>
  );
}