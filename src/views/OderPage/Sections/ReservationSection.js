import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { cardTitle } from "assets/jss/material-kit-react.js";
import { Link } from "react-router-dom";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/oderPageSections/reservationStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { Input } from "@material-ui/core";


const useStyles = makeStyles(styles);
const useImageStyles=makeStyles(imagesStyles);

export default function TeamSection() {
  const classes = useStyles();
  const classess= useImageStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} >
      <GridContainer spacing="3">
        <GridItem xs="2"></GridItem>
        <GridItem xs="8" >
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
              BOOK A TABLE
            </h2>
            <h2 style={{ color: "#112", textAlign: "center" }}>~</h2>
            <h4
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                margin: "0 0 12px",
                color: "#666666",
              }}
            >
              Please choose your reservation date with specific time and number
              of people to book a table
            </h4>
            <br />
          </div>

          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-textarea"
                label="Date"
                placeholder="Date"
                multiline
                variant="outlined"
              />
              <select
                className={classes.input}
                id="select"
                tabindex="-1"
                aria-hidden="true"
              >
                <option>Party size</option>
                <option>2 pax</option>
                <option>3 pax</option>
                <option>4 pax</option>
                <option>5 pax</option>
                <option>6 pax</option>
                <option>6 pax</option>
                <option>7 pax</option>
                <option>More than 7 pax</option>
              </select>
            </div>
            <div>
              <TextField
                id="outlined-textarea"
                label="Hours"
                placeholder="Date"
                multiline
                variant="outlined"
              />
              <select
                className={classes.input}
                tabindex="-1"
                aria-hidden="true"
              >
                <option>Type of table</option>
                <option>1 table</option>
                <option>2 tables</option>
                <option>3 tables</option>
                <option>4 tables</option>
                <option>5 tables</option>
                <option>More than 5 tables</option>
              </select>
            </div>
            <div>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Name"
                multiline
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="Address"
                placeholder="Address"
                multiline
                variant="outlined"
              />
            </div>
            <div style={{display:"block"}}>
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Email"
                multiline
                variant="outlined"
              />
              <TextField
                id="outlined-textarea"
                label="Phone Number"
                placeholder="Phone Number"
                multiline
                variant="outlined"
              />
            </div>
            <div style={{marginTop:"10px"}}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                className={classes.textArea}
                variant="outlined"
              />
            </div>
            <div>
              <Button className={classes.button}>
                <Link to="/" className={classes.link}>
                  COMPLETE RESERVATION
                </Link>
              </Button>
            </div>
          </form>
        </GridItem>

        <GridItem xs="2"></GridItem>
      </GridContainer>
    </div>
  );
}