import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getUserImage } from '../utilities/global';

class Question extends React.Component {
    state = {
        answer: ''
    }

    handleChange = (e, { value }) => {
        this.setState({ answer: value })
    }

    onSubmitAnswer = (e) => {
        e.preventDefault();
        this.props.onSubmitAnswer(this.state.answer)
    }

    renderAbstractedBody = () => {
        const { optionOne, id } = this.props.question;

        return (
            <div className="abstract-q-body">
                <div className="q-part">
                    {optionOne.text.slice(0,15) + '...'}
                </div>
                <button className="submit-btn poll">
                    <Link 
                        to={{
                            pathname: '/questions/'+ id,
                            isAnswer: this.props.isAnswer,
                        }} 
                        >
                        View Poll
                    </Link>
                </button>
            </div>
        );
    }

    renderFullBody = () => {
        const { optionOne, optionTwo } = this.props.question;

        return (
            <div className="full-body">
                 <Form className="q-form">
                    <Form.Field>
                    <Radio
                        label={optionOne?.text}
                        name='radioGroup'
                        value='optionOne'
                        checked={this.state.answer === 'optionOne'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field>
                    <Radio
                        label={optionTwo?.text}
                        name='radioGroup'
                        value='optionTwo'
                        checked={this.state.answer === 'optionTwo'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Button fluid className="submit-btn poll" onClick={this.onSubmitAnswer} disabled={!this.state.answer}>
                            Submit
                    </Button>
                </Form>
            </div>
        );
    }

    render() {
        const { fullQuestion, author } = this.props;

        return (
            <div className="card-wrapper">
                <div className="row">
                    <div className="col">
                        <div className="user-name asks">{ author?.name +' asks :'} </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="user-avatar" src={getUserImage(author?.id)} alt={author?.name} />
                    </div>
                    <div className="col col-4">
                        <div className="user-name"> Would you rather </div>
                        {fullQuestion? this.renderFullBody() : this.renderAbstractedBody()}
                    </div>
                </div>
            </div>
        )
    }
}

//Question.Proptypes = 

export default Question;