import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import MinProfile from './MinProfile';
import CreatePost from './CreatePost';
import Feed from '../Feed/Feed';
import Notification from '../Notification/Notification';
// import Events from '../../LoggedOut/Events/Events';

export const Landing = () => {
    return (
        <div>
            <Grid container spacing={2} justify="center" style={{margin:"10px"}}>
                <Grid item container direction="column" xs={12} sm={3} spacing={2}>
                    <Grid item>
                    {/* <Paper style={{ height: "29vh", background: "orange" }} /> */}
                    <MinProfile />
                    </Grid>
                    <Grid item>
                    {/* <Paper style={{ height: "49vh", background: "green" }} /> */}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper style={{ paddingBottom: "5%", background: "lightgrey" }} >
                        <CreatePost/>
                    </Paper>
                    <Feed />
                </Grid>
                <Grid item container direction="column" xs={12} sm={3} spacing={2}>
                    <Grid item>
                    <Paper style={{ height: "31vh", background: "lightgrey", position:"fixed" , marginTop: "5%"}} >
                        <div style={{ padding:"5%"}}>
                         <Notification/>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item>
                    {/* <Paper style={{ height: "49vh", background: "lightgrey" }} >
                        <Events/>
                    </Paper> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
