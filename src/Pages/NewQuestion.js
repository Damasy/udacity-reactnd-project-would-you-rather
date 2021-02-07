import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewQuestion } from "../Actions/Questions";
import { addQuestionForUserAction } from '../Actions/Users'
class NewQuestion extends React.Component {
    optionOne;

    optionTwo;

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.optionOne?.value && this.optionTwo?.value) {
            const { currentUser } = this.props.users;
            const question = {
                optionOneText: this.optionOne?.value,
                optionTwoText: this.optionTwo?.value, 
                author: currentUser.id
            }
            const questionId = await this.props.addNewQuestion(question);
            this.props.addQuestionForUserAction(question.author,questionId);
        }
    };

    render() {
        return (
            <div className="page-container">
                <div className="card-wrapper" >
                    <div className="question-title">Create new question</div>
                    <div className="question-desc">Complete the question:</div>
                    <div className="question-header">Would you rather</div>
                    <form className="question-form">
                        <input  type="text" 
                                ref={(ref) => { this.optionOne = ref }}
                                className="question-option" 
                                name="optionOne" 
                                id="optionOne" 
                                placeholder="Enter option one" />
                        <div className="seperator-or">
                            <span></span>
                            <span className="or">OR</span>
                            <span></span>
                        </div>
                        <input  type="text" 
                                ref={(ref) => { this.optionTwo = ref }}
                                className="question-option" 
                                name="optionTwo" 
                                id="optionTwo" 
                                placeholder="Enter option two" />
                        <button className="submit-btn" onClick={this.onSubmit}>
                            <Link to="/" > Submit </Link>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Users,
    }
};

export default connect(mapStateToProps, {
  addNewQuestion,
  addQuestionForUserAction,
})(NewQuestion);