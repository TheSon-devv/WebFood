import React, {  useEffect } from "react";
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
    email: '',
    password: ''
}

const DCandidateForm = ({ classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid"
        if ('password' in fieldValues)
            temp.password = fieldValues.password ? "" : "This field is requied"
        
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values, setValues, handleInputChange, errors, setErrors
    } = useForm(initialValues, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            if (props.currentId == 0)
                props.createDCandidate(values, () => { window.alert('Da them') })
            else
                props.updateDCandidate(props.currentId, values, () => { window.alert('updated') })
        }
        console.log(values)
    }

    useEffect(() => {
        if (props.currentId != 0)
            setValues({
                ...props.dCandidateList.find(x => x.id == props.currentId)
            })
    }, [props.currentId])
    return (
        <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        type="text"
                        value={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && { error: true, helperText: errors.email })}
                    />
                    <TextField
                        name="password"
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                        {...(errors.password && { error: true, helperText: errors.password })}
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
                            type="date"
                        >
                            Reset
                        </Button>
                        <input type="date"></input>
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