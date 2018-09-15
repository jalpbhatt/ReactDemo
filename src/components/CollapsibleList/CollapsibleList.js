import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  spacing: {
    margin: '2px 0 0 15px'
  },
  container: {
    display: 'flex',
    fontSize: 15
  }
});

class CollapsibleList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  renderContractorDetails = (classes) => {

    return (
      <section>
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
        <div className={classes.container}>
          <AccountCircle />
          <label className={classes.spacing}>10:23:30</label>
        </div>
        <div className={classes.container}>
          <AccountCircle />
          <label className={classes.spacing}>__:__:__</label>
        </div>
      </section>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon> 
            <ListItemText inset primary="Alex Newman" />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                {this.renderContractorDetails(classes)}
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

CollapsibleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsibleList);