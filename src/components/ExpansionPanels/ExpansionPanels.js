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
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
    [theme.breakpoints.up('xs')]: {
      paddingRight: '0 !important'
    }
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
    marginLeft: 100,
    [theme.breakpoints.up('xs')]: {
      marginLeft: 55
    }
  },
  accountCircleDiv: {
    float: 'left'
  },
  labelDiv: {
    float: 'right'
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row'
  }
});


class ExpansionPanels extends React.Component {

  state = {
    expanded: 0,
    materialRegViewed: 'na',
    isHazardSheet: false
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleRadioChange = name => event => {
    this.setState({ [name]: event.target.value });
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
                <FormControlLabel
                  control={
                    <Checkbox checked={visitor.hazardPromptSheet}
                      onChange={this.handleCheckboxChange(visitor.hazardPromptSheet)}
                      value={visitor.hazardPromptSheet}
                      color="primary"
                    />
                  }
                  label="Hazard Prompt Sheet"
                />
              </div>
              <div>
                <FormControl>
                  <FormLabel>Hazardous Material Register Viewed</FormLabel>
                  <RadioGroup
                    aria-label="hazardousRegViewed"
                    className={classes.group}
                    value={this.state.materialRegViewed}
                    onChange={this.handleRadioChange("materialRegViewed")}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                    <FormControlLabel value="na" control={<Radio />} label="NA" />
                  </RadioGroup>
                </FormControl>
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