import React from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';
import AnsweredQuestion from '../components/Answer';
import { answerQuestion, loadAllQuestions } from '../Actions/Questions';
import { addUserAnswer } from '../Actions/Users';

class QuestionDetails extends React.Component {
    state = {
        currentQuestion: '',
        isAnswer: false,
        questionNotFound: false,
    }

    componentDidMount () {
        this.loadQuestion();
    }

    componentDidUpdate() {
        const { currentQuestion, questionNotFound } = this.state;
        if (!currentQuestion && !questionNotFound) {
            this.loadQuestion()
        }
    }

    loadQuestion = () => {
        const id = this.props.match.params.question_id;
        const { allQuestions } = this.props.questions;
        if (id && allQuestions[id]) {
            this.setState({
              currentQuestion: allQuestions[id],
              isAnswer: this.props.location?.isAnswer,
            });
            return;
        }
        this.loadQuestionFromURL(id);
    }

    loadQuestionFromURL = async (questionId) => {
        const { currentUser } = this.props.users;
        if (currentUser) {
            await this.props.loadAllQuestions(currentUser);
            const { allQuestions } = this.props.questions;
            if (allQuestions && allQuestions[questionId]) {
                this.setState({
                  currentQuestion: allQuestions[questionId],
                  isAnswer: !!currentUser.answers[questionId],
                });
            } else {
                this.setState({ questionNotFound: true });
            }
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
        const { currentQuestion, isAnswer, questionNotFound } = this.state;
        const { users } = this.props.users;
        if (questionNotFound) {
            return (
                <div className="page-container">
                  <div className="four-o-four">
                      404  :(
                  </div>
                  <div className="not-found">
                      OOPS .. , NOT FOUND
                  </div>
                </div>
              ); 
        } else {
            return (
                <div className="page-container">
                  {!isAnswer
                    ? this.renderQuestion(currentQuestion, users)
                    : this.renderAnsweredQuestion(currentQuestion, users)}
                </div>
              ); 
        }
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.Questions,
        users: state.Users,
    }
};

export default connect(mapStateToProps, {
  answerQuestion,
  addUserAnswer,
  loadAllQuestions,
})(QuestionDetails);