import React from 'react';
import Button from '@material-ui/core/Button';
import SignatureCanvas from 'react-signature-canvas'

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
        console.log("Ok Clicked!!");
    }

    render() {
        let { trimmedDataURL } = this.state
        return <div className="container">
            <div className="sigContainer">
                <SignatureCanvas canvasProps={{ className: "sigPad" }}
                    ref={(ref) => { this.sigPad = ref }} />
            </div>
            <div>
                <button className="buttons" onClick={this.clear}>
                    Clear
        </button>
                <button className="buttons" onClick={this.trim}>
                    Trim
        </button>
            </div>
            {trimmedDataURL
                ? <img className="sigImage"
                    src={trimmedDataURL} />
                : null}
        </div>
    }
}

export default VisitorSignaturePage;