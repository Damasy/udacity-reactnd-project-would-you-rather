import React from 'react';
import { getUserImage, isPhoneWindow } from '../utilities/global';

class Tabs extends React.Component {
    state = {
        tabs: [
            {
                name: 'Home',
                isActive: true,
            },
            {
                name: 'New Question',
                isActive: false,
            },
            {
                name: 'Leader Board',
                isActive: false,
            }
        ],
        isMenuOpen: !isPhoneWindow(),
    }

    toggleMenu = () => {
        const { isMenuOpen } = this.state;
        this.setState({ isMenuOpen: !isMenuOpen});
    }

    onTabClick = (tabName) => {
        let { tabs, isMenuOpen } = this.state;
        tabs.map((tab) => {
            return tab.isActive = tab.name === tabName ? true : false;
        });
        this.setState({ tabs });
        if (isMenuOpen && isPhoneWindow()) {
            this.toggleMenu();
        }
    };

    renderUserProfile = (user) => {
        return (
            <li className="user-info">
                <span className="user-name">{user.name}</span>
                <img className="user-avatar" src={getUserImage(user.id)}  alt={user.name} />
            </li>
        );
    }

    render() {
        const { tabs, isMenuOpen } = this.state;
        const { user, onLogoutClick, isLoggedIn } = this.props;

        return (
            <section>
                <div className="menu-icon" onClick={ () => this.toggleMenu()} >&#9776;</div>
                <ul className="tabs" style={{display: isMenuOpen ? "block" : "none"}}>
                    {tabs.map((tab) => (
                        <li key={tab.name} 
                            className={tab.isActive ? "tab active" : "tab"}
                            onClick={ () => this.onTabClick(tab.name)}>{tab.name}</li>
                    ))}
                    { isLoggedIn && this.renderUserProfile(user)}
                    { isLoggedIn && <li className="tab logout" onClick={onLogoutClick}>Log out</li>}
                </ul>
                <ul className="tabs phone-profile">
                    { isLoggedIn && this.renderUserProfile(user)}
                </ul>
            </section>
        )
    }
}

export default Tabs;