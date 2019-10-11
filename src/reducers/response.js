const responseReducer = (state = '', action) => {
    switch(action.type) {
        case 'EDIT_RESPONSE':
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

export default responseReducer;