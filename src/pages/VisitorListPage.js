import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import NewVisitorTabContainer from '../components/VisitorTabs/VisitorTabsContainer/NewVisitorTabContainer';
import SingedInVisitorTabContainer from '../components/VisitorTabs/VisitorTabsContainer/SingedInVisitorTabContainer';
import SingedOutVisitorTabContainer from '../components/VisitorTabs/VisitorTabsContainer/SingedOutVisitorTabContainer';
import { withRouter } from 'react-router-dom';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, paddingTop: 50 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: { textTransform: 'initial' },
  tabContainer: { padding: 0 }
});

class VisitorListPage extends React.Component {

  // Temporary
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  renderTabsWithContainer = (props) => {

    const { classes, theme, history } = props;

    //console.log("Visitor Tabs: Props for Routing", this.props);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="New Visitor" classes={{ root: classes.tabsRoot }} />
            <Tab label="Signed-In Visitor" classes={{ root: classes.tabsRoot }} />
            <Tab label="Signed-Out Visitor" classes={{ root: classes.tabsRoot }} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >

          <TabContainer dir={theme.direction}><NewVisitorTabContainer nav={history}/></TabContainer>
          <TabContainer dir={theme.direction}><SingedInVisitorTabContainer nav={history}/></TabContainer>
          <TabContainer dir={theme.direction}><SingedOutVisitorTabContainer nav={history}/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }

  render() {

    //console.log("Visitor List Page: Props for Routing", this.props);

    return (
      <main>
        <NavBar />
        {this.renderTabsWithContainer(this.props)}
      </main>
    );
  }
}

VisitorListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const routeWrapperVisitorListPage = withStyles(styles, { withTheme: true })(VisitorListPage);
export default withRouter(routeWrapperVisitorListPage);