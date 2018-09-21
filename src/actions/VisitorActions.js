import { VisitorConstants } from '../constants/VisitorConstants';
import { setApiRequestStatusPending, setApiRequestStatusSuccess, setApiRequestStatusError, resetApiRequestStatus } from './ApiRequestStatusActions';

//TODO: Double check return payload with default state object

/* This action is for Sign in Contractor/Visitor */
export const addNewVisitor = (newVisitor = {}) => ({
    type: VisitorConstants.ADD_NEW_VISITOR,
    newVisitorDetails: {
        ...newVisitor
    }
});

/* authoriser_id is authoriser/empoyee name */
export const uploadVisitorSignature = (authoriser_id, { visitorSignatureFile } = {}) => ({
    type: VisitorConstants.UPLOAD_VISITOR_SIGNATURE,
    newVisitorDetails: {
        userName: authoriser_id,
        visitorSignatureFile
    }
});

export const fetchSignedInVisitorList = (authoriser_id) => {
    return dispatch => {

        dispatch(resetApiRequestStatus());
        dispatch(setApiRequestStatusPending(true));
        callVisitorListApi(data => {
            dispatch(actionFetchSignedInVisitorList(data));
            dispatch(setApiRequestStatusPending(false));
            dispatch(setApiRequestStatusSuccess(true));
        });
    }
};

export const fetchSignedOutVisitorList = (authoriser_id) => {
    return dispatch => {

        dispatch(resetApiRequestStatus());
        dispatch(setApiRequestStatusPending(true));
        callVisitorListApi(data => {
            dispatch(actionFetchSignedOutVisitorList(data));
            dispatch(setApiRequestStatusPending(false));
            dispatch(setApiRequestStatusSuccess(true));
        });
    }
};

export const uploadVisitorDoc = (authoriser_id, doc) => ({
    type: VisitorConstants.UPLOAD_VISITOR_DOC,
    authoriser_id,
    doc
});

export const signedOutVisitor = (authoriser_id, contractor_id) => ({
    type: VisitorConstants.SIGNED_OUT_VISITOR,
    authoriser_id,
    contractor_id
});

/* export const fetchSignedOutVisitorList = (authoriser_id) => ({
    type: VisitorConstants.FETCH_SIGNED_OUT_VISITOR_LIST,
    authoriser_id
}); */

const actionFetchSignedInVisitorList = (visitorList) => ({
    type: VisitorConstants.FETCH_SIGNED_IN_VISITOR_LIST,
    visitorList
});

const actionFetchSignedOutVisitorList = (visitorList) => ({
    type: VisitorConstants.FETCH_SIGNED_OUT_VISITOR_LIST,
    visitorList
});


const visitorList = [
    {
        id: 1,
        visitorName: "Alex Newman",
        vendorName: "ABC Vendor",
        jobType: "Plumbing",
        visitorIdNumber: "123",
        visitorIdType: "123",
        visitorIdExpiryDate: 1000, // in ms
        visitDate: '12-Aug-2018',
        startTime: '10:23:30',
        endTime: '',
        docUploadComplete: false,
        hazardPromptSheet: "true"
    },
    {
        id: 2,
        visitorName: "John Luckas",
        vendorName: "XYZ Vendor",
        jobType: "Cleaning",
        visitorIdNumber: "456",
        visitorIdType: "456",
        visitorIdExpiryDate: 1000, // in ms
        visitDate: '15-Aug-2018',
        startTime: '09:20:25',
        endTime: '11:30:00',
        docUploadComplete: false,
        hazardPromptSheet: "false"
    }
];

/* Dummy API calls */
function callVisitorListApi(callback) {
    setTimeout(() => {
        return callback(visitorList);
    }, 1000);
}