import React from 'react';
import {connect} from 'react-redux';
import { Tab } from 'semantic-ui-react';
import Question from '../components/Question';
import { loadAllQuestions } from '../Actions/Questions';

class Home extends React.Component {
    componentDidMount () {
       this.loadQuestions();
    }

    loadQuestions = async () => {
        const { currentUser } = this.props.users;
        if (currentUser?.id) {
            await this.props.loadAllQuestions(currentUser);
        }
    }

    renderUnansweredQuestions = (questions, users) => {
        return (
            <Tab.Pane>
                {questions && questions.map((question) => (
                    <Question 
                        key={question.id} 
                        question={question}
                        author={users[question.author]}
                    />
                ))}
            </Tab.Pane> 
        );
    }

    renderAnsweredQuestions = (answers, users) => {

        return (
            <Tab.Pane>
                {answers.map((answer) => (
                    <Question 
                        key={answer.id} 
                        question={answer}
                        author={users[answer.author]}
                        isAnswer
                    />
                ))}
            </Tab.Pane>
        );
    }

    render() {
        const { questions, answers } = this.props.questions;
        const { users } = this.props.users;
        const panes = [
          {
            menuItem: "Unanswered Questions",
            render: () =>
              this.renderUnansweredQuestions(
                questions.sort((a, b) => b.timestamp - a.timestamp),
                users
              ),
          },
          {
            menuItem: "Answered Questions",
            render: () =>
              this.renderAnsweredQuestions(
                answers.sort((a, b) => b.timestamp - a.timestamp),
                users
              ),
          },
        ];

        return (
            <div className="page-container home">
                <Tab panes={panes}  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.Questions,
        users: state.Users,
    }
};


export default connect(mapStateToProps,{ loadAllQuestions }) (Home);