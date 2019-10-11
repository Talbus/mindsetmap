const growthWordsReducer = (state = '', action) => {
    switch(action.type) {
        case 'EDIT_GROWTH_WORDS':
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

export default growthWordsReducer;