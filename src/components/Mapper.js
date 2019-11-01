import React, { useState, useRef, useEffect } from 'react';
import Survey from './Survey';
import Results from './Results';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey } from '../actions';
import circle from '../images/timelineCircle.svg';



function Mapper() {

    const displaySurvey = useSelector(state => state.showSurvey);
    const dispatch = useDispatch();
    const resp = useSelector(state => state.response);

    useEffect(() => {
        // window.scrollTo(0,0);
    });

    const showMapper = (source) => {
        if (displaySurvey && source === 'results' || !displaySurvey && source === 'mapper') {
            dispatch(showSurvey());
        }
        // dispatch(showSurvey());
        window.scrollTo(0,0);
    }

    return (
        <div className='allMapper' style={{ width: '100%', marginBottom: '50px', backgroundColor: 'white' }}>
            
            {/* <button style={{ position: 'absolute', zIndex: '5', opacity: '0' }} onClick={() => dispatch(showSurvey())}>switch</button> */}
            <div className='content'>
                <div className='progressBar'>
                    {/* progress bar */}
                    <div className='timelineDiv' onClick={() => showMapper('mapper')}>
                        <img src={circle} className={displaySurvey ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        {/* <img src={circle} className='timelineCircle' /> */}
                        <p className='timelineText'>Mapper</p>
                    </div>
                    <div className='timelineDiv' onClick={() => showMapper('results')}>
                        <img src={circle} className={!displaySurvey ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        <p className='timelineText'>Results</p>
                    </div>
                </div>
                {displaySurvey ? <Survey /> : <Results />}
            </div>
        </div>
        // <Survey />

    );
}

export default Mapper;