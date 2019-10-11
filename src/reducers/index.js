import responseReducer from './response';
import questionDoneReducer from './questionDone';
import showSurveyReducer from './showSurvey';
import growthWordsReducer from './growthWords';
import fixedWordsReducer from './fixedWords';
import questionReducer from './question';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    response: responseReducer,
    questionDone: questionDoneReducer,
    showSurvey: showSurveyReducer,
    growthWords: growthWordsReducer,
    fixedWords: fixedWordsReducer,
    question: questionReducer,
});

export default allReducers;