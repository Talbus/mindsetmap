const showSurveyReducer = (state = true, action) => {
    switch(action.type) {
        case 'SHOW_SURVEY':
            return !state;
        default:
            return state;
    }
};

export default showSurveyReducer;
