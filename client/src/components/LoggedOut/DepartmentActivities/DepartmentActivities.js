import {  makeStyles } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
   paper: {
    marginTop:"7%",
    alignItems: 'center',
    padding:"1%",
  },
  gridpaper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardroot: {
   border:"1px solid lightgrey"
  },
}));


export const DepartmentActivities = () => {
    const classes = useStyles();
    const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.paper}>
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>Department Activities</p>
            </div>
            <div style={{ fontFamily: "Montserrat" }}>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "2% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <h3 style={{whiteSpace:'pre-line',textAlign:'center'}}>
                       Select Department
                    </h3>
                    <div className={classes.root}>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Secondary
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </div>
                </div>
            </div>


            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.cardroot}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard sajdshajsdajsdkahksdhkahsdks ahdsk
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Share
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
