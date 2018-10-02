import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Search } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import NavMenu from '../NavMenu/NavMenu';


const styles = {
    root: {
        flexGrow: 1,
        position: 'relative'
    },
    grow: {
        flexGrow: 1,
        textAlign: 'center',
        display: 'inline-grid'
    },
    menuButton: {
        position: 'absolute',
        marginLeft: -12,
        marginRight: 20,
    },
    loggedInUserName: {
        fontSize: '14px'
    },
    headerText: {
        fontSize: '18px'
    },
    searchBtn: {
        position: 'absolute',
        right: '0.5%'
    }
};

class NavBar extends React.Component {

    state = {
        anchorEl: null,
        isOpen: false
    };

    handleNavClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            isOpen: true
        });
    };

    handleClose = () => {
        this.setState({ anchorEl: null, isOpen: false });
    };

    navigateToHome = () => {
        this.handleClose();
        this.props.history.push('/visitors');
    }

    navigateToLoginOnLogoutClick = () => {
        this.handleClose();
        this.props.history.push('/login');
    }

    capitalizeInitChar = (str) => (
        str.charAt(0).toUpperCase() + str.slice(1)
    );

    render() {
        const { classes, history, showSearch, displayHeaderStr, showHeaderWithTitle } = this.props;
        const { anchorEl, isOpen } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon
                                aria-owns={anchorEl ? 'nav-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleNavClick}
                            />
                        </IconButton>
                        {
                            showHeaderWithTitle ? (
                                <Typography variant="title" color="inherit" className={classes.grow}>
                                    <span className={classes.loggedInUserName}>{this.capitalizeInitChar(displayHeaderStr)}</span>
                                    <span className={classes.headerText}>Visitor List</span>
                                </Typography>
                            ) : (
                                    <Typography variant="title" color="inherit" className={classes.grow}>
                                        <span className={classes.headerText}>{displayHeaderStr}</span>
                                    </Typography>
                                )
                        }

                        {
                            showSearch && (
                                <Tooltip title="Search">
                                    <IconButton aria-label="Search" color="inherit" className={classes.searchBtn}>
                                        <Search onClick={() => { history.push('/search'); }} />
                                    </IconButton>
                                </Tooltip>
                            )
                        }
                    </Toolbar>
                </AppBar>

                {
                    isOpen && (
                        <NavMenu anchorEl={this.state.anchorEl} navigateToHome={this.navigateToHome}
                            navigateToLoginOnLogoutClick={this.navigateToLoginOnLogoutClick} handleClose={this.handleClose} />
                    )
                }
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);