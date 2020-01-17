const fixedTwoReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EDIT_FIXED2':
            return Object.assign({}, state, {
                response: [
                    {
                    payload: action.payload,
                    }
                ]
                })
        default:
            return state
    }
};

export default fixedTwoReducer;