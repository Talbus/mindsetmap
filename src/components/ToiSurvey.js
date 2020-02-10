import React, { useState, useRef, useEffect } from 'react';
// import './App.css';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey, question, chooseSurvey } from '../actions';
import RadioToi from './RadioToi';

function ToiSurvey() {
    const backUpRef = useRef(null);

    const [numAnswered, setNumAnswered] = useState(0);
    const dispatch = useDispatch();

    // fixed1, fixed2, etc all equal 0 when they're initalized


    const fixed1 = useSelector(state => state.fixedOne);
    const fixed2 = useSelector(state => state.fixedTwo);

    const growth1 = useSelector(state => state.growthOne);
    const growth2 = useSelector(state => state.growthTwo);

    const allAnswered = fixed1 !== 0 && fixed2 !== 0 && growth1 !== 0 && growth2 !== 0;

    const nextPage = () => {
        if (allAnswered) {
            console.log(fixed1.response[0].payload + fixed2.response[0].payload + growth1.response[0].payload + growth2.response[0].payload);
            dispatch(chooseSurvey('results'));
        }
    }

    const nButton = <button style={{ marginTop: '36px' }} className='nextButton primaryButton appButton blueColor' onClick={nextPage}>Results</button>
    const blockedButton = <button style={{ marginTop: '36px' }} className='nextButton primaryButton appButton blockedToiButton cursorNotAllowed'>Results</button>
    const nextButton = allAnswered ? nButton : blockedButton;

    

    return (
        <div className='' style={{ width: '100%' }} ref={backUpRef}>
            <div className='surveyArea'>
                <h2 className='pageHeader'>Survey</h2>
                <h3 style={{ fontSize: '18px', fontWeight: '400', color: '#063C31' }}>In this section, rate how much you agree or disagree with these statements. <br />Go with your gut!</h3>
                {/* {console.log(fixed1.response[0].payload)} */}
                {/* <p>{fixed1.response}, {fixed2.response}, {growth1.response}, {growth2.response}</p> */}
                {/* {fixed1.state ? console.log(fixed1.response[0].payload) : console.log()} */}
                {/* fixed1 */}
                <div className='toiQuestion'>
                    <p className='toiQ' style={{ margin: '', fontSize: '18px', width: '100%', fontWeight: '400', color: '#212934' }}>
                        My intelligence is something very basic about me that I can’t change very much</p>
                    <RadioToi destination={0} reversed={true} />
                </div>
                
                {/* fixed2 */}
                <div className='toiQuestion'>
                    <p className='toiQ' style={{ margin: '', fontSize: '18px', width: '100%', fontWeight: '400', color: '#212934' }}>
                        I can learn new things, but I can’t really change how intelligent I am</p>
                    <RadioToi destination={1} reversed={true} />
                </div>

                {/* growth1 */}
                <div className='toiQuestion'>
                    <p className='toiQ' style={{ margin: '', fontSize: '18px', width: '100%', fontWeight: '400', color: '#212934' }}>
                        No matter how much intelligence I have, I can always change it quite a bit</p>
                    <RadioToi destination={2} reversed={false} />
                </div>

                {/* growth2 */}
                <div className='toiQuestion'>
                    <p className='toiQ' style={{ margin: '', fontSize: '18px', width: '100%', fontWeight: '400', color: '#212934' }}>
                        I can always substantially change how intelligent I am</p>
                    <RadioToi destination={3} reversed={false} />
                </div>


                {/* <button onClick={typeof fixed1.response != 'undefined' ? console.log(fixed1.response[0].payload) : console.log('try again')}> */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {nextButton}
                </div>
            </div>
        </div>
        
    );
}

export default ToiSurvey;
