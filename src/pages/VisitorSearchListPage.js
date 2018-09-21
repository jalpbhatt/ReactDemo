import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar/NavBar';
import ExpansionPanels from '../components/ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator';


class VisitorSearchListPage extends React.Component {

    renderCriteriaSection = (criteria) => {
        return (
            <div className="criteriaSection">
                <span><b>Criteria:{"  "} </b></span>
                {(criteria.fromDate && !!criteria.fromDate) && <span>{criteria.fromDate},{"  "}</span>}
                {(criteria.toDate && !!criteria.toDate) && <span>,{criteria.toDate}{"  "}</span>}
                {(criteria.vendorName && !!criteria.vendorName) && <span>,{criteria.vendorName}{"  "}</span>}
                {(criteria.contractorName && !!criteria.contractorName) && <span>,{criteria.contractorName}{"  "}</span>}
                {(criteria.contractorJobType && !!criteria.contractorJobType) && <span>,{criteria.contractorJobType}{"  "}</span>}
                {(criteria.branchCode && !!criteria.branchCode) && <span>,{criteria.branchCode}</span>}
            </div>
        )
    }

    render() {

        const { isRequestPending, criteria, searchList, history } = this.props;

        return (
            <main className="searchPage">
                <NavBar history={this.props.history} showSearch={false} />
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
                                onClick={this.props.onBackClick(history)}>
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

    const { apiRequestStatus, searchVisitorDetails } = state;

    console.log("STATE - Search List =>", state);

    return {
        criteria: searchVisitorDetails.searchCriteria,
        searchList: searchVisitorDetails.searchVisitorList,
        isRequestPending: apiRequestStatus.isReuestStatusPending,
        requestError: apiRequestStatus.requestError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBackClick: (history) => {
            console.log("Back Clicked => ", history);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorSearchListPage);