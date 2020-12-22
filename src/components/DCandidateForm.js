import React, { useEffect } from "react";
import useForm from "./useForm";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230
        }
    },
    fromGroup: {
        margin: theme.spacing(1),
        minWidth: 230
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialValues = {
    maBan : '',
    soLuongBan: '',
    soLuongNguoi: '',
    maKH: ''
}

const DCandidateForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        // if ('email' in fieldValues)
        //     temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid"

        if ('maBan' in fieldValues)
            temp.maBan = fieldValues.maBan ? "" : "This field is requied"
        if ('soLuongBan' in fieldValues)
            temp.soLuongBan = fieldValues.soLuongBan ? "" : "This field is requied"
        if ('soLuongNguoi' in fieldValues)
            temp.soLuongNguoi = fieldValues.soLuongNguoi ? "" : "This field is requied"
        if ('maKH' in fieldValues)
            temp.maKH = fieldValues.maKH ? "" : "This field is requied"

        setErrors({
            ...temp
        })
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values, setValues, handleInputChange, errors, setErrors
    } = useForm(initialValues, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            if (props.currentId === 0)
                props.createDCandidate(values, window.alert('Đã thêm'))
            else
                props.updateDCandidate(props.currentId,values,window.alert('updated'))
        }
        console.log(values)
    }

    useEffect(() => {
        if (props.currentId !== 0)
            setValues({
                ...props.dCandidateList.find(x => x.maBan === props.currentId)
            })
    }, [props.currentId])
    return (
        <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="maBan"
                        variant="outlined"
                        label="maBan"
                        type="text"
                        value={values.maBan}
                        onChange={handleInputChange}
                        {...(errors.maBan && { error: true, helperText: errors.maBan })}
                    />
                    <TextField
                        name="soLuongBan"
                        variant="outlined"
                        label="soLuongBan"
                        type="text"
                        value={values.soLuongBan}
                        onChange={handleInputChange}
                        {...(errors.soLuongBan && { error: true, helperText: errors.soLuongBan })}
                    />
                    <TextField
                        name="soLuongNguoi"
                        variant="outlined"
                        label="soLuongNguoi"
                        type="text"
                        value={values.soLuongNguoi}
                        onChange={handleInputChange}
                        {...(errors.soLuongNguoi && { error: true, helperText: errors.soLuongNguoi })}
                    />

                    <TextField
                        name="maKH"
                        variant="outlined"
                        label="maKH"
                        type="text"
                        value={values.maKH}
                        onChange={handleInputChange}
                        {...(errors.maKH && { error: true, helperText: errors.maKH })}
                    />

                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.smMargin}
                        >
                            Submit
                        </Button>
                        <Button
                            variant="contained"
                            color="default"
                            className={classes.smMargin}
                            type="submit"
                        >
                            Reset
                        </Button>

                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidateForm));