import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Tabs from './components/Tabs';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard';
import NewQuestion from './Pages/NewQuestion';
import QuestionDetails from './Pages/QuestionDetails'
import { changeLoginStatus, loadAllUsers } from './Actions/Users';
import { formateUsersList } from './utilities/global';

class Main extends React.Component {
    componentDidMount () {
        this.props.loadAllUsers();
    }

    onLoginClick = (userId) => {
        const { users } = this.props.user;
        if (users) {
            this.props.changeLoginStatus(true, users[userId]);
        }
    }

    renderBody = () => {console.log('log', this.props)
        const { isLoggedIn } = this.props.user;
        if (isLoggedIn) {
            return (
                <Switch>
                    <Route exact path ="/" component={Home} />
                    <Route path ="/leaderboard" component={LeaderBoard} />
                    <Route path ="/add" component={NewQuestion} />
                    <Route path ="/questions/:question_id" component={QuestionDetails} />
                </Switch>
            )
        } else {
            return (
                <Login 
                    onLoginClick={this.onLoginClick}
                    usersList={formateUsersList(this.props.user.users)}
                />
            )
        }
    }

    render() {
        const { currentUser, isLoggedIn } = this.props.user;
 
        return (
            <BrowserRouter>
                 <main>
                    <Tabs 
                        isLoggedIn={isLoggedIn}
                        user={currentUser}
                        onLogoutClick={() => this.props.changeLoginStatus(false)}
                    />
                    {this.renderBody()}
                </main>
            </BrowserRouter>
        )
    }
};


const mapStateToProps = (state) => {
    return {
        user: state.Users
    }
};

const mapDispatchToProps = {
    changeLoginStatus,
    loadAllUsers,
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)