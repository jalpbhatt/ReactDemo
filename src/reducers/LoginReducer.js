import { LoginConstants } from '../constants/LoginConstants';

//TODO: Check for keep signed in user flow

/* let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};
 */

 //TODO: Fill branched details from Login API response
const loginReducerDefaultState = {
  userName: undefined,
  password: undefined,
  branchCode: undefined,
  isLoggedIn: false,
  employeeType: undefined, // Authoriser or Superuser
  uniqueEmpId: undefined, // UUID from backend
  branches: ["123-564", "437-231", "038-665"]
};

const LoginReducer = (state = loginReducerDefaultState, action) => {
  console.log("STATE => ", state);
  switch (action.type) {  
    case LoginConstants.LOGIN:
      return {
        ...state,
        userName: action.employee.userName,
        password: action.employee.password,
        branchCode: action.employee.branchCode
      }

    case LoginConstants.LOGOUT:
      return {
        ...state,
        uniqueEmpId: action.uniqueEmpId
      }
    default:
      return state;
  }
}

export default LoginReducer;