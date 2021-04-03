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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/home">
        WCE Network
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
}));



export default function Login(){
  const classes = useStyles();
  const history= useHistory();
  
  function onSubmit(e) {
    
    e.preventDefault();
    var form = document.getElementById('signup_form');
    var data = new FormData(form);
    const entries = data.entries();
    const userData = Object.fromEntries(entries);
    
    axios.post('http://localhost:5000/user/', userData)
    .then(res => { 
      if(res.status === 200)
      {
        history.push("/home"); 
      }
    }).catch(res => {
        if(res.status !== 200)
        {
          if( res.status === 404)
          {
            swal("Sorry but currently our server is sleeping...\nTry after some time...");
          }
          else
          {
            swal("We are facing problem...\nBackend Guy please wake up...")
              .then((value) => {
                if(value)
                {
                  history.push("/login");
                }
              }
            );
          }
        }
    });

}

  return (
    
    <Grid container component="main" className={classes.root}>
        {console.log("In Login")}
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} name="signup_form" id="signup_form" onSubmit={onSubmit}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: 'black' }}
              className={classes.submit}
              // onClick={}
            >
              
              <div style={{color:"white"}}>LogIn</div>
            </Button>
            </form>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item> */}
                <Link to="/register" variant="body2" style={{textDecoration: 'none', fontSize:'15px'}}>
                  Don't have an account? Register
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