import { ApiRequestConstants } from '../constants/ApiRequestConstants';

export const setApiRequestStatusPending = (isReuestStatusPending) => ({
    type: ApiRequestConstants.SET_API_REQUEST_PENDING,
    isReuestStatusPending
});

export const setApiRequestStatusSuccess = (isRequestStatusSuccess) => ({
    type: ApiRequestConstants.SET_API_REQUEST_SUCCESS,
    isRequestStatusSuccess
});

export const setApiRequestStatusError = (requestError) => ({
    type: ApiRequestConstants.SET_API_REQUEST_ERROR,
    requestError
});

export const resetApiRequestStatus = () => ({
    type: ApiRequestConstants.RESET_API_REQUEST_STATUS
});