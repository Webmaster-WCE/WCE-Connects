
import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
   paper: {
    marginTop:"7%",
    alignItems: 'center',
    padding:"1%"
  },
}));



export const DonorPackage = () => {
    const classes = useStyles();
    function createBuildingInfrastructure(UnitDescription,NoofUnits,Area,EstCost) {
        return {UnitDescription,NoofUnits,Area,EstCost};
    }
    function createDonorPackage(option,funding,offer) {
        return {option,funding,offer};
    }
    
    const textData ={
        "p1":"Year 2021-22 marks a major milestone in the history of Walchand College of Engineering as it has turned into in 75 years along with the nation’s independence in 1947.\n\nBeing an old institution WCE has an urgent need to re-build its infrastructure to meet present and future needs, i.e. replacement of almost all buildings, hostels, most of labs, rebuilding and expanding internal roads, creating a proper sewage network, basic gardening and landscaping, et al.\n\nOn operational side, reliable and sustainable fund provision is required for basic needs like, faculty and staff, books and journals in the library, research and development fund etc.\n\nFunds are needed for transformation of Walchand College of Engineering (WCE) in to a world-class institution on a sustainable basis. Various funding modes could be grants, donations, loans, and so on. Donations from alumni, industry or other philanthropists could be one of the options. Typically, benefactors have some expectations while providing major donations. These could be naming a building or a facility or supporting an activity as per the donor’s wish. Considering such expectations, an outline of a scheme of donor packages is proposed here in relation to major needs of the institute.",
        
        "BuildingInfrastructure":[
            createBuildingInfrastructure("Auditorium","1","5420","27.10"),
            createBuildingInfrastructure("Department Buildings","6","5290","15.87"),
            createBuildingInfrastructure("Classroom Buildings", "3","1984","5.95"),
            createBuildingInfrastructure("R & D Buildings",	"6","3528",	"10.58"),
            createBuildingInfrastructure("Café & Students Common","1","5290","15.87"),
            createBuildingInfrastructure("Workshop Building","1","5290","15.87"),
            createBuildingInfrastructure("Student Recreation Centre","1","5290","15.87"),
            createBuildingInfrastructure("Hostels (Ladies)","3","3864",	"11.60"),
            createBuildingInfrastructure("Hostels (Boys)","4","4760","14.28"),
            createBuildingInfrastructure("Total","","","132.99"),
        ],
        "donorPackage":[
            createDonorPackage("A","70% or more of cost of building / floor / wing as the case may be","	Naming of the building / floor / wing after the donor"),
            createDonorPackage("B","Rs. 1 crore or more for building construction","	Prominently displayingacknowledgment plaque in donor’s name"),
            createDonorPackage("C","Rs. 10 lakh to less that Rs. 1 crore for building construction","Displaying donor’s name in the list of major donors"),
            createDonorPackage("D","75% or more of equipment cost of a laboratory, research facility, center of excellence, etc.","Naming of the lab, facility, center as per donor’s wish for a given period"),
            createDonorPackage("E","Full cost of creating a sports amenity, like tennis court, basketball court, etc.","Naming of the sponsored amenity"),
            createDonorPackage("F","Full corpus of an Endowment","Naming of the Endowment"),
            createDonorPackage("G","Contribution in to an Endowment> Rs. 1 lakh","Acknowledgement appropriately"),
        ]
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={classes.paper}>
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>A Framework for Donor Package</p>
            </div>
            <div style={{ fontFamily: "Montserrat" }}>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <p style={{whiteSpace:'pre-line'}}>
                        {textData.p1}
                    </p>

                </div>
            </div>

            <div style={{ fontFamily: "Montserrat" }}>
                {/* <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}></p> */}
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <p >
                       Considering all these aspects, the following key areas are identified for major fund requirements:
                    </p>
                    <ul style={{textAlign:"left"}}>
                        <li><b>Replacement of old buildings</b> : Most of the campus buildings were constructed during the 1950s and the 1960s. It is important to have a phase-out plan for replacement of these buildings.</li>
                        <li><b>Creation of endowments</b> : Endowments can be created to suit the aims of the benefactor and long term core needs of the institute. For instance, Endowment Chairs in different departments can help attracting talented faculty. Endowments for scholarships and awards could to attract, support and promote talent among students. Research and Development activities could be supported by endowments. Endowments could be large or small, specific or general. </li>
                        <li><b>Students Amenities</b> : Over a thousand students reside in hostels within WCE campus. They require a variety of sports and other amenities. We have recently developed a professional standard badminton court and improved other amenities like student gymnasium, basketball, volleyball or tennis courts. However, these are far short of national standards. The Campus Master Plan has designated areas for these amenities.</li>
                        <li><b>Setting up of state-of-art laboratories</b> : Institute updates its curriculum according to Rapid technological changes and upgrade teaching-learning facilities. New laboratories need to be set up and old lab equipment and software need replacement. These are very expensive. </li>
                    </ul>

                </div>
            </div>
            
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>Donors could be attracted to support development of these facilities. </p>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <div>
                        <h3 style={{textAlign:"center"}}>Building Infrastructure</h3>
                        <p>The campus of WCE can be developed in phases over the next 10-15 years.</p>
                        <p>
                            Major buildings to be developed in different phases with estimated area and cost at current prices are presented in the table. Most of these would be large buildings costing between Rs. 11 crores to over Rs. 27 crores. A few smaller units are around Rs. 6 crores.
                        </p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>

                            <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat",border:"2px solid white" }}>
                                <Table size="small">
                                    <TableBody>
                                         				

                                         <TableRow style={{background: "lightgrey" }} >
                                            <TableCell align="right"><b>Sr. No.</b></TableCell>
                                            <TableCell align="center" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Unit description</b></TableCell>
                                            <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>No. of Units</b></TableCell>  
                                            <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Area(Sq M)</b></TableCell>
                                            <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Est.Cost  per unit (Rs. Cr.)</b></TableCell>
                                        </TableRow>
                                        {
                                            // var i=1;
                                            textData.BuildingInfrastructure.map((data,idx) => (
                                                <TableRow style={idx % 2 ? { background: "lightgrey" } : { background: "#e6e6e6" }} key={idx}>
                                                    <TableCell align="right">{idx+1}</TableCell>
                                                    <TableCell align="center" style={{  fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.UnitDescription}</TableCell>
                                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.NoofUnits}</TableCell>
                                                    
                                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.Area}</TableCell>
                                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.EstCost}</TableCell>
                                                </TableRow>
                                            ))}
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                </div>

                 <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <div>
                        <h3 style={{textAlign:"center"}}>Funds or Endowments</h3>
                        <p>The campus of WCE can be developed in phases over the next 10-15 years.</p>
                        <p>
                            Major buildings to be developed in different phases with estimated area and cost at current prices are presented in the table. Most of these would be large buildings costing between Rs. 11 crores to over Rs. 27 crores. A few smaller units are around Rs. 6 crores.
                        </p>
                    </div>

              
                    <div>
                       <ol>
                            <li style={{padding:'1%'}}><b>Endowment Chairs in Departments : </b>Endowment Chairs is a very successful concept in universities around the world. Well defined endowment chairs can attract high caliber and specialized faculty. Here, a donor gives a one-time donation sufficient to meet the salary and other costs for appointment of a professor. For instance, an endowment corpus of Rs. 10-11crores can support one professor at the present pay scales. Often, endowments aim to attract the best talent and offer much higher compensation. Donors may like to choose departments or specializations they wish to support though creation of such endowments. </li>
                            <li style={{padding:'1%'}}><b>Faculty Development Endowment : </b>Interested donors could support a general fund dedicated to professional development of faculty and staff. Faculty members and technical staff need to be sent for periodic learning and skill enhancements at other institutes or abroad. A faculty and staff enhancement fund could take care of this perennial need. </li>
                            <li style={{padding:'1%'}}><b>Research Endowment : </b>Specific or general endowments could be created to support various types of research.  However, dedicated funds to support research can provide fillip to institute’s research potential and help attract good faculty and students. </li>
                            <li style={{padding:'1%'}}><b>Scholarships and Prizes Endowment : </b>Typically a good university offers a large number and a variety of scholarships and prizes to reward competitive talent. A major aim of such a fund could also be to keep the institute doors open to talented students who may not be able to afford the cost of studies. Here again, donors may contribute certain corpus individually or collectively to support full or part of tuition and other costs for one or more of students. </li>
                            <li style={{padding:'1%'}}><b>VISION Fund : </b>For the past 30 years, students annually organize a major technical symposium – VISION. The event has become quite popular and a lot of engineering projects of students from all over states are displayed. Many technical competitions are held to bring out technical prowess of engineering student community. Such events provide students a platform for applying their engineering knowledge to various industry challenges. A fund to support such events could help students take up more ambitious projects in future.</li>
                            <li style={{padding:'1%'}}><b>General Fund : </b>Smaller contributions from donors could be placed under a single fund which could be used for activities for which the institute has no specific provision. For instance, presently WCE needs funds for arranging soft skills training for almost all students, but many students cannot pay for it. Or a group of students need support for participating in national or international level engineering design competition. A fund like this could help. </li>
                            <li style={{padding:'1%'}}><b>Students Amenities Fund : </b>A good institution offers several amenities which are useful for campus community, especially students, like gymnasium, sports facilities, cultural centre, workshop, and so on. </li>
                            <li style={{padding:'1%'}}><b>Hostel Enhancement Fund : </b>Alumni carry great memories of hostel days and often have great affinity to their hostels. Hostels are constantly in need for enhancements over time. A fund created for this purpose, where a number of small contributions could be channelized, could serve to upgrade hostels facilities from time to time. </li>
                            <li style={{padding:'1%'}}><b>Building and Infrastructure Fund : </b>This is a major segment of need for large funds. Donors could chose to fund entirely or partly a specific building, a hostel, an auditorium, a lecture hall, etc. as per their own objective or make contribution to a general fund, which is dedicated to improving and adding infrastructure. Depending on the offer, it is possible to work out a suitable arrangement to meet objectives of the college with those of the donor. </li>
                            <li style={{padding:'1%'}}><b>Roads, Water-supply network, Electricity and Sewage network : </b>Like other infrastructure in our campus, these networks are also very old and inadequate for the present and future needs. Significant investments are required for upgrading these networks in line with the overall campus transformation.  </li>
                       </ol>
                    </div>

                </div>
            </div>
            <div style={{ fontFamily: "Montserrat" }}>
                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>Suggestions for Donor Packages:</p>
                <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                    <p >
                        Considering the myriad needs of the institution and varied nature of the donor expectations, it is better to keep a flexible framework for donor funding. Within this framework, donor packages could be tailored as per mutual expectations between the institute and major donors. Considering the needs outlined as above, the following donor packages are suggested:
                    </p>
                   <div style={{ display: "flex", justifyContent: "center" }}>
                        <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat",border:"2px solid white" }}>
                            <Table size="small">
                                <TableBody>
                                        <TableRow style={{background: "lightgrey" }} >
                                        <TableCell align="center" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Options</b></TableCell>
                                        <TableCell align="center" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Funding</b></TableCell>
                                        <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}><b>Offer</b></TableCell>  
                                 
                                    </TableRow>
                                    {
                                        // var i=1;
                                        textData.donorPackage.map((data,idx) => (
                                            <TableRow style={idx % 2 ? { background: "lightgrey" } : { background: "#e6e6e6" }} key={idx}>
                                               
                                                <TableCell align="center" style={{  fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.option}</TableCell>
                                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.funding}</TableCell>
                                                
                                                <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.offer}</TableCell>
                                               
                                            </TableRow>
                                        ))}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}
