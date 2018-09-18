import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SearchReducer from './SearchReducer';
import VisitorReducer from './VisitorReducer';
import ApiRequestStatusReducer from './ApiReuestStatusReducer';

export const AppReducer = combineReducers({
    apiRequestStatus: ApiRequestStatusReducer,
    employee: LoginReducer,
    visitorList: VisitorReducer,
    searchVisitorDetails: SearchReducer
});