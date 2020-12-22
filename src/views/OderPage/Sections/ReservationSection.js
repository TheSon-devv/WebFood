import React, { useState, useEffect } from "react";
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

//redux
import * as actions from "../../../actions/monAn";
import { connect } from "react-redux";


const useStyles = makeStyles(styles);


const  ReservationSection = ({...props}) => {
  
  const classes = useStyles();
  
  useEffect(() => {
    props.fetchAllMonAn()
  },[])
  return (
    <div className={classes.section}>
      <GridContainer spacing={3}>
        <GridItem xs="2"></GridItem>
        <GridItem xs="8">
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
            <div style={{ margin: "15px" }}>
              <TextField
                id="datetime-local"
                label="Date"
                type="datetime-local"
                style={{ width: "204px" }}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
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

            <div style={{ margin: "15px" }}>
              {/* <TextField
                id="time"
                label="Time"
                type="time"
                defaultValue="07:30"
                style={{ width: "204px" }}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              /> */}
              <TextField
               
                id="outlined-textarea"
                label="Name"
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
                label="Address"
                multiline
                fullWidth
                variant="outlined"
              />
            </div>

            <div style={{ marginTop: "15px" }}>
              <TextField
                id="outlined-textarea"
                label="Email"
                multiline
                variant="outlined"
              />
              <TextField
                style={{ marginLeft: "15px" }}
                id="outlined-textarea"
                label="Phone Number"
                multiline
                variant="outlined"
              />
            </div>

            <div style={{ marginTop: "15px" }}>
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

const mapStateToProps = state => ({
  monAnList : state.monAn.listMonAn
})

const mapActionToProps = {
  fetchAllMonAn : actions.fetchAllMonAn,
  createMonAn : actions.createMonAn
}

export default connect(mapStateToProps,mapActionToProps)(ReservationSection);