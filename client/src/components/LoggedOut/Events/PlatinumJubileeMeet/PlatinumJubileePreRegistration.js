import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { Button, makeStyles } from '@material-ui/core';
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
  xyz :{
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
      textAlign: "right",
    },
  },
  abc :{
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
      textAlign: "left",
    },
  },
}));



export const PlatinumJubileePreRegistration = () => {
    const classes = useStyles();
     const PF = process.env.REACT_APP_PUBLIC_FOLDER;

     //Important
    const [isLinkOpen, setIsLinkOpen] = useState(true)
    function createBankDetails(name, value) {
        return { name, value};
    }
    const BankDetails = [
        createBankDetails("Account Name", "WALCHAND COLLEGE OF ENGINEERING"),
        createBankDetails("Account No", "59219472021002"),
        createBankDetails("Bank Name", "HDFC Bank Ltd."),
        createBankDetails("Branch Name", "Sangli"),
        createBankDetails("IFSC Code", "HDFC0000222"),
        createBankDetails("MICR Code", "416240151"),
        createBankDetails("SWIFT Code", "HDFCINBB"),
        createBankDetails("Branch Code", "222"),
        createBankDetails("City", "Sangli Miraj Kupwad"),
        createBankDetails("Address", "Venkatesh Senate-640, Karmaveer Bhaurao Patil Chowk, Sangli-Miraj Road, Sangli, Maharashtra-416416"),
        createBankDetails("District", "Sangli"),
        createBankDetails("State", "Maharashtra"),
    ];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={classes.paper}>
            {
                isLinkOpen ? (
                    <>
                        <div style={{ fontFamily: "Montserrat" }}>
                            <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "#093f96" }}>Registration Methods</p>
                            <p><small>(You can do registration with any one method)</small></p>
                        </div>
                        <div style={{ fontFamily: "Montserrat" }}>
                            <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>Bank Transfer or UPI <small>(Method No. 1)</small></p>
                            <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                                <p>
                                    Please Register for the Platinum Jubilee Meet by paying the registration fee. 
                                </p>
                                <ul style={{textAlign:"left"}}>
                                    <li>Event Registration Fees : Rs. 2500 </li>
                                    <li>Event Registration Fess with Platinum Jubilee Momento : Rs. 5000</li>
                                    <li>Accompanying person: Rs. 500 extra for each person</li>
                                </ul>
                            </div>
                        </div>
                        <p style={{ fontSize: "x-large", fontWeight: "bold", fontFamily: "Montserrat", paddingTop: "3%" }}>Bank Details</p>
                        <div style={{ display: "flex", justifyContent: "center" }}>

                            <TableContainer component={Paper} style={{ margin: "0% 8%", backgroundColor: "lightgrey", fontFamily: "Montserrat" }}>
                                <Table size="small">
                                    <TableBody>
                                        {
                                            // var i=1;
                                            BankDetails.map((data,idx) => (
                                                <TableRow style={idx % 2 ? { background: "lightgrey" } : { background: "#e6e6e6" }} key={idx}>
                                                    {/* <TableCell align="right">{row.sr}</TableCell> */}
                                                    <TableCell align="center" style={{ width: 500, fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.name}</TableCell>
                                                    <TableCell align="left" style={{ fontFamily: 'Montserrat', fontSize: 'large', paddingRight: "0px" }}>{data.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <p style={{ paddingTop: "1%",fontFamily: "Montserrat" }}>OR</p>
                        <div style={{ fontFamily: "Montserrat" }}>
                            <p style={{ fontSize: "x-large", fontWeight: "bold", paddingTop: "1%" }}>Scan QR Code (UPI)</p>
                            <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "center", lineHeight: "1.5", borderRadius: "30px" }}>
                                <div>
                                    <img src={`${PF}PaymentQRCode.jpeg`} alt="UPI QR CODE" style={{ maxWidth: "-webkit-fill-available", maxHeight: "500px" }} />
                                    
                                </div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "Montserrat" }}>
                            <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>After your successful payment</p>
                            <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                                <p >
                                    Please Send your Name, UTR number, Mobile number, and transaction receipt to the contacts provided below for the confirmation of registration:
                                </p>
                                <ul style={{textAlign:"left"}}>
                                    <li>Janhavi Harne  : 7378791125 </li>
                                    <li>Kapil Marathe : 9881966024</li>
                                </ul>
                                <p >
                                    We will confirm your registration by separate massage or email after verification.
                                </p>
                                
                            </div>
                        </div>
                        <hr/>
                        <p style={{ fontSize: "x-large", paddingTop: "1%",fontFamily: "Montserrat" }}>OR</p>
                        <hr/>
                        <div style={{ fontFamily: "Montserrat" }}>
                            <div style={{ fontSize: "x-large", backgroundColor: "lightgrey", padding: "5%", margin: "1% 10%", textAlign: "left", lineHeight: "1.5", borderRadius: "30px" }}>
                                <p style={{ fontSize: "xx-large", fontWeight: "bold", paddingTop: "1%" }}>Method No. 2</p>
                                <p >
                                    Fill the complete registration form and proceed with payment
                                </p>
                                <div>
                                    <a href="https://services.sabpaisa.in/pages/walchandcollegeofengineeringsangli.html" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                style={{ background: 'white' }}
                                            >
                                                <div style={{ color: "blue", fontSize: "medium" }}>
                                                    Proceed to the Form
                                                </div>
                                            </Button>
                                        </a>
                                </div>
                                
                            </div>
                        </div>
                    </>
                ) : (
                     <div style={{ fontFamily: "Montserrat" }}>
                        <p style={{ fontSize: "xx-large", fontWeight: "bold", color: "red" }}>Registration has been Closed</p>
                      
                    </div>
                )
            }
            
            
           

        </div>
    )
}
