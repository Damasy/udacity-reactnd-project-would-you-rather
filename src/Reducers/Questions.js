
import { 
    LOAD_ALL_QUESTIONS, 
    ADD_NEW_QUESTION, 
    ADD_QUESTION_ANSWER,
} from '../Actions/Questions';

const defaultState = {
    allQuestions: {},
    questions: [],
    answers: [],
}

function Questions(state = defaultState, action) {
    switch (action.type) {
        case ADD_NEW_QUESTION:
            state.questions.unshift(action.payload)

            return {
                ...state,
                allQuestions: {
                    ...state.allQuestions,
                    [action.payload.id]: action.payload
                },
            };
        case LOAD_ALL_QUESTIONS:
            return {
                ...state,
                allQuestions: action.payload.questions,
                questions: action.payload.unanswered,
                answers: action.payload.answered
            };
        case ADD_QUESTION_ANSWER: 
            state.questions.splice(
              state.questions.findIndex(
                (v) => v.id === action.payload.questionId
              ),
              1
            );
            return {
                ...state,
                allQuestions: action.payload.questions,
            };
        default:
            return state;
    }
}

export default Questions