import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';

const searchReducerDefaulsState = {};
const SearchReducer = (state = searchReducerDefaulsState, action) => {
    switch (action.type) {
        
        case SearchVisitorConstants.SEARCH_CRITERIA: {
            return {
                ...state,
                searchCriteria: action.searchCriteria
            }
        }

        case SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST: {
            return {
                ...state,
                searchVisitorList: action.searchList
            }
        }

        default:
            return state;
    }
}

export default SearchReducer;