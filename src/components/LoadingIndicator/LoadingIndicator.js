import React from 'react';
import PropTypes from 'prop-types';
import spinner from '../../../assets/images/spinner.gif'

const LoadingIndicator = (props) => {
    return (
        <div>
            {
                props.isShowing &&
                <div className="container">
                    <img src={spinner} />
                </div>
            }
        </div>
    );
}

LoadingIndicator.propTypes = {
    isShowing: PropTypes.bool
};

export default LoadingIndicator;