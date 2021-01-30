import  * as API  from '../_DATA';

const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
const LOAD_ALL_USERS = 'LOAD_ALL_USERS';

const changeLoginAction = (login) => {
    return {
        type: TOGGLE_LOGIN,
        payload: login,
    }
}


const updateCurrentUserAction = (user) => {
    return {
        type: UPDATE_CURRENT_USER,
        payload: user,
    }
}

const loadAllUsersAction = (users) => {
    return {
        type: LOAD_ALL_USERS,
        payload: users,
    }
}

const changeLoginStatus = (isLoggingIn, user) => {
    return (dispatch) => {
        dispatch(changeLoginAction(isLoggingIn));
        if (isLoggingIn) {
            dispatch(updateCurrentUserAction(user))
        } else {
            dispatch(updateCurrentUserAction({}))
        }
    }
}

const loadAllUsers = () => {
    return async (dispatch) => {
        const users = await API._getUsers();
        if (users) {
            dispatch(loadAllUsersAction(users));  
        }
    }
}

export {
    TOGGLE_LOGIN,
    UPDATE_CURRENT_USER,
    LOAD_ALL_USERS,
    changeLoginStatus,
    loadAllUsers,
}