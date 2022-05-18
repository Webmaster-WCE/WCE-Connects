import {  makeStyles } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  cardroot: {
   border:"1px solid lightgrey"
  },
}));
export const NewsCard = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false)
    return (
    <Card className={classes.cardroot}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Graduation day
            </Typography>
            {
                isOpen?(
                    <>
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
                        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:'left'}}>
                           
                                
                               
                                <strong>
                                    Contcts : person
                                <br/>
                                Mobile Ni: s
                                <br/>
                                     email: aa
                                </strong>
                           
                            
                        </Typography>
                    </>
                ):(
                    <>
                        <Typography variant="body2" color="textSecondary" component="p" style={{whiteSpace:'pre-line'}}>
                           {"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\n\n\n\nacross all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\nacross all continents except Antarctica"}
                        </Typography>
                    </>
                )
            }
            
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={()=>setIsOpen(!isOpen)}>
            {
                isOpen?(
                    <>
                   
                    {"show less"}
                    </>
                ):(
                    <>
                     {"Learn More"}
                    </>
                )
            }
            </Button>
        </CardActions>
    </Card>
  )
}
