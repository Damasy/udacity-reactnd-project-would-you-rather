import { 
    TOGGLE_LOGIN, 
    UPDATE_CURRENT_USER, 
    LOAD_ALL_USERS,
    ADD_QUESTION_FOR_USER,
    ADD_USER_ANSWER,
} from '../Actions/Users';

const defaultState = {
    isLoggedIn: false,
    currentUser: {},
    users: {},
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
        case ADD_QUESTION_FOR_USER:
            state.users[action.payload.author].questions.push(action.payload.questionId);
            
            return { 
                ...state, 
            };
        case ADD_USER_ANSWER:
            return { 
                ...state,
                users: action.payload.users,
                currentUser: action.payload.currentUser,
            };
        default:
           return state;
    }
}

export default Users;