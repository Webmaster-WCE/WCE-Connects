import React, {useEffect} from 'react';
import WaveBorder from "./WaveBorder";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';

export default function Home(){
    // const history = useHistory();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div style={{marginTop:"3%"}}>
            {/* {PF+"wce_pic.jpg"} */}
            <div style={{backgroundColor:"#011940", color:"white"}}>
                <img src={PF+"wce_pic.webp"} alt="WCE_IMAGE" style={{minWidth:"-webkit-fill-available",maxWidth:"-webkit-fill-available", maxHeight:"525px"}}/>
            </div>
            <WaveBorder
                upperColor="#011940"
                lowerColor="#FFFFFF"
                // className={classes.waveBorder}
                animationNegativeDelay={3}
            />
            <div style={{height:"60vh", marginTop:"2%"}}>
                <div>   
                    <div style={{position:"relative"}}>
                        <Link to="/events/eventid" style={{backgroundColor:"white", textDecoration: "none"}}>
                            <img src={PF+"events/Platinum_Jublee_Meet.webp"} alt="EVENT_BANNER" style={{ maxHeight:"250px", padding:"1.5%", border:"2px solid black"}}/>
                            <Button
                                style={{ position: "absolute",top: "50px",right: "25%",background: 'black'}}
                                variant="contained"
                            >
                                <div style={{ color: "white" }}>CLICK HERE TO REGISTER</div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}