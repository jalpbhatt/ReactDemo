import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { CalendarToday } from '@material-ui/icons';

import { addNewVisitor } from '../../../actions/VisitorActions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
    },
    gridItem: {
        width: 300,
        [theme.breakpoints.up('xs')]: {
            width: 250
        }
    },
    menu: {
        width: 200,
    },
    submitButton: {
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing.unit,
    }
});

class NewVisitorTabContainer extends React.Component {

    state = {
        currentDate: '12 - Aug - 2018',
        vendorName: '',
        contractorName: '',
        contractorJobType: '',
        contractorIDNumber: '',
        contractorIDType: '',
        contractorIDExpiryDate: ''
    }

    onSignInClick = nav => event => {
        event.preventDefault();
        this.props.signInNewVisitor(this.state);
        nav.push('/signature');
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    renderTextFields = (props) => {

        const { classes, nav } = props;
        return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.onSignInClick(nav)}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Grid container spacing={8} className={classes.gridContainer} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item className={classes.gridItem}>
                                <TextField 
                                    id="vendorName" 
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
                                <TextField 
                                    id="contractorIDNumber" 
                                    placeholder="Enter contractor's ID number" 
                                    className={classes.textField} 
                                    onChange={this.handleChange('contractorIDNumber')}
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
                                    id="contractorIDType" 
                                    placeholder="Enter contractor's ID type" 
                                    className={classes.textField} 
                                    onChange={this.handleChange('contractorIDType')}
                                    margin="normal" />
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
                                    id="contractorIDExpiryDate" 
                                    placeholder="Enter contractor's ID expiry date" 
                                    type="date" 
                                    className={classes.textField} 
                                    onChange={this.handleChange('contractorIDExpiryDate')} 
                                    margin="normal" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.submitButton}>
                        <Button type="submit" variant="contained" color="primary" className={classes.button}>
                            Sign - In
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );

    }

    render() {
        return (
            <div className="newVisitorContainer">
                <div className="newVisitiorHeader">
                    <div className="title">
                        New Visitor
                    </div>
                    <div className="currentDate">
                        {this.state.currentDate}
                    </div>
                </div>
                <div>
                    {this.renderTextFields(this.props)}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInNewVisitor: (data) => {
            dispatch(addNewVisitor(data))
        }
    };
}

NewVisitorTabContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(null, mapDispatchToProps)(withStyles(styles)(NewVisitorTabContainer));