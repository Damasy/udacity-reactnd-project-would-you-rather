import  * as API  from '../_DATA';

const LOAD_ALL_QUESTIONS = 'LOAD_ALL_QUESTIONS';

const loadAllQuestionsAction = (questions) => {
    return {
        type: LOAD_ALL_QUESTIONS,
        payload: questions,
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

export {
    LOAD_ALL_QUESTIONS,
    loadAllQuestions,
}