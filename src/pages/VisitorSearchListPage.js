import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar/NavBar';
import ExpansionPanels from '../components/ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';

import { getDisplayStringForHeader } from '../utils/utils';


class VisitorSearchListPage extends React.Component {

    onBackClick = history => event => {
        event.preventDefault();
        history.goBack();
    }

    renderCriteriaSection = (criteria) => {
        return (
            <div className="criteriaSection">
                <span><b>Criteria:</b> &nbsp; </span>
                <span>{this.getDisplayCriteriaString(criteria)}</span>
            </div>
        )
    }

    getDisplayCriteriaString = (criteria) => {
        let valueAry = Object.keys(criteria).map((key) => {
            return !!criteria[key] && criteria[key];
        }).filter((value) => {
            return !!value;
        });

        if (valueAry.length > 0) {
            valueAry = valueAry.join(", ");
        }
        return valueAry;
    }

    render() {
        const { isRequestPending, criteria, searchList, history } = this.props;

        return (
            <main className="searchPage">
                <NavBar history={this.props.history} showSearch={false} displayHeaderStr={getDisplayStringForHeader(this.props.userDetails)} />
                <div>
                    <div className="searchHeader">
                        <div className="title">
                            Search a Visitor - Results
                            </div>
                    </div>
                </div>
                {!isRequestPending ? (
                    <div>
                        {this.renderCriteriaSection(criteria)}
                        <div className="expansionPanel">
                            <ExpansionPanels visitorList={searchList} />
                        </div>
                        <div className="backButtonDiv">
                            <Button variant="contained" color="primary" className="button"
                                onClick={this.onBackClick(history)}>
                                Back
                            </Button>
                        </div>
                    </div>
                ) : <LoadingIndicator isShowing={isRequestPending} />}
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    const { apiRequestStatus, searchVisitorDetails, employee } = state;

    return {
        criteria: searchVisitorDetails.searchCriteria,
        searchList: searchVisitorDetails.searchVisitorList,
        isRequestPending: apiRequestStatus.isReuestStatusPending,
        requestError: apiRequestStatus.requestError,
        userDetails: employee
    };
}
export default connect(mapStateToProps, null)(VisitorSearchListPage);