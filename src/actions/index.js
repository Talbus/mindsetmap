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

export const chooseSurvey = (text) => {
    return {
        type: 'CHOOSE_SURVEY',
        payload: text
    };
};

export const showSurvey = () => {
    return {
        type: 'SHOW_SURVEY',
    };
};

export const showToi = () => {
    return {
        type: 'SHOW_TOI',
    };
};

export const question = (text) => {
    return {
        type: 'EDIT_QUESTION',
        payload: text
    };
};

export const fixedOne = (text) => {
    return {
        type: 'EDIT_FIXED1',
        payload: text
    }
};

export const fixedTwo = (text) => {
    return {
        type: 'EDIT_FIXED2',
        payload: text
    }
};

export const growthOne = (text) => {
    return {
        type: 'EDIT_GROWTH1',
        payload: text
    }
};

export const growthTwo = (text) => {
    return {
        type: 'EDIT_GROWTH2',
        payload: text
    }
};