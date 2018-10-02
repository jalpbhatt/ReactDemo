import React from 'react';
import { connect } from 'react-redux';
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

import { fetchSignedInVisitorList, fetchSignedOutVisitorList } from '../actions/VisitorActions';
import { getDisplayStringForHeader } from '../utils/utils';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  tabsRoot: { textTransform: 'initial' },
  tabContainer: { padding: 0 }
});

class VisitorListPage extends React.Component {

  state = {
    value: 0
  };

  handleChange = (event, value) => {

    event.preventDefault();
    this.loadTabsData(value);
  };

  loadTabsData = value => {
    if (value === 1) {
      this.props.fetchSingedInList(1);
    } else if (value === 2) {
      this.props.fetchSingedOutList(2);
    }
    this.setState({ value });
  }

  handleChangeIndex = index => {
    this.loadTabsData(index);
  };

  componentWillMount() {
    //console.log("VisitorList => componentWillMount = ", this.props.changedTabIndex);
    this.loadTabsData(this.props.changedTabIndex);
  }

  renderTabsWithContainer = (props) => {

    const { classes, theme, history, singedInVisitorList, singedOutVisitorList, isRequestPending } = props;

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

          <TabContainer dir={theme.direction}>
            <NewVisitorTabContainer nav={history} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SingedInVisitorTabContainer
              isLoading={isRequestPending}
              nav={history}
              signedInList={singedInVisitorList}
              handleChangeIndex={this.handleChangeIndex}
              tabIndex={this.state.value} />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <SingedOutVisitorTabContainer
              isLoading={isRequestPending}
              nav={history}
              signedOutList={singedOutVisitorList} 
              tabIndex={this.state.value} />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }

  render() {
    return (
      <main>
        <NavBar history={this.props.history} showSearch={true} displayHeaderStr={getDisplayStringForHeader(this.props.userDetails)}
          showHeaderWithTitle={true} />
        {this.renderTabsWithContainer(this.props)}
      </main>
    );
  }
}

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

VisitorListPage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { apiRequestStatus, visitorList, employee } = state;

  return {
    isRequestPending: apiRequestStatus.isReuestStatusPending,
    isRequestSuccess: apiRequestStatus.isRequestStatusSuccess,
    requestError: apiRequestStatus.requestError,
    singedInVisitorList: visitorList.signedInVisitors,
    singedOutVisitorList: visitorList.signedOutVisitors,
    userDetails: employee,
    changedTabIndex: visitorList.changedTabIndex
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingedInList: (id) => dispatch(fetchSignedInVisitorList(id)),
    fetchSingedOutList: (id) => dispatch(fetchSignedOutVisitorList(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)
  (withStyles(styles, { withTheme: true })(VisitorListPage));