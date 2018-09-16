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

  signedInVisitorsList = [
    {
      id: 1,
      visitorName: "Alex Newman",
      vendorName: "DX Vendor",
      jobType: "Plumbing",
      visitorIdNumber: "123",
      visitorIdType: "123",
      visitorIdExpiryDate: 1000, // in ms
      visitDate: '12-Aug-2018',
      startTime: '10:23:30',
      endTime: '',
      docUploadComplete: false,
      hazardPromptSheet: true
    },
    {
      id: 2,
      visitorName: "John Cena",
      vendorName: "World Wrestling Entertainment",
      jobType: "Wrestling",
      visitorIdNumber: "456",
      visitorIdType: "456",
      visitorIdExpiryDate: 1000, // in ms
      visitDate: '15-Aug-2018',
      startTime: '09:20:25',
      endTime: '11:30:00',
      docUploadComplete: false,
      hazardPromptSheet: false
    }
  ];

  render() {
    const { classes } = this.props;
    const { expanded, signedInVisitorsList } = this.state;
    let expansionPanel = [];

    for (let i = 0; i < this.signedInVisitorsList.length; i++) {
      let children = []
      expansionPanel.push(
        <ExpansionPanel expanded={expanded === i} onChange={this.handleChange(i)}>
          <ExpansionPanelSummary className={(expanded === i ? classes.selectedExpansionPanelHeading : '')}>
            <Typography className={classes.heading}>{this.signedInVisitorsList[i]['visitorName']}</Typography>
            <Typography className={classes.secondaryHeading}>{this.signedInVisitorsList[i]['visitDate']}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>{this.signedInVisitorsList[i]['vendorName']}</label>
                </div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>{this.signedInVisitorsList[i]['visitorName']}</label>
                </div>
                <div className={classes.container}>
                  <AccountCircle />
                  <label className={classes.spacing}>{this.signedInVisitorsList[i]['jobType']}</label>
                </div>
                <div className={classes.inlineDiv}>
                  <span className={classes.inlineContainer}>
                    <div className={classes.accountCircleDiv}><AccountCircle /></div>
                    <div className={classes.labelDiv}><label className={classes.spacing}>{this.signedInVisitorsList[i]['startTime']}</label></div>
                  </span>
                  <span className={classNames(classes.inlineContainer, classes.rightContainer)}>
                    <div className={classes.accountCircleDiv}><AccountCircle /></div>
                    <div className={classes.labelDiv}>
                      <label className={classes.spacing}>
                        {
                          (this.signedInVisitorsList[i]['endTime'] !== '') ? this.signedInVisitorsList[i]['endTime'] : '__:__:__'
                        }
                      </label>
                    </div>
                  </span>
                </div>
                <div>
                  <FormControlLabel control={<Checkbox checked={this.signedInVisitorsList[i]['hazardPromptSheet']} onChange={this.handleCheckboxChange(this.signedInVisitorsList[i]['hazardPromptSheet'])} value={this.signedInVisitorsList[i]['hazardPromptSheet']} color="primary" />} label="Hazard Prompt Sheet" />
                </div>
              </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    }
    return expansionPanel
  }
}

ExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanels);