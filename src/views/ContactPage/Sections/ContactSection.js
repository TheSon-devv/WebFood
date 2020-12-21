import React from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";


// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/views/oderPageSections/reservationStyle.js";


import phone from "assets/img/contact/phone1.png"
import email from "assets/img/contact/email.png"
import address from "assets/img/contact/address.png"


const useStyles = makeStyles(styles);

export default function TeamSection() {
  
  const classes = useStyles();

  return (
    <div style={{padding:"70px 0 50px 0"}}>
      <GridContainer spacing="2">
          <GridItem xs="6">
            <h1
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontFamily: "Playfair Display serif",
                fontWeight: "400",
                color: "#112",
              }}
            >
              Contact Us
            </h1>
            <div>
              <span
                style={{
                  fontSize: "16px",
                  color: "#1c1c1c",
                  fontWeight: "700",
                }}
              >
                <img src={address} alt="Card-img-cap"></img> ADDRESS
              </span>

              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "Roboto serif",
                  fontWeight: "400",
                  color: "#112",
                }}
              >
                92 Hang Bai, Hoan Kiem , Ha Noi, Viet Nam
              </p>
            </div>
            <div>
              <span
                style={{
                  fontSize: "16px",
                  color: "#1c1c1c",
                  fontWeight: "700",
                }}
              >
                <img src={phone} alt="Card-img-cap"></img> PHONE
              </span>

              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "Roboto serif",
                  fontWeight: "400",
                  color: "#112",
                }}
              >
                (+84) 983 578 999
              </p>
            </div>

            <div>
              <span
                style={{
                  fontSize: "16px",
                  color: "#1c1c1c",
                  fontWeight: "700",
                }}
              >
                <img src={email} alt="Card-img-cap"></img> MAIL
              </span>

              <p
                style={{
                  fontSize: "17px",
                  fontFamily: "Roboto serif",
                  fontWeight: "400",
                  color: "#112",
                }}
              >
                info@restaurant.com
              </p>
            </div>
          </GridItem>
          <GridItem xs="5">
          <div style={{ textAlign: "center" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontFamily: "Playfair Display",
                fontWeight: "400",
                color: "#1c1c1c",
              }}
            >
              Send Us A Message
            </h2>
            
          </div>

          <form className={classes.root} noValidate autoComplete="off">

            <div >
              <TextField
                id="outlined-textarea"
                label="Name"
                style={{width:"45%"}}
                variant="outlined"
              />
              <TextField
                style={{ marginLeft: "10px",width:"45%"}}
                id="outlined-textarea"
                label="Email"
                
                
                variant="outlined"
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              
              <TextField
                
                id="outlined-textarea"
                label="Phone Number"
                style={{width:"92%"}}
                variant="outlined"
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                style={{width:"92%"}}
                multiline
                rows={4}
                className={classes.textArea}
                variant="outlined"
              />
            </div>
            <div>
              <Button className={classes.button}>
                <Link to="/" className={classes.link}>
                  YOUR MESSAGE
                </Link>
              </Button>
            </div>
          </form>
          </GridItem>
        </GridContainer>
    </div>
  );
}