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
import classes from "./test.module.css";

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
  tenKhachHang: "",
  phoneKhachHang: "",
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
    if ("tenKhachHang" in fieldValues)
      temp.tenKhachHang = fieldValues.tenKhachHang ? "" : "Vui lòng nhập tên";
    if ("phoneKhachHang" in fieldValues) {
      temp.phoneKhachHang = fieldValues.phoneKhachHang
        ? ""
        : "Vui lòng nhập đúng số điện thoại";
    }

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
        if (
          window.confirm(
            "Xác nhận đặt " +
            values.soLuongBan +
            " bàn vào " +
            values.timeCheck +
            " ?"
          )
        ) {
          if (values.errors == null) {
            props.createDatBan(values);
            window.alert("Đặt bàn thành công ! Vui lòng đợi cuộc gọi xác nhận yêu cầu đặt bàn");
            resetForm();
          }
          else{
            window.alert("Có lỗi xảy ra !");
          }
        }
      }
    }
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

            {/* <TextField
              name="soLuongBan"
              label="Số lượng bàn *"
              type="number"
              min="10"
              value={values.soLuongBan}
              onChange={handleInputChange}
              id="outlined-number"
              variant="outlined"
              {...(errors.soLuongBan && {
                error: true,
                helperText: errors.soLuongBan,
              })}
            /> */}
            <input
              name="soLuongBan"
              label="Số lượng bàn *"
              type="number"
              min={1}
              max={3}
              value={values.soLuongBan}
              onChange={handleInputChange}
              style={{
                margin: '5px 0',
                marginRight: '10px',
                width: '210px',
                padding: 15,
                fontSize: '1rem',
              }}
              placeholder="Số lượng bàn"
              {...(errors.soLuongBan && {
                error: true,
                helperText: errors.soLuongBan,
              })}
            />
            {/* <TextField
              style={{ marginLeft: "10px" }}
              name="soLuongNguoi"
              label="Số lượng người *"
              type="number"
              value={values.soLuongNguoi}
              onChange={handleInputChange}
              id="outlined-number"
              variant="outlined"
              {...(errors.soLuongNguoi && {
                error: true,
                helperText: errors.soLuongNguoi,
              })}
            /> */}
            <input
              name="soLuongNguoi"
              label="Số lượng người *"
              type="number"
              min={2}
              max={5}
              value={values.soLuongNguoi}
              onChange={handleInputChange}
              style={{
                margin: '5px 0',
                width: '210px',
                padding: 15,
                fontSize: '1rem',
                // borderRadius:5
              }}
              placeholder="Số lượng người"
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <TextField
              id="outlined-required"
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
              id="outlined-required"
              name="tenKhachHang"
              label="Tên Khách Hàng *"
              type="text"
              value={values.tenKhachHang}
              variant="outlined"
              onChange={handleInputChange}
              {...(errors.tenKhachHang && {
                error: true,
                helperText: errors.tenKhachHang,
              })}
            />
            <TextField
              id="outlined-required"
              style={{ marginLeft: "10px" }}
              name="phoneKhachHang"
              label="Số Điện Thoại *"
              type="text"
              value={values.phoneKhachHang}
              onChange={handleInputChange}
              variant="outlined"
              {...(errors.phoneKhachHang && {
                error: true,
                helperText: errors.phoneKhachHang,
              })}
            />
          </div>

          <div style={{ marginTop: "15px" }}>
            <TextField
              id="outlined-required"
              name="ghiChu"
              value={values.ghiChu}
              type="text"
              label="Message"
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
              Đặt bàn
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
