import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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
  // const {isRegistered, setIsSubmitted} = props;
  const classes = useStyles();
  const history = useHistory();
  const [helperText, setHelperText] = useState('');
  const [programme, setProgramme] = useState('');
  const [branch, setBranch] = useState('');
  const [state, setState] = useState({
    spoc: false,
    talks_and_meets: false,
    employability_assistance: false,
    mentorship: false,
    portal_for_career_opportunities: false,
    curriculum_revamping: false,
    faculty_alumni_workshops: false,
    annual_alumni_meet: false,
    sponsored_projects: false,
    awards: false,
    modernization_of_labs: false,
    industrial_visits: false,
    internships: false,
    testing_and_consultancy: false,
    involvement_in_evolution_process: false,
    icc: false,
    industry_institute_interaction: false,
    soft_skill_training: false,
    member_academic_board: false,
    helping_student_activities: false,
    felicitations_of_distinguished_alumni: false
  });

  
  const { spoc,
    talks_and_meets,
    employability_assistance,
    mentorship,
    portal_for_career_opportunities,
    curriculum_revamping,
    faculty_alumni_workshops,
    annual_alumni_meet,
    sponsored_projects,
    awards,
    modernization_of_labs,
    industrial_visits,
    internships,
    testing_and_consultancy,
    involvement_in_evolution_process,
    icc,
    industry_institute_interaction,
    soft_skill_training,
    member_academic_board,
    helping_student_activities,
    felicitations_of_distinguished_alumni } = state;

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
      console.log(userData)
      axios.post('http://localhost:5000/auth/register', userData)
      .then(res => { 
        // console.log(res.data.message);
        if(res.status === 202)
        {
          swal("Submitted Successfully");
        }
      }).catch(err => {
          console.log(err.response);
          swal("Error while submitting...\n"+err.response.data)
      });
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
                  control={<Checkbox checked={spoc} onChange={handleChange} value="true" name="spoc" />}
                  label={`Serve as the SPOC for Alumni & Institute`}
                />
                <FormControlLabel
                  control={<Checkbox checked={talks_and_meets} onChange={handleChange} value="true" name="talks_and_meets" />}
                  label="Talks and Meets"
                />
                <FormControlLabel
                  control={<Checkbox checked={employability_assistance} onChange={handleChange} value="true" name="employability_assistance" />}
                  label="Employability Assistance"
                />
                <FormControlLabel
                  control={<Checkbox checked={mentorship} onChange={handleChange} value="true" name="mentorship" />}
                  label="Mentorship"
                />
                <FormControlLabel
                  control={<Checkbox checked={portal_for_career_opportunities} onChange={handleChange} value="true" name="portal_for_career_opportunities" />}
                  label="Portal for Career Opportunities"
                />
                <FormControlLabel
                  control={<Checkbox checked={curriculum_revamping} onChange={handleChange} value="true" name="curriculum_revamping" />}
                  label="Curriculum Revamping"
                />
                <FormControlLabel
                  control={<Checkbox checked={faculty_alumni_workshops} onChange={handleChange} value="true" name="faculty_alumni_workshops" />}
                  label="Faculty Alumni Workshops"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <FormControlLabel
                  control={<Checkbox checked={annual_alumni_meet} onChange={handleChange} value="true" name="annual_alumni_meet" />}
                  label="Annual Alumni Meet"
                />
                <FormControlLabel
                  control={<Checkbox checked={sponsored_projects} onChange={handleChange} value="true" name="sponsored_projects" />}
                  label="Sponsored Projects"
                />
                <FormControlLabel
                  control={<Checkbox checked={awards} onChange={handleChange} value="true" name="awards" />}
                  label="Awards"
                />
                <FormControlLabel
                  control={<Checkbox checked={modernization_of_labs} onChange={handleChange} value="true" name="modernization_of_labs" />}
                  label="Modernization of Labs"
                />
                <FormControlLabel
                  control={<Checkbox checked={industrial_visits} onChange={handleChange} value="true" name="industrial_visits" />}
                  label="Industrial Visits"
                />
                <FormControlLabel
                  control={<Checkbox checked={internships} onChange={handleChange} value="true" name="internships" />}
                  label="Internships"
                />
                <FormControlLabel
                  control={<Checkbox checked={testing_and_consultancy} onChange={handleChange} value="true" name="testing_and_consultancy" />}
                  label="Testing and Consultancy"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>

                <FormControlLabel
                  control={<Checkbox checked={involvement_in_evolution_process} onChange={handleChange} value="true" name="involvement_in_evolution_process" />}
                  label=" Involvement in Evaluation Process"
                />
                <FormControlLabel
                  control={<Checkbox checked={icc} onChange={handleChange} value="true" name="icc" />}
                  label="Industrial Consultancy Committee (ICC)"
                />
                <FormControlLabel
                  control={<Checkbox checked={industry_institute_interaction} onChange={handleChange} value="true" name="industry_institute_interaction" />}
                  label="Industry Institute Interaction"
                />
                <FormControlLabel
                  control={<Checkbox checked={soft_skill_training} onChange={handleChange} value="true" name="soft_skill_training" />}
                  label="Soft Skill Training"
                />
                <FormControlLabel
                  control={<Checkbox checked={member_academic_board} onChange={handleChange} value="true" name="member_academic_board" />}
                  label="Member Academic Board / Board of Studies"
                />
                <FormControlLabel
                  control={<Checkbox checked={helping_student_activities} onChange={handleChange} value="true" name="helping_student_activities" />}
                  label="Helping Student Activities"
                />
                <FormControlLabel
                  control={<Checkbox checked={felicitations_of_distinguished_alumni} onChange={handleChange} value="true" name="felicitations_of_distinguished_alumni" />}
                  label="Felicitations of Distinguished Alumni"
                />
              </div>
            </FormGroup>
          </FormControl>
        </div>
        <div>
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
          </div>
          <div style={{ width: '515px', alignItems: "right" }}>
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
            margin="normal"
            label="Brief your idea about Conduction/Implementation of the Activity"
            multiline
            fullWidth
            rows={5}
            variant="outlined"
            id="idea_description"
            name="idea_description"
          />
          </div>
        <div style={{ color: "red", fontSize: "medium" }}>
          {helperText}
        </div>
        <div style={{ display : 'flex',  }}>
          <Button
            type="submit"
            variant="contained"
            style={{ background: 'black' }}
            className={classes.submit}
            >
            <div style={{ color: "white" }}>Submit</div>
          </Button>
          <Button
            style={{ margin:"24px 10px 16px", background: 'black'}}
            variant="contained"
            onClick = { () => {
              history.push("/activities")
            }}
            >
            <div style={{ color: "white" }}>Cancel</div>
          </Button>
        </div>
      </form>
    </div>
  );
}