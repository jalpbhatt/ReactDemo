import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
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

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Grid container className={classes.gridContainer} spacing={0} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
              <TextField id="name" type="date" label="Date" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal" />
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
