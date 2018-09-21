import React from 'react';
import ExpansionPanels from '../../ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import Button from '@material-ui/core/Button';

const SignedInVisitorTabContainer = (props) => {

    const { isLoading, signedInList } = props;
    console.log("isLoading =>", isLoading);
    return (


        !isLoading ? (
            <div className="signedInVisitorContainer">
                <ExpansionPanels visitorList={signedInList} />
                <div className="buttonDivContainer">
                    <div className="buttonDiv">
                        <div className="signOutBtnDiv">
                            <Button variant="contained" color="primary" className="button">
                                Sign - Out
                    </Button>
                        </div>
                        <div className="captureDocsBtnDiv">
                            <Button variant="contained" color="primary" className="button">
                                Capture Docs
                    </Button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (<LoadingIndicator isShowing={isLoading}/>)
    );
}

export default SignedInVisitorTabContainer;