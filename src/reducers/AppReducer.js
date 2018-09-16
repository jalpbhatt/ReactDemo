import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import SearchReducer from './SearchReducer';
import VisitorReducer from './VisitorReducer';

export const AppReducer = combineReducers({
    employee: LoginReducer,
    visitorList: VisitorReducer,
    searchVisitorDetails: SearchReducer
});