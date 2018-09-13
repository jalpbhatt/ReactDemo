import { NotificationConstants } from '../constants/NotificationConstants';

export const NotificationActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: notificationConstants.SUCCESS, message };
}

function error(message) {
    return { type: notificationConstants.ERROR, message };
}

function clear() {
    return { type: notificationConstants.CLEAR };
}