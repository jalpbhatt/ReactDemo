import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { CalendarToday } from '@material-ui/icons';
import classNames from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
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
  }
});

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  /* value={this.state.name} 
  */

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container spacing={8} className={classes.gridContainer} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="name" className={classes.textField} placeholder="Enter vendor name" onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="contractorName" placeholder="Enter contractor name" className={classes.textField} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="contractorJobType" placeholder="Enter job type" className={classes.textField} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="contractorIDNumber" placeholder="Enter contractor's ID number" className={classes.textField} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item className={classes.gridItem}>
                <TextField id="contractorIDType" placeholder="Enter contractor's ID type" className={classes.textField} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={8} alignItems="flex-end">
              <Grid item>
                <CalendarToday />
              </Grid>
              <Grid item className={classes.gridItem}>
              <TextField id="contractorIDExpiryDate" placeholder="Enter contractor's ID expiry date" type="date" className={classes.textField} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.submitButton}>
            <Button variant="contained" color="primary" className={classes.button}>
              Sign-In
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
