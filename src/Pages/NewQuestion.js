import React from 'react';
class NewQuestion extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="card-wrapper" >
                    <div className="question-title">Create new question</div>
                    <div className="question-desc">Complete the question:</div>
                    <div className="question-header">Would you rather</div>
                    <form className="question-form">
                        <input type="text" className="question-option" 
                                name="optionOne" id="optionOne" placeholder="Enter option one" />
                        <div className="seperator-or">
                            <span></span>
                            <span className="or">OR</span>
                            <span></span>
                        </div>
                        <input type="text" className="question-option" 
                               name="optionTwo" id="optionTwo" placeholder="Enter option two" />
                        <button className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewQuestion;