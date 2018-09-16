import { SearchVisitorConstants } from '../constants/SearchVisitorConstants';

const searchReducerDefaulsState = {};

const SearchReducer = (state = searchReducerDefaulsState, action) => {

    switch (action.type) {
        
        case SearchVisitorConstants.FETCH_SEARCH_VISITOR_LIST:

        default:
            return state;
    }
}

export default SearchReducer;