import responseReducer from './response';
import questionDoneReducer from './questionDone';
import showSurveyReducer from './showSurvey';
import showToiReducer from './showToi';
import growthWordsReducer from './growthWords';
import fixedWordsReducer from './fixedWords';
import chooseSurveyReducer from './chooseSurvey';
import questionReducer from './question';
import fixedOneReducer from './fixedOne';
import fixedTwoReducer from './fixedTwo';
import growthOneReducer from './growthOne';
import growthTwoReducer from './growthTwo';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    response: responseReducer,
    questionDone: questionDoneReducer,
    showSurvey: showSurveyReducer,
    showToi: showToiReducer,
    growthWords: growthWordsReducer,
    fixedWords: fixedWordsReducer,
    chooseSurvey: chooseSurveyReducer,
    question: questionReducer,
    fixedOne: fixedOneReducer,
    fixedTwo: fixedTwoReducer,
    growthOne: growthOneReducer,
    growthTwo: growthTwoReducer,
});

export default allReducers;