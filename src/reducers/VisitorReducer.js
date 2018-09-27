import { VisitorConstants } from '../constants/VisitorConstants';

const visitorReducerDefaulsState = {};

const VisitorReducer = (state = visitorReducerDefaulsState, action) => {
    switch (action.type) {
        case VisitorConstants.ADD_NEW_VISITOR:
            return {
                ...state
            }

        case VisitorConstants.FETCH_SIGNED_IN_VISITOR_LIST:
            return {
                signedInVisitors: action.visitorList
            }

        case VisitorConstants.FETCH_SIGNED_OUT_VISITOR_LIST:
            return {
                signedOutVisitors: action.visitorList
            }

        case VisitorConstants.SIGNED_OUT_VISITOR:

        case VisitorConstants.UPLOAD_VISITOR_DOC:

        case VisitorConstants.UPLOAD_VISITOR_SIGNATURE:

        default:
            return state;
    }
}

export default VisitorReducer;