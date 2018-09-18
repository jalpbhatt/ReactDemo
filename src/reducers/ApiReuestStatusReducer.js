import { ApiRequestConstants } from '../constants/ApiRequestConstants';

const ApiRequestStatusReducer = (state = {
    isReuestStatusPending: false,
    isRequestStatusSuccess: false,
    requestError: null
}, action) => {

    switch (action.type) {
        case ApiRequestConstants.SET_API_REQUEST_PENDING:
            return {
                ...state,
                isReuestStatusPending: action.isReuestStatusPending,
            }

        case ApiRequestConstants.SET_API_REQUEST_SUCCESS:
            return {
                ...state,
                isRequestStatusSuccess: action.isRequestStatusSuccess,
            }

        case ApiRequestConstants.SET_API_REQUEST_ERROR:
            return {
                ...state,
                requestError: action.requestError,
            }

        case ApiRequestConstants.RESET_API_REQUEST_STATUS:
            return {
                isReuestStatusPending: false,
                isRequestStatusSuccess: false,
                requestError: null
            }

        default:
            return state;
    }
}

export default ApiRequestStatusReducer;