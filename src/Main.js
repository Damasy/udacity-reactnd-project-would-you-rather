import React from 'react';
import {connect} from 'react-redux';
import Login from './components/Login';
import Tabs from './components/Tabs';
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
                <div>
                    load taps here
                </div>
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
            <main>
                <Tabs 
                    isLoggedIn={isLoggedIn}
                    user={currentUser}
                    onLogoutClick={() => this.props.changeLoginStatus(false)}
                />
                {this.renderBody()}
            </main>
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