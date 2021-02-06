import React from 'react';
import {connect} from 'react-redux';
import { getUserImage } from '../utilities/global';

class LeaderBoard extends React.Component {

    formatUsersObj = (users) => {
        return Object.values(users).map((user) => {
            return {
                id: user.id,
                name: user.name,
                answersCount: Object.keys(user.answers).length,
                questionsCount:  user.questions.length,
                total: Object.keys(user.answers).length + user.questions.length,
            }
        }).sort((a,b) => b.total - a.total);
    }

    render() {
        const { users } =  this.props.users;

        return (
            <div className="page-container">
                {this.formatUsersObj(users).map((user) => (
                    <div className="card-wrapper row" key={user.id}>
                    <div className="col">
                        <img className="user-avatar" src={getUserImage(user.id)} alt="" />
                    </div>
                    <div className="col col-4">
                        <div className="user-name"> {user.name} </div>
                        <div className="questions-count">
                            <span className="type">Answered questions</span>
                            <span className="value">{user.answersCount}</span>
                        </div>
                        <div className="questions-count">
                            <span className="type">Created questions</span>
                            <span className="value">{user.questionsCount}</span>
                        </div>
                    </div>
                    <div className="col top-score">
                        <div className="title">Score</div>
                        <div className="sum">{user.total}</div>
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