const checkUser = (store) => (next) => (action) => {
    const state = store.getState();
    const { user } = state;

    if(user === null){
        return alert("Not Allowed");
    }

    return next(action);
};

export default checkUser;