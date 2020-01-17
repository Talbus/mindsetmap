
const growthOneReducer = (state = 0, action) => {
    switch(action.type) {
        case 'EDIT_GROWTH1':
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

export default growthOneReducer;