import React, {useEffect, useState} from 'react';
import WaveBorder from "./WaveBorder";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Carousel from 'react-material-ui-carousel'
// import { useHistory } from 'react-router-dom';

export default function Home(){
    // const history = useHistory();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [carouselProps, setCarouselProps] = useState({
        autoPlay: false,
        navButtonsAlwaysVisible: true,
        duration: 2000,
        index:1
    });
    useEffect(() =>{
       if(window.screen.width < 1000){
           setCarouselProps({
            autoPlay: false,
            navButtonsAlwaysVisible: false,
            duration: 2000,
            index:1
        }); 
        }
    },[window.screen.width]);

    const events = [
        {
          eventid: 0,
          banner: `${PF}events/Data_centre.webp`,
          title: "Inauguration of Data Centre",
          description: "Coming up in Dec 2021...",
        link: "#"
        },
        {
          eventid: 1,
          banner: `${PF}events/Platinum_Jublee_Meet.webp`,
          title: "Platinum Jubilee Meet 2021-22",
          description: "The 75th anniversary of WCE, our Platinum Jubilee, is a very special event that we wish to celebrate together in our campus.\nComing up in Jan 2022...",
        link: "https://www.alumni.wce.ac.in/#/events/eventid"
        },
        {
          eventid: 2,
          banner: `${PF}events/Graduation.webp`,
          title: "Graduation",
          description: "Coming up in March 2022..",
        link: "#"
        },
        {
          eventid: 3,
          banner: `${PF}events/Conference.webp`,
          title: "Conference",
          description: "Coming up in March 2022..",
        link: "https://rsc.wce.ac.in/"
        },
        {
          eventid: 4,
          banner: `${PF}events/Industry_meet.webp`,
          title: "Industry meet",
          description: "Coming up in April 2022..",
        link: "#"
        },
        
        {
          eventid: 5,
          banner: `${PF}events/Gathering_n_Sports.webp`,
          title: "Gathering and Sports",
          description: "Coming up in April 2022..",
        link: "#"
        },
        {
          eventid: 6,
          banner: `${PF}events/OpenHouse.webp`,
          title: "Open House",
          description: "Coming up in May 2022..",
        link: "#"
        },
        {
          eventid: 7,
          banner: `${PF}events/Closing_ceremony.webp`,
          title: "Closing ceremony",
          description: "Coming up in June 2022..",
        link: "#"
        }
      ];
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
            <Carousel index={carouselProps.index} navButtonsAlwaysVisible={carouselProps.navButtonsAlwaysVisible} autoPlay={carouselProps.autoPlay} animation="slide"  duration={carouselProps.duration}>
                {
                    events.map( (event, i) => <Event key={i} event={event} duration='2000' interval='20000'/>)
                }
            </Carousel>
            <div style={{ padding: '4%' }}></div>
            <video controls style={{maxWidth:"-webkit-fill-available", maxHeight:"525px", padding:"2%"}}>
                <source src={`${PF}wce_promo_720p.mp4`} type="video/mp4" />
            </video>
            <div style={{ padding: '4%' }}></div>
            <div style={{margin:"1% 15%", backgroundColor:"#ede8e8", border: "2px solid black", borderRadius:"30px"}}>
                <img src={PF+"Leena_Nair_IMG.jpg"} alt="leena_nair_img" style={{float:"left", padding:"1.5rem", marginTop:"2%",minWidth:"180px" }} width="20%" />
                <div style={{ textAlign: "justify", padding:"1rem", fontSize: "large"}}>
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

function Event(props)
{
    return (
        <div style={{ marginTop:"2%"}}>           
            <div style={{position:"relative"}}>
                <a href={props.event.link} rel='noreferrer'>
                    <img src={props.event.banner} alt="EVENT_BANNER" style={{ maxHeight:"250px", padding:"1.5%", border:"2px solid black",maxWidth:"900px", width: "90%"}}/>
                </a>
                <div style={{justifyContent:'center'}}>
                {
                    props.event.eventid===1 && <Link to="/events/eventid" style={{backgroundColor:"white", textDecoration: "none"}}>
                        <Button
                            style={{background: 'black'}}
                            variant="contained"
                        >
                            <div style={{ color: "white" }}>CLICK HERE TO REGISTER</div>
                        </Button>
                    </Link>
                }

                </div>
                
            </div>
        </div>
    )
}