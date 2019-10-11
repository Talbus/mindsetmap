const fixedWordsReducer = (state = '', action) => {
    switch(action.type) {
        case 'EDIT_FIXED_WORDS':
            return Object.assign({}, state, {
                response: [
                    // ...state.response,
                    {
                    payload: action.payload,
                    }
                ]
                })
        default:
            return state
    }
};

export default fixedWordsReducer;