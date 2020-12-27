import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/oderPageSections/reservationStyle.js";

//redux
import * as actions from "../../../actions/datBan";
import { connect } from "react-redux";
import useForm from "./useForm";



const useStyles = makeStyles(styles);

const initialValues = {
    timeCheck: '',
    soLuongBan: '',
    soLuongNguoi: '',
    ghiChu: '',
    maKH: ''
}



const ReservationSection = ({ ...props }) => {

    const classes = useStyles();

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if ('timeCheck' in fieldValues)
            temp.timeCheck = fieldValues.timeCheck ? "" : "Vui lòng nhập thời gian đặt bàn"
        if ("soLuongBan" in fieldValues)
            temp.soLuongBan = fieldValues.soLuongBan ? "" : "Vui lòng nhập số lượng bàn";
        if ("soLuongNguoi" in fieldValues)
            temp.soLuongNguoi = fieldValues.soLuongNguoi ? "" : "Vui lòng nhập số lượng người";
        if ("maKH" in fieldValues)
            temp.maKH = fieldValues.maKH ? "" : "This field is requied";
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values, setValues, handleInputChange, errors, setErrors, resetForm
    } = useForm(initialValues, validate, props.setCurrentId);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            if (props.currentId === 0) {
                props.createDatBan(values);
                window.alert("Đặt bàn thành công ! Vui lòng đợi điện thoại từ nhà hàng để chốt bàn")
            }
            resetForm();
        }
        console.log(values);
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.listDB.find(x => x.maBan == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])


    return (
        <div className={classes.section}>
            <Grid container>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

                    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                        {/* <select
        className={classes.input}
        id="select"

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
    </select> */}
                        <TextField
                            name="soLuongBan"
                            label="Số lượng bàn *"
                            type="text"
                            value={values.soLuongBan}
                            onChange={handleInputChange}
                            variant="outlined"
                            {...(errors.soLuongBan && {
                                error: true,
                                helperText: errors.soLuongBan,
                            })}
                        />
                        <TextField
                            name="soLuongNguoi"
                            label="Số lượng người *"
                            type="text"
                            value={values.soLuongNguoi}
                            onChange={handleInputChange}
                            variant="outlined"
                            {...(errors.soLuongNguoi && {
                                error: true,
                                helperText: errors.soLuongNguoi,
                            })}
                        />
                    </div>
                    <div style={{ margin: "15px" }}>
                        <TextField
                            name="timeCheck"
                            type="datetime-local"
                            value={values.timeCheck}
                            onChange={handleInputChange}
                            variant="outlined"
                            style={{ width: "430px" }}
                            {...(errors.timeCheck && {
                                error: true,
                                helperText: errors.timeCheck,
                            })}
                        />
                    </div>


                    <div style={{ marginVertical: "15px" }}>

                        <TextField
                            name="maKH"
                            label="Mã Khách Hàng *"
                            type="text"
                            value={values.maKH}
                            style={{ width: "204px" }}
                            variant="outlined"
                            onChange={handleInputChange}
                            {...(errors.maKH && {
                                error: true,
                                helperText: errors.maKH,
                            })}

                        />

                    </div>

                    {/* <div style={{ marginTop: "15px" }}>
    <TextField
        name="timeCheck"
        label="Date and Time"
        type="datetime-local"
        value={values.timeCheck}
        style={{ width: "204px" }}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        {...(errors.maNV && {
            error: true,
            helperText: errors.maNV,
        })}
    />
    <TextField
        name="timeCheck"
        label="Date and Time"
        type="datetime-local"
        value={values.timeCheck}
        style={{ width: "204px" }}
        variant="outlined"
        InputLabelProps={{
            shrink: true,
        }}
        {...(errors.maNV && {
            error: true,
            helperText: errors.maNV,
        })}
    />
</div> */}

                    <div style={{ marginTop: "15px" }}>
                        <TextField
                            name="ghiChu"
                            value={values.ghiChu}
                            type="text"
                            id="outlined-multiline-static"
                            label="Message"
                            onChange={handleInputChange}
                            multiline
                            rows={4}
                            className={classes.textArea}
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Button className={classes.button} type="submit">
                            {/* <Link to="/" className={classes.link}> */}
                            COMPLETE RESERVATION
                            {/* </Link> */}
                        </Button>
                    </div>
                </form>
            </Grid>


        </div>
    );
}

const mapStateToProps = state => ({
    listDB: state.datBan.datBanList
});

const mapActionToProps = {
    createDatBan: actions.createDatBan
};

export default connect(mapStateToProps, mapActionToProps)(ReservationSection);