import  * as API  from '../_DATA';

const LOAD_ALL_QUESTIONS = 'LOAD_ALL_QUESTIONS';
const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

const loadAllQuestionsAction = (questions) => {
    return {
        type: LOAD_ALL_QUESTIONS,
        payload: questions,
    }
}

const addNewQuestionAction = (question) => {
    return {
        type: ADD_NEW_QUESTION,
        payload: question,
    }
}

const addQuestionAnswerAction = (questionId, questions) => {
    return {
        type: ADD_QUESTION_ANSWER,
        payload: { questionId, questions},
    }
}

const filterAnsweredQuestions = (questions, user) => {
    const answered = [],
          unanswered = [];
    for (const qId in questions) {
        if (questions.hasOwnProperty(qId)) {
            const question = questions[qId];
            if (user.answers[qId]) {
                answered.push(question)
            } else {
                unanswered.push(question)
            }
        }
    }

    return {
        questions,
        answered,
        unanswered,
    };
}

const loadAllQuestions = (currentUser) => {
    return async (dispatch) => {
        const questions = await API._getQuestions();
        if (questions) {
            const filteredQuestions = filterAnsweredQuestions(questions,currentUser)
            dispatch(loadAllQuestionsAction(filteredQuestions));    
        }
    }
}

const addNewQuestion = (question) => {
    return async (dispatch) => {
        const newQuestion = await API._saveQuestion(question);
        if (newQuestion) { 
            dispatch(addNewQuestionAction(newQuestion));  
            return newQuestion.id;
        }
    }
}

const answerQuestion = (questionData) => {
    return async (dispatch) => {
        const {users, questions } = await API._saveQuestionAnswer(questionData);
        if (questions) { console.log('question action ', questions)
            dispatch(addQuestionAnswerAction(questionData.qid, questions));  
            return users;
        }
    }
}

export {
    LOAD_ALL_QUESTIONS,
    ADD_NEW_QUESTION ,
    ADD_QUESTION_ANSWER,
    loadAllQuestions,
    addNewQuestion,
    answerQuestion,
}