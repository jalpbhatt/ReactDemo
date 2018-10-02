import React from 'react';
import ExpansionPanels from '../../ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

const SignedOutVisitorTabContainer = (props) => {
    const { isLoading, signedOutList, tabIndex } = props;
    return (
        !isLoading ? (
            <div>
                <ExpansionPanels visitorList={signedOutList} tabIndex={tabIndex} />
            </div>
        ) : (<LoadingIndicator isShowing={isLoading}/>)
    );
}

export default SignedOutVisitorTabContainer;