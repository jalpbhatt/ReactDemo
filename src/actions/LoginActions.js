import { LoginConstants } from '../constants/LoginConstants';
import { setApiRequestStatusPending, setApiRequestStatusSuccess, setApiRequestStatusError, resetApiRequestStatus } from './ApiRequestStatusActions';
import { webService } from '../services/service';

function callLoginApi(userName, password, callback) {
    setTimeout(() => {
        if (userName === 'admin@example.com' && password === 'admin') {
            return callback(null);
        } else {
            return callback(new Error('Invalid email and password'));
        }
    }, 1000);
}

export const authoriserLogin = (userName, password, branchCode) => {

    return dispatch => {
        console.log("Request => Pending");
        dispatch(resetApiRequestStatus());
        dispatch(setApiRequestStatusPending(true));
        //webService.login();
        callLoginApi(userName, password, error => {
            dispatch(setApiRequestStatusPending(false));
            if (!error) {
                console.log("Request => Sucess");
                dispatch(setApiRequestStatusSuccess(true));
                dispatch(actionLogin({ userName: userName, password: password, branchCode: "bsb4321" }))
            } else {
                console.log("Request => Error", error);
                dispatch(setApiRequestStatusError(error));
            }
        });
    }
}

export const authoriserLogout = ({ uniqueEmpId } = {}) => ({
    type: LoginConstants.LOGOUT,
    uniqueEmpId
});

const actionLogin = (
    {
        userName,
        password,
        branchCode
    } = {}
) => ({
    type: LoginConstants.LOGIN,
    employee: {
        userName,
        password,
        branchCode
    }
});