import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
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
    expanded: 0
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  renderExpansionPanelDynamically = () => {

    const { classes, visitorList } = this.props;
    const { expanded } = this.state;
    let expansionPanel = [];

    if (visitorList && visitorList.map((visitor, index) => {

      expansionPanel.push(
        <ExpansionPanel key={index} expanded={expanded === index} onChange={this.handleChange(index)}>
          <ExpansionPanelSummary key={index} className={(expanded === index ? classes.selectedExpansionPanelHeading : '')}>
            <Typography className={classes.heading}>{visitor.visitorName}</Typography>
            <Typography className={classes.secondaryHeading}>{visitor.visitDate}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails key={index}>
            <div>
              <div className={classes.container}>
                <AccountCircle />
                <label className={classes.spacing}>{visitor.vendorName}</label>
              </div>
              <div className={classes.container}>
                <AccountCircle />
                <label className={classes.spacing}>{visitor.visitorName}</label>
              </div>
              <div className={classes.container}>
                <AccountCircle />
                <label className={classes.spacing}>{visitor.jobType}</label>
              </div>
              <div className={classes.inlineDiv}>
                <span className={classes.inlineContainer}>
                  <div className={classes.accountCircleDiv}><AccountCircle /></div>
                  <div className={classes.labelDiv}><label className={classes.spacing}>{visitor.startTime}</label></div>
                </span>
                <span className={classNames(classes.inlineContainer, classes.rightContainer)}>
                  <div className={classes.accountCircleDiv}><AccountCircle /></div>
                  <div className={classes.labelDiv}>
                    <label className={classes.spacing}>
                      {
                        (visitor.endTime !== '') ? visitor.endTime : '__:__:__'
                      }
                    </label>
                  </div>
                </span>
              </div>
              <div>
                <FormControlLabel control={<Checkbox checked={visitor.hazardPromptSheet} onChange={this.handleCheckboxChange(visitor.hazardPromptSheet)} value={visitor.hazardPromptSheet} color="primary" />} label="Hazard Prompt Sheet" />
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );

    }))

      return expansionPanel;
  }

  render() {
    return (
      <div>
        {this.renderExpansionPanelDynamically()}
      </div>
    );
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanels);