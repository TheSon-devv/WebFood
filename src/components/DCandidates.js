import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import DCandidateForm from "./DCandidateForm";
import { Container, Grid, Paper, Table, TableHead, TableRow, TableCell, TableContainer, TableBody, withStyles, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const DCandidates = ({ classes, ...props }) => {

    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])

    const onDelete = id => {
        if(window.confirm('Are you sure to delete record?')){
            props.deleteDcandidate(id,()=>{window.alert('Delete succesful')})
        }
    }
    return (

        <Container maxWidth="lg">
            <Paper className={classes.paper} elevation={3}>
                <Grid container>
                    <Grid item xs={6}>
                        <DCandidateForm {...({ currentId, setCurrentId })} />
                    </Grid>
                    <Grid item xs={6}>
                        <TableContainer>
                            <Table>
                                <TableHead className={classes.root}>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Password</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.dCandidateList.map((record, index) => {
                                            return (
                                                <TableRow key={record.id} hover>
                                                    <TableCell>{record.email}</TableCell>
                                                    <TableCell>{record.password}</TableCell>
                                                    <TableCell>
                                                        <ButtonGroup variant="text">
                                                            <Button onClick={()=>{setCurrentId(record.id)}}>
                                                                <EditIcon color="primary" />
                                                            </Button>
                                                            <Button>
                                                                <DeleteIcon color="secondary" onClick={()=>onDelete(record.id)}/>
                                                            </Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate.list
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDcandidate : actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(DCandidates));