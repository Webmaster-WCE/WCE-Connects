import React from 'react'
import { Grid, Paper } from "@material-ui/core";
import MinProfile from './MinProfile';
import CreatePost from './CreatePost';

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
                </Grid>
                <Grid item container direction="column" xs={12} sm={3} spacing={2}>
                    <Grid item>
                    {/* <Paper style={{ height: "29vh", background: "orange" }} /> */}
                    </Grid>
                    <Grid item>
                    {/* <Paper style={{ height: "49vh", background: "green" }} /> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
