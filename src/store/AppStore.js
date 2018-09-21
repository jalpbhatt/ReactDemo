import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { AppReducer } from '../reducers/AppReducer';
import { authoriserLogin, authoriserLogout }  from '../actions/LoginActions';

export const AppStore = () => {
    const store = createStore(AppReducer, applyMiddleware(thunk, promiseMiddleware()));
    store.subscribe(() => {
        console.log("App store => ", store.getState());
    });

    // For testing
    /* store.dispatch(authoriserLogin({ userName: "jalp_bhatt", password: "jalp@abc", branchCode: "bsb4321" }));
    store.dispatch(authoriserLogout({uniqueEmpId: "abc-123-@341-868"})); */
    return store;
};

//export default AppStore;