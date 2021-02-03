import React from 'react';
import { Form, Radio, Button } from 'semantic-ui-react'

class Question extends React.Component {
    state = {}

    handleChange = (e, { answer }) => this.setState({ answer })

    renderAbstractedBody = () => {
        return (
            <div className="abstract-q-body">
                <div className="q-part">
                    .. a ..
                </div>
                <button className="submit-btn poll">View Poll</button>
            </div>
        );
    }

    renderFullBody = () => {
        return (
            <div className="full-body">
                 <Form>
                    <Form.Field>
                    <Radio
                        label='Choose this'
                        name='radioGroup'
                        value='this'
                        checked={this.state.answer === 'this'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Form.Field>
                    <Radio
                        label='Or that'
                        name='radioGroup'
                        value='that'
                        checked={this.state.answer === 'that'}
                        onChange={this.handleChange}
                    />
                    </Form.Field>
                    <Button fluid>Fits to Container</Button>
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