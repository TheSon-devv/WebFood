import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/oderPageSections/reservationStyle.js";

//redux
import * as actions from "../../../actions/datBan";
import { connect } from "react-redux";
import ReservationForm from "./ReservationForm";



const useStyles = makeStyles(styles);


const ReservationSection = ({ ...props }) => {

    const classes = useStyles();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllDatBan();
    }, [])


    return (
        <div className={classes.section}>
            <GridContainer spacing={3}>
                <GridItem xs={2}></GridItem>
                <GridItem xs={8}>
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

                    <ReservationForm {...{ currentId, setCurrentId }} />
                </GridItem>

                <GridItem xs={2}></GridItem>
            </GridContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    listDB: state.datBan.datBanList
});

const mapActionToProps = {
    fetchAllDatBan: actions.fetchAllDatBan
};

export default connect(mapStateToProps, mapActionToProps)(ReservationSection);