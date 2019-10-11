import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { response, growthWords, fixedWords } from '../actions';
import Associations from './Associations';
import { Link } from "react-router-dom";

function Results() {

    const growthTerms = useSelector(state => state.growthWords);
    const fixedTerms = useSelector(state => state.fixedWords);
    const growthString = (growthTerms.response ? <p className='usedWords' style={{ color: '#5BC8B2' }}>{growthTerms.response[0].payload.join(', ')}</p> : '');
    const fixedString = (fixedTerms.response ? <p className='usedWords' style={{ color: '#E69D00', marginBottom: '24px' }}>{fixedTerms.response[0].payload.join(', ')}</p> : '');
    
    const introText = <span style={{ fontSize: '18px', margin: '0' }}>From your response, we found these words to be significant indicators of a <span style={{ color: '#239A82' }}>Growth mindset</span> </span>;
    const secondIntroText = <span style={{ fontSize: '18px', margin: '0' }}>These words you used indicate more of a <span style={{ color: '#BD8100' }}>Fixed mindset</span> </span>;
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
            <p style={{ fontSize: '16px', width: '90%', marginTop: '0', color: '#404B5A' }}>
                To learn more about what these results mean, visit our <Link to='/' className='links'>About</Link> page, and if you're interested in speaking to us more, do not hesitate to <Link to='/' className='links'>reach out</Link>!
            </p>

            </div>
        </div>
    );
}

export default Results;
