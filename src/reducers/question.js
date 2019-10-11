const questionReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EDIT_QUESION':
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

export default questionReducer;