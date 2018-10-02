import React from 'react';
import ExpansionPanels from '../../ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import Button from '@material-ui/core/Button';

class SignedInVisitorTabContainer extends React.Component {

    onSignOutClick = event => {
        event.preventDefault();
        this.props.handleChangeIndex(2);
    }

    onCapDocsClick = event => {
        event.preventDefault();
        this.props.nav.push('/capturedocs');
    }

    render() {
        const { isLoading, signedInList, tabIndex } = this.props;

        return (

            !isLoading ? (
                <div className="signedInVisitorContainer">
                    <ExpansionPanels visitorList={signedInList} tabIndex={tabIndex} />
                    <div className="buttonDivContainer">
                        <div className="buttonDiv">
                            <div className="signOutBtnDiv">
                                <Button variant="contained" color="primary" className="button" onClick={this.onSignOutClick}>
                                    Sign - Out
                        </Button>
                            </div>
                            <div className="captureDocsBtnDiv">
                                <Button variant="contained" color="primary" className="button" onClick={this.onCapDocsClick}>
                                    Capture Docs
                        </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<LoadingIndicator isShowing={isLoading} />)
        );
    }
}

export default SignedInVisitorTabContainer;