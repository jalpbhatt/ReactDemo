import React from 'react';
import { withRouter } from 'react-router-dom';

const LandingPage = withRouter(({ history }) => (

    <div>
        <h1 className="container" onClick={() => { history.push('/visitortype') }}>Branch Visit App</h1>
    </div>

))

export default LandingPage;