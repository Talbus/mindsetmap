import React, { useState, useRef, useEffect } from 'react';
import Survey from './Survey';
import Results from './Results';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey } from '../actions';



function Mapper() {

    const displaySurvey = useSelector(state => state.showSurvey);
    const dispatch = useDispatch();
    const resp = useSelector(state => state.response);

    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className='' style={{ width: '100%', marginTop: '50px', marginBottom: '50px', backgroundColor: 'white' }}>
            
            <button style={{ position: 'absolute', zIndex: '5', opacity: '0' }} onClick={() => dispatch(showSurvey())}>switch</button>
            <div className='content'>
                <div className='progressBar'>
                    {/* progress bar */}
                </div>
                {displaySurvey ? <Survey /> : <Results />}
            </div>
        </div>
        // <Survey />

    );
}

export default Mapper;