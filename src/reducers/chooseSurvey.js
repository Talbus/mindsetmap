const chooseSurveyReducer = (state = 'init', action) => {
    switch(action.type) {
        case 'CHOOSE_SURVEY':
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

export default chooseSurveyReducer;