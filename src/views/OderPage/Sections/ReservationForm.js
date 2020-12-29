import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/oderPageSections/reservationStyle.js";

//redux
import * as actions from "../../../actions/datBan";
import { connect } from "react-redux";
import useForm from "./useForm";

const useStyles = makeStyles(styles);

const initialValues = {
  timeCheck: "",
  soLuongBan: "",
  soLuongNguoi: "",
  ghiChu: "",
  tenKH: "",
  phoneKH: "",
};

const ReservationSection = ({ ...props }) => {
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("timeCheck" in fieldValues)
      temp.timeCheck = fieldValues.timeCheck
        ? ""
        : "Vui lòng nhập thời gian đặt bàn";
    if ("soLuongBan" in fieldValues)
      temp.soLuongBan = fieldValues.soLuongBan
        ? ""
        : "Vui lòng nhập số lượng bàn";
    if ("soLuongNguoi" in fieldValues)
      temp.soLuongNguoi = fieldValues.soLuongNguoi
        ? ""
        : "Vui lòng nhập số lượng người";
    if ("tenKH" in fieldValues)
      temp.tenKH = fieldValues.tenKH ? "" : "Vui lòng nhập tên";
    if ("phoneKH" in fieldValues)
      temp.phoneKH = fieldValues.phoneKH ? "" : "Vui lòng nhập số điện thoại";
    setErrors({
      ...temp,
    });
    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialValues, validate, props.setCurrentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (props.currentId === 0) {
        props.createDatBan(values);
        window.alert(
          "Đặt bàn thành công ! Vui lòng đợi điện thoại từ nhà hàng để chốt bàn"
        );
      }
      resetForm();
    }
    console.log(values);
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.listDB.find((x) => x.maBan == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  return (
    <div className={classes.section}>
      <Grid>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <div>
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
              style={{ marginLeft: "10px" }}
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

          <div style={{ marginTop: "15px" }}>
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

          <div style={{ marginTop: "15px" }}>
            <TextField
              name="tenKh"
              label="Tên Khách Hàng *"
              type="text"
              value={values.TenKH}
              variant="outlined"
              onChange={handleInputChange}
              {...(errors.tenKH && {
                error: true,
                helperText: errors.tenKH,
              })}
            />
            <TextField
              style={{ marginLeft: "10px" }}
              name="phone"
              label="Số Điện Thoại *"
              type="text"
              value={values.phoneKH}
              variant="outlined"
              {...(errors.phoneKH && {
                error: true,
                helperText: errors.phoneKH,
              })}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <TextField
              name="ghiChu"
              value={values.ghiChu}
              type="text"
              label="Nội Dung"
              onChange={handleInputChange}
              multiline
              rows={5}
              className={classes.textArea}
              variant="outlined"
            />
          </div>
          <div>
            <Button className={classes.button} type="submit">
              {/* <Link to="/" className={classes.link}> */}
              GỬI THÔNG TIN
              {/* </Link> */}
            </Button>
          </div>
        </form>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listDB: state.datBan.datBanList,
});

const mapActionToProps = {
  createDatBan: actions.createDatBan,
};

export default connect(mapStateToProps, mapActionToProps)(ReservationSection);
