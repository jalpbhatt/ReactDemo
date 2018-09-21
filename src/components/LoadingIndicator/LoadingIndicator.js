import React from 'react';
import PropTypes from 'prop-types';

const LoadingIndicator = (props) => (
    <div>
        {
            /* props.isShowing */ true &&
            <div style={{marginTop: '10px', textAlign: 'center', color: '#26A69A'}}>
                <i className="fa fa-spinner fa-spin">Loading...</i>
            </div>
        }
    </div>
);

LoadingIndicator.propTypes = {
    isShowing: PropTypes.bool
};

export default LoadingIndicator;