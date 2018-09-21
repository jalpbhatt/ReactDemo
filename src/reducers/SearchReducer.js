import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';

const searchReducerDefaulsState = {
    fromDate: '',
    toDate: '',
    vendorName: '',
    contractorName: '',
    contractorJobType: '',
    branchCode: ''
};

const SearchReducer = (state = searchReducerDefaulsState, action) => {

    switch (action.type) {

        case SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST: {
            return {
                fromDate: action.searchVisitorDetails.fromDate,
                toDate: action.searchVisitorDetails.toDate,
                vendorName: action.searchVisitorDetails.vendorName,
                contractorName: action.searchVisitorDetails.contractorName,
                contractorJobType: action.searchVisitorDetails.contractorJobType,
                branchCode: action.searchVisitorDetails.branchCode,
            }
        }

        default:
            return state;
    }
}

export default SearchReducer;