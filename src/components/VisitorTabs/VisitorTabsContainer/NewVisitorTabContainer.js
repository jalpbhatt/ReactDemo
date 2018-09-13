import React from 'react';
import TextFields from '../../InputFieldsWithIcon/TextFields';
import FormControl from '@material-ui/core/FormControl';

const NewVisitorTabContainer = () => {

    return (
        <div className="newVisitorContainer">
            <div className="newVisitiorHeader">
                <div className="title">
                    New Visitor
                </div>
                <div className="currentDate">
                    12 - Aug - 2018
                </div>
            </div>
            <div>
                <TextFields />
            </div>
        </div>
    );
}

export default NewVisitorTabContainer;