function Questions(state = [], action) {
    switch (action.type) {
        case 'add':
            state.concat(action.payload);
            return state;
        default:
            return state;
    }
}

export default Questions