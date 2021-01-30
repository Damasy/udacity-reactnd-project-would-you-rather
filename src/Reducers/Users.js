import { 
    TOGGLE_LOGIN, 
    UPDATE_CURRENT_USER, 
    LOAD_ALL_USERS 
} from '../Actions/Users';

const defaultState = {
    isLoggedIn: false,
    currentUser: {},
    users: [],
}

function Users (state = defaultState, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return { 
                ...state, 
                isLoggedIn: action.payload 
            };
        case UPDATE_CURRENT_USER:
            return { 
                ...state, 
                currentUser: action.payload 
            };
        case LOAD_ALL_USERS:
            return { 
                ...state, 
                users: action.payload 
            };
        default:
           return state;
    }
}

export default Users;