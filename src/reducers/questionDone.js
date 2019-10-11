const questionDoneReducer = (state = false, action) => {
    switch(action.type) {
        case 'ANSWERED_QUESTION':
            return true;
        default:
            return state;
    }
};

export default questionDoneReducer;