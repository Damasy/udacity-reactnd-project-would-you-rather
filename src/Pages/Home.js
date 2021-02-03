import React from 'react';
import { Tab } from 'semantic-ui-react';
import Question from '../components/Question';

class Home extends React.Component {
    state = {
        questions: [1,2],
    }

    renderUnansweredQuestions = () => {
        const { questions } = this.state;

        return (
            <Tab.Pane>
                {questions.map((question) => (
                    <Question  fullQuestion/>
                ))}
            </Tab.Pane> 
        );
    }

    renderAnsweredQuestions = () => {
        return (
            <Tab.Pane>

            </Tab.Pane>
        );
    }

    render() {
        const panes = [
            { menuItem: 'Unanswered Questions', render: this.renderUnansweredQuestions },
            { menuItem: 'Answered Questions', render: this.renderAnsweredQuestions  },
        ];

        return (
            <div className="page-container home">
                <Tab panes={panes}  />
            </div>
        )
    }
}

export default Home;