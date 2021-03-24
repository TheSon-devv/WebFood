import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "assets/jss/material-kit-react.js";

import image1 from "assets/img/menu/menu17.jpg";
import image2 from "assets/img/menu/menu1.jpg";
import image3 from "assets/img/menu/menu18.jpg";
import image5 from "assets/img/menu/menu5.jpg";

//redux
import * as actions from "../../../actions/monAn";
import { connect } from "react-redux";

const useStyles = makeStyles(styles);
const usecardTitle = makeStyles(cardTitle);
const useImageStyle = makeStyles(imagesStyles);

const ProductSection = ({ ...props }) => {
    const classes = useStyles();
    const classess = usecardTitle();
    const classesss = useImageStyle();

    useEffect(() => {
        props.fetchAllMonAn();
    }, [])
    return (
        <div className={classes.section}>
            <GridContainer>
                    {props.listMA.map((e, index) => {
                        return (

                            <GridItem xs={12} sm={12} md={3} key={e.maMonAn} >
                                <Card>
                                    <img
                                        className={classesss.imgCardTop}
                                        src={e.img_food}
                                        alt="Second slide"
                                        style={{ height: "auto", maxWidth: "100%", display: "block" }}
                                    />
                                    <CardBody>
                                        <h4 className={classess.cardTitle}>{e.tenMon}</h4>
                                        <p>{e.infomation}</p>
                                    </CardBody>
                                </Card>
                            </GridItem>

                        )
                    })}
               
            </GridContainer>
        </div>
    );
}

const mapStateToProps = state => ({
    listMA: state.monAn.listMonAn
})

const mapActionToProps = {
    fetchAllMonAn: actions.fetchAllMonAn
}

export default connect(mapStateToProps, mapActionToProps)(ProductSection);