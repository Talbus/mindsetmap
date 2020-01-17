import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { response, growthWords, fixedWords, showSurvey, chooseSurvey } from '../actions';
import Associations from './Associations';
import { Link } from 'react-router-dom';
import ToiChart from './ToiChart';

function Results() {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    const fixed1 = useSelector(state => state.fixedOne);
    const fixed2 = useSelector(state => state.fixedTwo);

    const growth1 = useSelector(state => state.growthOne);
    const growth2 = useSelector(state => state.growthTwo);

    const allAnswered = fixed1 !== 0 && fixed2 !== 0 && growth1 !== 0 && growth2 !== 0;

    const dispatch = useDispatch();

    const growthTerms = useSelector(state => state.growthWords);
    const fixedTerms = useSelector(state => state.fixedWords);
    
    const growthString = (growthTerms.response ? <p className='usedWords' style={{ color: '#5BC8B2' }}>{growthTerms.response[0].payload.join(', ')}</p> : '');
    const fixedString = (fixedTerms.response ? <p className='usedWords' style={{ color: '#E69D00', marginBottom: '24px' }}>{fixedTerms.response[0].payload.join(', ')}</p> : '');
    
    const introText = <span style={{ fontSize: '18px', margin: '0' }}>From your response, we found these words to be significant indicators of a <span style={{ color: '#239A82' }}>Growth mindset:</span> </span>;
    const secondIntroText = <span style={{ fontSize: '18px', margin: '0' }}>These words you used indicate more of a <span style={{ color: '#BD8100' }}>Fixed mindset:</span> </span>;
    const gMindset = <span style={{ color: '#239A82' }}>Growth mindset</span>;
    const fMindset = <span style={{ color: '#BD8100' }}>Fixed mindset</span>;

    return (
        <div style={{ width: '100%' }}>
            <div className='surveyArea'>
                <h2 className='pageHeader'>Results</h2>
                <p style={{ color: '#063C31', width: '90%', margin: '0' }}>{growthTerms.response && growthTerms.response[0].payload.length > 0 ? (introText) : ''}</p>
                {growthTerms.response ? growthString : ''}
                <p style={{ color: '#063C31', width: '90%', margin: '0' }}>{fixedTerms.response ? (secondIntroText) : ''}</p>
                {fixedTerms.response ? fixedString : ''}
                <p style={{ fontSize: '16px', width: '90%', marginTop: '0', color: '#404B5A', lineHeight: '1.25' }}>
                    To learn more about what these results mean, visit our <Link to='/about' className='links'>About</Link> page, and if you're interested in speaking to us more, do not hesitate to <Link to='/contact' className='links'>reach out</Link>!<br /><br />Go back to the mapper <span className='links' onClick={() => dispatch(chooseSurvey('mapper'))}>here</span>.
                </p>
                {allAnswered ? <ToiChart score={fixed1.response[0].payload + fixed2.response[0].payload + growth1.response[0].payload + growth2.response[0].payload} /> : ''}

            </div>
        </div>
    );
}

export default Results;
