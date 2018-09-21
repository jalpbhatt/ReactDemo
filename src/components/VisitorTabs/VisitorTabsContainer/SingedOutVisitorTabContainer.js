import React from 'react';
import ExpansionPanels from '../../ExpansionPanels/ExpansionPanels';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

const SignedOutVisitorTabContainer = (props) => {
    const { isLoading, signedOutList } = props;
    return (
        !isLoading ? (
            <div>
                <ExpansionPanels visitorList={signedOutList} />
            </div>
        ) : (<LoadingIndicator isShowing={isLoading}/>)
    );
}

export default SignedOutVisitorTabContainer;