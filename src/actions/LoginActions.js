import { LoginConstants } from '../constants/LoginConstants';

export const authoriserLogin = (
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

export const authoriserLogout = ({ uniqueEmpId } = {}) => ({
    type: LoginConstants.LOGOUT,
    uniqueEmpId
});