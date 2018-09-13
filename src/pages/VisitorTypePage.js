import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


const VisitorTypePage = withRouter(({ history }) => (

    <div>
        <div className='visitorTypeContainer'>
        <h2>Choose the visitor type</h2>
            <Button className="btnTypeVisitor" variant="outlined" onClick={() => { history.push('/login') }}>Contractor</Button>
            <p>Requires Authorizer's Login</p>

            {/* For now - navigating to the login - Need to confirm! */}
            <Button className="btnTypeVisitor" variant="outlined" onClick={() => { history.push('/login') }}>Visitor</Button>
        </div>
    </div>
))


export default VisitorTypePage;