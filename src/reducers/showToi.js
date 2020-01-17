const showToiReducer = (state = true, action) => {
    switch(action.type) {
        case 'SHOW_TOI':
            return !state;
        default:
            return state;
    }
};

export default showToiReducer;
