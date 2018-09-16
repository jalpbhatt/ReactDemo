import React from 'react';
import ExpansionPanels from '../../ExpansionPanels/ExpansionPanels';
import Button from '@material-ui/core/Button';

const SignedInVisitorTabContainer = () => {

    return (
        <div className="signedInVisitorContainer">
            <ExpansionPanels />
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
    );
}

export default SignedInVisitorTabContainer;