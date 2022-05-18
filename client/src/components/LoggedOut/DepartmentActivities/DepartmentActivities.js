import {  makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { NewsCard } from './NewsCard';


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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const departmentlist =[
    {
        name:'CSE',
    },
    {
        name:'IT',
    },
    {
        name:'Electronics',
    },
     {
        name:'Electrical',
    },
    {
        name:'MECH',
    },
    {
        name:'Civil',
    }
]

export const DepartmentActivities = () => {
    const classes = useStyles();
    const [dept, setDept] = useState(0)
    
    const [departmentDataList, setDepartmentDataList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            await axios.get("http://localhost:5000/news/").then((response)=>{
                if(response.data[0]){
                    //setAllData(response.data[0]); 
                    console.log(response)
                } else {
                    
                }
                console.log(response)
            }).catch((e)=>{
             /* HANDLE THE ERROR (e) */
                console.log(e);
            });
            setIsLoading(false);
        };
        getData();
        setIsLoading(false);
    }, [])
    
    useEffect(() => {

    }, [isLoading])
    

    const handleChange = (event) => {
        setDept(event.target.value);
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
                    <div style={{alignContent:'center',textAlign:'center'}}>
                        <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Department {departmentlist[dept].name}</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={dept}
                        onChange={handleChange}
                        >
                        {
                            departmentlist.map((dept,ind)=>(<MenuItem value={ind} key={ind}>{dept.name}</MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
                    </div>
                </div>
            </div>
                    

            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        departmentDataList && departmentDataList.map((deptData,ind)=>{
                            <>
                                {
                                    deptData.dept==departmentlist[dept]?(
                                        <>
                                            <Grid item xs={12} sm={6} lg={4}>
                                                <NewsCard/>
                                            </Grid>
                                        </>
                                    ):(null)
                                }
                            </>
                        })
                    }
                    
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <NewsCard/>
                    </Grid>
                   
                   
                    
                </Grid>
            </div>
        </div>
    );
};
