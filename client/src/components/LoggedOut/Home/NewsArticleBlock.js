import React, { useState } from 'react'
import { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    
    
  },
});

export const NewsArticleBlock = () => {
    const classes = useStyles();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const newsArticles = [
        {
            title: "French fashion giant Chanel has named our WCE Alumni Leena Nair as its global CEO",
            content : "Heartiest Congratulations to every walchandites huge inspiration Ms. Leena Nair on her great success.\n\nMs. Leena Nair, grew up in Kolhapur and graduated from the WCE's 1990 batch as an Electronics Engineer. After doing an MBA, she started her career at Unilever in 1992 and became the first woman as well as Asian and the youngest-ever CHRO of Unilever in 2016. And now she has become an Indian-origin woman to take over as CEO of a large global company like Chanel.\n\nWalchand College of Engineering, Sangli sends lots of best wishes to Ms. Leena for the next chapter !!!",
            image : "Leena_Nair_IMG.jpg",
            imagePosition : "left"
        },
        {
            title: "aa",
            content : "bb",
            image : "a",
            imagePosition : "center"
        },
        {
            title: "aa",
            content : "bb",
            image : "a",
            imagePosition : "right"
        },

    ]
    const [displayedNews, setdisplayedNews] = useState({});
    useEffect(() => {
        setdisplayedNews(newsArticles[0]);
    }, [])
    return (
        <div>
            <div style={{margin:"1% 15%", backgroundColor:"#ede8e8", border: "2px solid black", borderRadius:"30px"}}>
                <img src={PF+"Leena_Nair_IMG.jpg"} alt="leena_nair_img" style={{float:"left", padding:"1.5rem", marginTop:"2%",minWidth:"180px" }} width="20%" />
                <div style={{ textAlign: "justify", padding:"1rem", fontSize: "large"}}>
                    <h1 style={{textAlign: "left"}}>French fashion giant Chanel has named our WCE Alumni Leena Nair as its global CEO</h1>
                    <p>Heartiest Congratulations to every walchandites huge inspiration Ms. Leena Nair on her great success. </p>
                </div>
            </div>
            <div style={{margin:"1% 15%", backgroundColor:"#ede8e8", border: "2px solid black", borderRadius:"30px"}}>
                <img src={PF+"Leena_Nair_IMG.jpg"} alt="leena_nair_img" style={{float:"left", padding:"1.5rem", marginTop:"2%",minWidth:"180px" }} width="20%" />
                <div style={{ textAlign: "justify", padding:"1rem", fontSize: "large"}}>
                    <h1 style={{textAlign: "left"}}>French fashion giant Chanel has named our WCE Alumni Leena Nair as its global CEO</h1>
                    <p>Heartiest Congratulations to every walchandites huge inspiration Ms. Leena Nair on her great success. </p>
                </div>
            </div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={PF+"Leena_Nair_IMG.jpg"}
                        title="Contemplative Reptile"
                        style={{width:"100%",maxHeight:"100px"}}
                    />
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
        </div>
    )
}
