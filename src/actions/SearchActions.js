import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';

export const searchVisitorList = (
    {
        fromDate = undefined,
        toDate = undefined,
        vendorName = "",
        contractorName = "",
        contractorJobType = "",
        branchCode = ""
    } = {}
) => ({
    type: SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST,
    searchVisitorDetails: {
        fromDate,
        toDate,
        vendorName,
        contractorName,
        contractorJobType,
        branchCode
    }
});