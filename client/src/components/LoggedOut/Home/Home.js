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
            <div style={{ marginTop:"2%"}}>
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
            <div style={{ padding: '5%' }}></div>

            <div style={{margin:"1rem 15rem", backgroundColor:"#ede8e8", border: "2px solid black"}}>
                <img src={PF+"Leena_Nair_IMG.jpg"} alt="leena_nair_img" style={{float:"left", padding:"1.5rem", marginTop:"2%"}} width="300" height="310"/>
                <div style={{ textAlign: "justify", padding:"1rem"}}>
                    <h1 style={{textAlign: "left"}}>French fashion giant Chanel has named our WCE Alumni Leena Nair as its global CEO</h1>
                    <p>Heartiest Congratulations to every walchandites huge inspiration Ms. Leena Nair on her great success. </p>
                    <p>Ms. Leena Nair, grew up in Kolhapur and graduated from the WCE's 1990 batch as an Electronics Engineer. After doing an MBA, she started her career at Unilever in 1992 and became the first woman as well as Asian and the youngest-ever CHRO of Unilever in 2016. And now she has become an Indian-origin woman to take over as CEO of a large global company like Chanel.  </p>
                    <p>Walchand College of Engineering, Sangli sends lots of best wishes to Ms. Leena for the next chapter !!!</p>
                </div>
            </div>
            <div style={{ padding: '5%' }}></div>
        </div>
    );
}