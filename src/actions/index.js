export const response = (text) => {
    return {
        type: 'EDIT_RESPONSE',
        payload: text
    };
};

export const growthWords = (text) => {
    return {
        type: 'EDIT_GROWTH_WORDS',
        payload: text
    };
};

export const fixedWords = (text) => {
    return {
        type: 'EDIT_FIXED_WORDS',
        payload: text
    };
};

export const showSurvey = () => {
    return {
        type: 'SHOW_SURVEY',
    };
};

export const question = (text) => {
    return {
        type: 'EDIT_QUESTION',
        payload: text
    };
};