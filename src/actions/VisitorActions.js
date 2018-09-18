import { VisitorConstants } from '../constants/VisitorConstants';

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

export const fetchSignedInVisitorList = (authoriser_id) => ({
    type: VisitorConstants.FETCH_SIGNED_IN_VISITOR_LIST,
    authoriser_id
});

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

export const fetchSignedOutVisitorList = (authoriser_id) => ({
    type: VisitorConstants.FETCH_SIGNED_OUT_VISITOR_LIST,
    authoriser_id
});