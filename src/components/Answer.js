import React from 'react';
import { Progress } from 'semantic-ui-react';
import { getUserImage } from '../utilities/global';

class AnsweredQuestion extends React.Component {
    
    render() {console.log('answer', this.props)
        const { author, answer } = this.props;
        const optionOneVote = answer.optionOne?.votes.length;
        const optionTwoVote = answer.optionTwo?.votes.length;
        const totalVotes = optionOneVote + optionTwoVote

        return (
          <div className="card-wrapper">
            <div className="row">
              <div className="col">
                <div className="user-name asks">
                  {author?.name + " asks :"}{" "}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <img
                  className="user-avatar"
                  src={getUserImage(author?.id)}
                  alt={author?.name}
                />
              </div>

              <div className="col col-4">
                <div className="user-name"> Results </div>
                <div className="answer-rate">
                  <div className="answer-details">
                    {"Would you rather " + answer.optionOne.text}
                  </div>
                  <Progress
                    className="answer-progress"
                    value={optionOneVote}
                    total={totalVotes}
                    progress="percent"
                  />
                  <div className="answer-count">
                    {optionOneVote + " out of " + totalVotes + " votes"}
                  </div>
                  {this.props.currentUserVote === "optionOne" && (
                    <div className="your-vote">Your Vote</div>
                  )}
                </div>

                <div className="answer-rate">
                  <div className="answer-details">
                    {"Would you rather " + answer.optionTwo.text}
                  </div>
                  <Progress
                    className="answer-progress"
                    value={optionTwoVote}
                    total={totalVotes}
                    progress="percent"
                  />
                  <div className="answer-count">
                    {optionTwoVote + " out of " + totalVotes + " votes"}
                  </div>
                  {this.props.currentUserVote === "optionTwo" && (
                    <div className="your-vote">Your Vote</div>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
    }
}

export default AnsweredQuestion;