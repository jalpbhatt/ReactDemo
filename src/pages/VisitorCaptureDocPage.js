import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import NavBar from '../components/NavBar/NavBar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { changeTab, uploadVisitorDoc } from '../actions/VisitorActions';

class VisitorCaptureDocPage extends React.Component {

    state = {
        isUpload: false
    }

    onFileUpload = event => {
        event.preventDefault();
        this.props.uploadDocument(this.props.authId, event.target.value);

        if (event.target.value) {
            this.changeState(true);
        }
        console.log("Selected File => ", event.target.value);
    }

    onBackClick = history => event => {
        event.preventDefault();
        this.changeState(false);
        this.props.navigateToSignedInTab(1);
        history.goBack();
    }

    changeState = value => {
        this.setState({ isUpload: value });
    }

    render() {
        const { history } = this.props;
        const { isUpload } = this.state;

        return (
            <div className="captureDoc">
                <NavBar history={this.props.history} showSearch={false} displayHeaderStr="Sign - In"
                    showHeaderWithTitle={false} />
                <div>
                    <span className="docLabel">Capture Documents</span>
                </div>
                <div className="chooseFileContainer">
                    {
                        isUpload ? (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isUpload}
                                        value="isUpload"
                                        color="primary"
                                    />}
                                label="Hazard Prompt Sheet Uploaded"
                            />
                        ) : (
                                <div>
                                    <input
                                        accept="*"
                                        className="inputType"
                                        id="chooseFile"
                                        multiple
                                        type="file"
                                        onChange={this.onFileUpload}
                                    />
                                    <label htmlFor="chooseFile">
                                        <Button variant="contained" color="primary" component="span">
                                            Choose File
                                        </Button>
                                    </label>
                                </div>
                            )
                    }
                </div>
                <div className="backButtonDiv">
                    <Button variant="contained" color="primary" onClick={this.onBackClick(history)}>
                        Back
                    </Button>
                </div>
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
        navigateToSignedInTab: (index) => dispatch(changeTab(index)),
        uploadDocument: (authId, docPath) => dispatch(uploadVisitorDoc(authId, docPath))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorCaptureDocPage);
