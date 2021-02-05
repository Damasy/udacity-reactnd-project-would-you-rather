import React from 'react';
import {connect} from 'react-redux';
import { getUserImage } from '../utilities/global';

class LeaderBoard extends React.Component {
    componentDidMount() {
        console.log('users', this.props.users)
    }

    formatUsersArr = (users) => {
        // return formated users arr
    }

    render() {
        const { users } =  this.props.users;

        return (
            <div className="page-container">
                {Object.values(users).map((user) => (
                    <div className="card-wrapper row">
                    <div className="col">
                        <img className="user-avatar" src={getUserImage(user.id)} alt="" />
                    </div>
                    <div className="col col-4">
                        <div className="user-name"> {user.name} </div>
                        <div className="questions-count">
                            <span className="type">Answered questions</span>
                            <span className="value">{Object.keys(user.answers).length}</span>
                        </div>
                        <div className="questions-count">
                            <span className="type">Created questions</span>
                            <span className="value">{user.questions.length}</span>
                        </div>
                    </div>
                    <div className="col top-score">
                        <div className="title">Score</div>
                        <div className="sum">33</div>
                    </div>
                </div>
                ))}
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

export default connect(mapStateToProps, null) (LeaderBoard);