import React from 'react';
import logo from '../logo.svg';
import { Dropdown } from 'semantic-ui-react';

class Login extends React.Component {
    onBtnClick = (e) => {
        e.preventDefault();
        if (this.selectUser?.state?.value) {
            console.log('selec', this.selectUser.state.value);
            this.props.onLoginClick(this.selectUser.state.value);
        }
    }

    render() {
        const { usersList } = this.props;

        return (
            <div className="login-container">
                <div className="welcome title">welcome to the would you rather app  </div>
                <div className="welcome sub">Please sign in to continue</div>
                <img  src={logo} className="logo" alt="logo" />
                <div className="form-title">sign in</div>
                <form className="form">
                    <Dropdown
                        selection
                        placeholder='Select User'
                        className="drop-down"
                        options={usersList}
                        ref={(ref) => { this.selectUser = ref }}
                    />
                    <button 
                        className="login-btn" 
                        onClick={this.onBtnClick}> 
                            login
                    </button>
                </form>
            </div> 
        )
    }
}

export default Login;