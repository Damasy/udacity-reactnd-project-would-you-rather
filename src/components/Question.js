import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Question extends React.Component {
    state = {
        answer: ''
    }

    handleChange = (e, { value }) => {
        this.setState({ answer: value })
    }

    renderAbstractedBody = () => {
        return (
            <div className="abstract-q-body">
                <div className="q-part">
                    .. a ..
                </div>
                <button className="submit-btn poll">
                    <Link 
                        to={{
                            pathname: '/questions/idid',
                        }} 
                        >
                        View Poll
                    </Link>
                </button>
            </div>
        );
    }

    renderFullBody = () => {
        return (
            <div className="full-body">
                 <Form className="q-form">
                    <Form.Field>
                    <Radio
                        label='question first choise'
                        name='radioGroup'
                        value='this'
                        checked={this.state.answer === 'this'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field>
                    <Radio
                        label='question second choise'
                        name='radioGroup'
                        value='that'
                        checked={this.state.answer === 'that'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Button fluid className="submit-btn poll">
                        <Link 
                            to={{
                                pathname: '/questions',
                                search: 'idid'
                            }} 
                             >
                            Submit
                        </Link>
                    </Button>
                </Form>
            </div>
        );
    }

    render() {
        const { fullQuestion } = this.props;

        return (
            <div className="card-wrapper">
                <div className="row">
                    <div className="col">
                        <div className="user-name asks"> User Name asks : </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="user-avatar" src="./logo512.png" alt="" />
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

export default Question;