import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';

export const searchVisitorList = (
    {
        fromDate = undefined,
        toDate = undefined,
        visitorName = "",
        vendorName = "",
        jobType = "",
        branchCode = ""
    } = {}
) => ({
    type: SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST,
    searchVisitorDetails: {
        fromDate,
        toDate,
        visitorName,
        vendorName,
        jobType,
        branchCode
    }
});