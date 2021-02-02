import React from 'react';

class LeaderBoard extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="card-wrapper row">
                    <div className="col">
                        <img className="user-avatar" src="./logo512.png" alt="" />
                    </div>
                    <div className="col col-4">
                        <div className="user-name"> User Name </div>
                        <div className="questions-count">
                            <span className="type">Answered questions</span>
                            <span className="value">3</span>
                        </div>
                        <div className="questions-count">
                            <span className="type">Created questions</span>
                            <span className="value">4</span>
                        </div>
                    </div>
                    <div className="top-score">
                        <div className="title">Score</div>
                        <div className="sum">33</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoard;