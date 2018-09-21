import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';
import { setApiRequestStatusPending, setApiRequestStatusSuccess, setApiRequestStatusError, resetApiRequestStatus } from './ApiRequestStatusActions';

const searchCrieteriaDefaulsState = {
    fromDate: '',
    toDate: '',
    vendorName: "",
    contractorName: "",
    contractorJobType: "",
    branchCode: ""
};

export const actionSearchCriteria = (data = searchCrieteriaDefaulsState) => ({
    type: SearchVisitorConstants.SEARCH_CRITERIA,
    searchCriteria: data
});


export const fetchSearchVisitorList = (searchCriteria) => {
    return dispatch => {

        console.log("Search Action = fetchSearchVisitorList - Criteria =>", searchCriteria);
        dispatch(actionSearchCriteria(searchCriteria));
        dispatch(resetApiRequestStatus());
        dispatch(setApiRequestStatusPending(true));
        callSearchApi(data => {
            console.log("Search Action = fetchSearchVisitorList - List =>", data);
            dispatch(actionFetchSearchList(data));
            dispatch(setApiRequestStatusPending(false));
            dispatch(setApiRequestStatusSuccess(true));
        });
    }
};

const actionFetchSearchList = (searchList) => ({
    type: SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST,
    searchList
});

const searchList = [
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
function callSearchApi(callback) {
    setTimeout(() => {
        return callback(searchList);
    }, 1000);
}