import { VisitorConstants } from '../constants/VisitorConstants';

const visitorReducerDefaulsState = {
    changedTabIndex: 0
};

const VisitorReducer = (state = visitorReducerDefaulsState, action) => {
    //console.log("Action => ", action);
    switch (action.type) {
        case VisitorConstants.ADD_NEW_VISITOR:
            return {
                ...state
            }

        case VisitorConstants.FETCH_SIGNED_IN_VISITOR_LIST:
            return {
                ...state,
                signedInVisitors: action.visitorList
            }

        case VisitorConstants.FETCH_SIGNED_OUT_VISITOR_LIST:
            return {
                ...state,
                signedOutVisitors: action.visitorList
            }

        case VisitorConstants.SIGNED_OUT_VISITOR:

        case VisitorConstants.UPLOAD_VISITOR_DOC:

        case VisitorConstants.UPLOAD_VISITOR_SIGNATURE:

        case VisitorConstants.CHANGE_TAB:
            return { 
                ...state,
                changedTabIndex: action.index
            }
        default:
            return state;
    }
}

export default VisitorReducer;