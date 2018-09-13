import { LoginConstants } from '../constants/LoginConstants';

//TODO: Check for keep signed in user flow

/* let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
 */

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LoginConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case LoginConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LoginConstants.LOGIN_FAILURE:
      return {};
    case LoginConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}