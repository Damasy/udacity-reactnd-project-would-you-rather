import React from 'react';
import Question from '../components/Question';

class QuestionDetails extends React.Component {
    state = {
        questions: [1,2],
    }

    render() {console.log('param', this.props.match.params.question_id)
        return (
            <div className="page-container home">
                <Question fullQuestion/>
            </div>
        )
    }
}

export default QuestionDetails;