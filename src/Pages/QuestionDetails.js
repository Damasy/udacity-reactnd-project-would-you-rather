import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';
import AnsweredQuestion from '../components/Answer';
import { answerQuestion } from '../Actions/Questions';
import { addUserAnswer } from '../Actions/Users';

class QuestionDetails extends React.Component {
    state = {
        currentQuestion: '',
    }

    componentDidMount () {
        this.loadQuestion();
    }

    loadQuestion = () => {
        const id = this.props.match.params.question_id;
        const { allQuestions } = this.props.questions;
        if (id && allQuestions[id]) {
            this.setState({ currentQuestion: allQuestions[id]})
        }
    }

    onSubmitAnswer = async (answer) => {
        const questionData = {
            authedUser: this.props.users.currentUser.id, 
            qid : this.props.match.params.question_id, 
            answer,
        }
        const updatedUsers = await this.props.answerQuestion(questionData);
        this.props.addUserAnswer(updatedUsers, questionData.authedUser);
        this.props.history.push('/');
    }

    getCurrentUserAnswer = (answer) => {
        const { currentUser } = this.props.users;
        if (answer.optionOne?.votes?.indexOf(currentUser.id) !== -1) {
            return 'optionOne';
        }
        if (answer.optionTwo?.votes?.indexOf(currentUser.id) !== -1) {
            return 'optionTwo';
        }
    }

    renderQuestion = (question, users) => {
        return (
            question &&  
                <Question 
                    question={question}
                    author={users[question.author]}
                    onSubmitAnswer={this.onSubmitAnswer}
                    fullQuestion
                />
        );
    }

    renderAnsweredQuestion = (answer, users) => {
        return (
            answer &&  
                <AnsweredQuestion 
                    answer={answer}
                    author={users[answer.author]}
                    currentUserVote={this.getCurrentUserAnswer(answer)}
                />
        ); 
    }

    render() {
        const { isAnswer } = this.props.location;
        const { currentQuestion } = this.state;
        const { users } = this.props.users;

        return (
          <div className="page-container">
            {!isAnswer
              ? this.renderQuestion(currentQuestion, users)
              : this.renderAnsweredQuestion(currentQuestion, users)}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.Questions,
        users: state.Users,
    }
};

export default connect(mapStateToProps, { answerQuestion, addUserAnswer }) (QuestionDetails);