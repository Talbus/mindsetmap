import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { response, growthWords, fixedWords, showSurvey, question, chooseSurvey, fixedOne, fixedTwo, growthOne, growthTwo  } from '../actions';
import Associations from './Associations';
import { Link } from 'react-router-dom';
import ToiChart from './ToiChart';

function Results() {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    const restart = () => {
        dispatch(chooseSurvey('intro'));
        dispatch(response(''));
        dispatch(question(0));
        dispatch(fixedOne(0));
        dispatch(fixedTwo(0));
        dispatch(growthOne(0));
        dispatch(growthTwo(0));
    }

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
    
    const introText = <span style={{ fontSize: '16px', margin: '0', fontWeight: '100' }}>
        The Mapper and Survey are two ways to explore what you believe about intelligence.
        {/* <br /><br />You might believe that intelligence is something fixed that you can't influence. Alternatively, you might believe that intelligence can be grown through effort. Or, you may be somewhere in the middle.
        <br /><br />
        The Mapper helps you explore your beliefs about intelligence by lorem ipsum.
        <br /> */}

        </span>
    

    const fixedWords = <span style={{ color: '', fontSize: '16px' }}>These words you used indicate more of a <span style={{ color: '#BD8100' }}>fixed mindset</span> about intelligence:</span>
    const growthWords = <span style={{ color: '', fontSize: '16px' }}><br />These words you used indicate more of a <span style={{ color: '#239A82' }}>growth mindset</span> about intelligence:</span>

    const secondIntroText = <span style={{ fontSize: '18px', margin: '0' }}>These words you used indicate more of a <span style={{ color: '#BD8100' }}>Fixed mindset:</span> </span>;
    const gMindset = <span style={{ color: '#239A82' }}>Growth mindset</span>;
    const fMindset = <span style={{ color: '#BD8100' }}>Fixed mindset</span>;

    return (
        <div style={{ width: '100%' }}>
            <div className='surveyArea'>
                <h2 className='pageHeader'>Results</h2>
                {/* <p style={{ color: '#063C31', width: '90%', margin: '0' }}>{(growthTerms.response && growthTerms.response[0].payload.length) || (fixedTerms.response && fixedTerms.response[0].payload.length) > 0 ? (introText) : ''}</p> */}
                <p style={{ color: '#063C31', width: '90%', margin: '0' }}>{introText}</p>
                <p style={{ color: '#063C31', width: '70%', borderStyle: 'none none none solid', borderColor: '#FFE3A3', borderWidth: '8px', marginLeft: '0', paddingLeft: '8px' }}>You might believe that intelligence is something fixed that you can't influence. Alternatively, you might believe that intelligence can be grown through effort. Or, you may be somewhere in the middle.
        <br /><br />
        The Mapper helps you explore your beliefs about intelligence by lorem ipsum.</p>
                {(growthTerms.response && growthTerms.response[0].payload.length) ? growthWords : ''}
                {growthTerms.response ? growthString : ''}


                {/* <p style={{ color: '#063C31', width: '90%', margin: '0' }}>{fixedTerms.response ? (secondIntroText) : ''}</p> */}
                {(fixedTerms.response && fixedTerms.response[0].payload.length) ? fixedWords : ''}
                {fixedTerms.response ? fixedString : ''}


                <p style={{ fontSize: '16px', width: '90%', marginTop: '0', color: '#063C31', lineHeight: '1.25' }}>
                    <span style={{ fontStyle: 'italic', width: '60%' }}>Based on your language choices, do you have more of a fixed or growth mindset about intelligence?</span><br /><br />
                    The Survey is a different way of exploring your beliefs about mindset. It uses the 4 questions … lorem ipsum.<br />
                </p>
                {allAnswered ? <p style={{ color: '#063C31'}}>The graph below shows where you fall on a range from fixed to growth. As you can see, most people fall somewhere in the middle.</p> : ''}
                {allAnswered ? <ToiChart score={fixed1.response[0].payload + fixed2.response[0].payload + growth1.response[0].payload + growth2.response[0].payload} /> : ''}
                <p style={{ fontSize: '16px', width: '90%', marginTop: '0', color: '#063C31', lineHeight: '1.25' }}>
                    To learn more about what these results mean, visit our <Link to='/about' className='links'>About</Link> page, and if you're interested in speaking to us more, do not hesitate to <Link to='/contact' className='links'>reach out</Link>!<br /><br />Go back to the mapper <span className='links' onClick={() => restart()}>here</span>.
                </p>
            </div>
        </div>
    );
}

export default Results;
