import React, { Fragment, Component } from 'react';
import { Provider } from 'react-redux';
import { AppStore } from '../store/AppStore';
import { AppRouter } from '../routers/AppRouter';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

const App = () => (
    <Provider store={AppStore()}>
        <Fragment>
            <AppRouter />
        </Fragment>
    </Provider>
);

export default App;