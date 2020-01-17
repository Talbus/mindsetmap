const growthTwoReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EDIT_GROWTH2':
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

export default growthTwoReducer;