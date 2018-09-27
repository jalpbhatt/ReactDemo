import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import { authoriserLogin } from '../actions/LoginActions';

const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    message: {
        fontSize: "15px",
        marginTop: '10px',
        textAlign: 'right',
        color: theme.palette.secondary.main
    }
});

class LoginPage extends React.Component {

    state = {
        username: "",
        password: "",
        branchCode: ""
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    onLoginClick = event => {
        event.preventDefault();
        if (!!this.state.username && !!this.state.password && !!this.state.branchCode) {
            this.props.login(this.state.username, this.state.password, this.state.branchCode);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.isRequestSuccess) {
            this.props.history.push('/visitors');
        }
    }

    render() {
        const { classes, isRequestPending, loginError } = this.props;
        const { username, password, branchCode } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="headline">Login</Typography>
                        <form className={classes.form} onSubmit={this.onLoginClick}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoFocus
                                    value={username}
                                    onChange={this.handleChange('username')}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={this.handleChange('password')}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="branchCode">BSB</InputLabel>
                                <Input
                                    name="branchCode"
                                    type="branchCode"
                                    id="branchCode"
                                    value={branchCode}
                                    onChange={this.handleChange('branchCode')}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                            >
                                Log in
                            </Button>

                            <div className={classes.message}>
                                {isRequestPending && <div>Please wait...</div>}
                                {loginError && <div>{loginError.message}</div>}
                            </div>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {

    const { apiRequestStatus } = state;

    return {
        isRequestPending: apiRequestStatus.isReuestStatusPending,
        isRequestSuccess: apiRequestStatus.isRequestStatusSuccess,
        loginError: apiRequestStatus.requestError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userName, password, branchCode) => dispatch(authoriserLogin(userName, password, branchCode))
    };
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));