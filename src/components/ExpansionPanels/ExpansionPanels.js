import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelActions } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: '1.4em',
    flexBasis: '66.66%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: '0.9em',
    color: theme.palette.text.secondary,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  spacing: {
    margin: '2px 0 0 15px'
  },
  container: {
    display: 'flex',
    fontSize: 15,
    marginTop: 10
  },
  selectedExpansionPanelHeading: {
    backgroundColor: 'cornflowerblue'
  },
  inlineDiv: {
    marginTop: 10
  },
  inlineContainer: {
    display: 'inline-block',
    marginTop: 1
  },
  rightContainer: {
    marginLeft: 100
  },
  accountCircleDiv: {
    float: 'left'
  },
  labelDiv: {
    float: 'right'
  }
});

class ExpansionPanels extends React.Component {
  state = {
    expanded: 'panel1',
    checkedB: false,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { expanded, checkedB } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary className={(expanded === 'panel1' ? classes.selectedExpansionPanelHeading : '')}>
            <Typography className={classes.heading}>Alex Newman</Typography>
            <Typography className={classes.secondaryHeading}>12-Aug-2018</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>ABC Vendor</label>
                </div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>Alex Newman</label>
                </div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>Repairing the air condition.</label>
                </div>
                <div className={classes.inlineDiv}>
                  <span className={classes.inlineContainer}>
                    <div className={classes.accountCircleDiv}><AccountCircle /></div>
                    <div className={classes.labelDiv}><label className={classes.spacing}>10:23:30</label></div>
                  </span>
                  <span className={classNames(classes.inlineContainer, classes.rightContainer)}>
                    <div className={classes.accountCircleDiv}><AccountCircle /></div>
                    <div className={classes.labelDiv}><label className={classes.spacing}>__:__:__</label></div>
                  </span>
                </div>
                <div>
                  <FormControlLabel control={<Checkbox checked={this.state.checkedB} onChange={this.handleCheckboxChange('checkedB')} value="checkedB" color="primary" />} label="Hazard Prompt Sheet" />
                </div>
              </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanels);