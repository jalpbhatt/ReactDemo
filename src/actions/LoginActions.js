import { LoginConstants } from '../constants/LoginConstants';
import { NotificationActions } from './NotificationActions';

export const LoginActions = {
    login,
    logout
};

function loginAuthoriser(userName, password) {

}

function logoutAuthoriser(authToken) {

}

function request(user) {
    return { type: loginConstants.LOGIN_REQUEST, user }
}

function sucess(user) {
    return { type: loginConstants.LOGIN_SUCCESS, user }
}

function failure(error) {
    return { type: loginConstants.LOGIN_FAILURE, error }
}
