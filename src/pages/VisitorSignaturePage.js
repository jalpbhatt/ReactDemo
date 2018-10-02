import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas';

import NavBar from '../components/NavBar/NavBar';
import { uploadVisitorSignature, changeTab } from '../actions/VisitorActions';

class VisitorSignaturePage extends React.Component {

    state = { trimmedDataURL: null }
    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }
    trim = () => {
        this.setState({
            trimmedDataURL: this.sigPad.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }

    onOkClick = event => {
        event.preventDefault();
        this.trim();
        this.props.navigateToSignedInTab(1);
        this.props.history.push('/visitors');
    }

    render() {
        console.log("Signature => ", this.props);
        let { trimmedDataURL } = this.state
        return (
            <div className="sigContainerDiv">
                <NavBar history={this.props.history} showSearch={false} displayHeaderStr="Sign - In"
                    showHeaderWithTitle={false} />
                <div>
                    <span className="sigContainerLabel">Contractor's Signature</span>
                </div>
                <div className="sigContainer">
                    <SignatureCanvas canvasProps={{ className: "sigPad" }}
                        ref={(ref) => { this.sigPad = ref }} />
                    <div className="sigTime">
                        <span>Time in:</span>
                        <span>10:00:00 Hrs</span>
                    </div>
                </div>
                <div className="sigBtnDiv">
                    <Button variant="contained" color="primary" className="button" onClick={this.onOkClick}>Ok</Button>
                    <Button variant="contained" className="button" onClick={this.clear}>Clear</Button>
                </div>
                {/* trimmedDataURL
                    ? <img className="sigImage"
                        src={trimmedDataURL} />
                    : null */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { employee } = state;

    return {
        authId: employee.userName
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadSignature: (authId, signature) => dispatch(uploadVisitorSignature(authId,signature)),
        navigateToSignedInTab: (index) => dispatch(changeTab(index))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorSignaturePage);
