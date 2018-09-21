import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { CalendarToday } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { actionSearchCriteria, fetchSearchVisitorList } from '../actions/SearchActions';
import NavBar from '../components/NavBar/NavBar';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '60px',
        padding: '20px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    gridItem: {
        width: 300
    },
    menu: {
        width: 200,
    },
    submitButton: {
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        width: '100%',
        marginLeft: theme.spacing.unit
    }
});

class VisitorSearchPage extends React.Component {

    state = {
        fromDate: '',
        toDate: '',
        vendorName: '',
        contractorName: '',
        contractorJobType: '',
        branchCode: '',
        selectedBranch: ''
    }

    onSearchClick = nav => event => {
        event.preventDefault();
        this.props.searchVisitor(this.state);
        nav.push('/searchlist');
    }

    handleChange = prop => event => {
        console.log(prop);
        console.log(event.target.value);
        this.setState({ [prop]: event.target.value });
    };

    renderSearchForm = (props) => {

        const { classes, history, branches } = props;
        const { selectedBranch } = this.state;
        console.log("Selected branch => renderSearchForm = ", selectedBranch);
        console.log("Selected branch => renderSearchForm = ", branches);
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSearchClick(history)}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
                            <Grid item>
                                <CalendarToday />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField
                                    id="fromDate"
                                    label="From Date"
                                    type="date"
                                    className={classes.textField}
                                    onChange={this.handleChange('fromDate')}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
                            <Grid item>
                                <CalendarToday />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField
                                    id="toDate"
                                    label="To Date"
                                    type="date"
                                    className={classes.textField}
                                    onChange={this.handleChange('toDate')}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container spacing={8} className={classes.gridContainer} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField
                                    id="vendorName"
                                    label="Vendor name"
                                    className={classes.textField}
                                    placeholder="Enter vendor name"
                                    onChange={this.handleChange('vendorName')}
                                    margin="normal" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField
                                    id="contractorName"
                                    placeholder="Enter contractor name"
                                    className={classes.textField}
                                    onChange={this.handleChange('contractorName')}
                                    margin="normal" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField
                                    id="contractorJobType"
                                    placeholder="Enter job type"
                                    className={classes.textField}
                                    onChange={this.handleChange('contractorJobType')}
                                    margin="normal" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="branch-code-simple">Age</InputLabel>
                                    <Select
                                        value={this.state.selectedBranch}
                                        onChange={this.handleChange('selectedBranch')}
                                        inputProps={{
                                            name: 'branchCode',
                                            id: 'branch-code-simple',
                                        }} >

                                        {branches && branches.map((branch, index) => {
                                            return (
                                                <MenuItem key={index} value={index + 1}>{branch}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* <Select
                        value={this.state.selectedBranch}
                        onChange={this.handleChange('selectedBranch')} >
                        {branches && branches.map((branch) => {
                            return <MenuItem key={branch} value={branch}>{branch}</MenuItem>
                        })}
                    </Select> */}

                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.submitButton}>
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );

    }

    static getDerivedStateFromProps(props, state) {
        //console.log("getDerivedStateFromProps => Props = ", props);
        //console.log("getDerivedStateFromProps => State = ", state);

        if (props.selectedBranch !== state.selectedBranch) {
            console.log("New state obj =>", {
                selectedBranch: props.selectedBranch,
            });
            return {
                ...state,
                selectedBranch: props.selectedBranch,
            };
        }

        // Return null if the state hasn't changed
        return null;
    }

    render() {
        return (
            <main>
                <NavBar history={this.props.history} showSearch={false} />
                <div className="searchPage">
                    <div className="searchHeader">
                        <div className="title">
                            Search a Visitor
                        </div>
                    </div>
                    <div>
                        {this.renderSearchForm(this.props)}
                    </div>
                </div>
            </main>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchVisitor: (data) => {
            //console.log(" Search Page ## Fetch Visitor List Dispatch =>", data);
            dispatch(fetchSearchVisitorList(data));
        }
    };
}

const mapStateToProps = (state) => {

    //console.log("STATE - Search Criteria ## =>", state);

    return {
        branches: state.employee.branches,
        selectedBranch: state.employee.branchCode
        //state.employee.branchCode
    };
}


VisitorSearchPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorSearchPage));