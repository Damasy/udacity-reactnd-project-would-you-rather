
import { LOAD_ALL_QUESTIONS } from '../Actions/Questions';

const defaultState = {
    allQuestions: {},
    questions: [],
    answers: [],
}

function Questions(state = defaultState, action) {
    switch (action.type) {
        case 'add':
            state.concat(action.payload);
            return state;
        case LOAD_ALL_QUESTIONS:
            return {
                ...state,
                allQuestions: action.payload.questions,
                questions: action.payload.unanswered,
                answers: action.payload.answered
            };
        default:
            return state;
    }
}

export default Questions