import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import VisitorTypePage from '../pages/VisitorTypePage';
import LoginPage from '../pages/LoginPage';
import VisitorListPage from '../pages/VisitorListPage';


/* 

import VisitorCaptureDocPage from '../pages/VisitorCaptureDocPage';
import VisitorSearchPage from '../pages/VisitorSearchPage';
import VisitorSearchListPage from '../pages/VisitorSearchListPage';
 */
export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route path='/' component={LandingPage} exact />
                <Route path='/visitortype' component={VisitorTypePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/visitors' component={VisitorListPage} />
                {/* 
                
                <Route path='/visitors/capturedocs' component={VisitorCaptureDocPage} />
                <Route path='/visitors/search' component={VisitorSearchPage} />
                <Route path='/visitors/searchlist' component={VisitorSearchListPage} /> */}
            </Switch>
        </Fragment>
    </BrowserRouter>
);

//export default AppRouter;