const fixedOneReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EDIT_FIXED1':
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

export default fixedOneReducer;