import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { chooseSurvey } from '../actions';
// import { Link } from 'react-router-dom';
// import altsidearrow from '../images/altsidearrow1.svg';
// import altsidearrow2 from '../images/altsidearrow2.svg';

function Intro() {

    useEffect(() => {
        window.scrollTo(0,0);
    });

    const dispatch = useDispatch();

    const loadPage = (dest) => {
        dispatch(chooseSurvey(dest));
        window.scrollTo(0,0);
    }

    return (
        <div style={{ width: '100%' }}>
            <div className='introSurveyArea'>
                <h2 className='pageHeader' style={{ color: '#FFE3A3' }}>Welcome</h2>
                {/* <div style={{ borderLeft: 'solid', paddingLeft: '8px', borderColor: '#FFE3A3', borderWidth: '8px' }}> */}
                    <p className='introText'>
                        We'd like to welcome you to the <span style={{ color: '#FFEDC2'}}>Mindset Mapper</span>.</p>
                    <p className='introText'>On the next two pages, there are two ways to explore your beliefs about intelligence.
                        
                        In the <span style={{ color: '#FFEDC2' }}>Mapper</span>, we'll ask you a question that we'd like you to answer. After that, the survey will ask a few questions that we would like you to answer honestly.</p>
                    <p className='introText'>You aren't required to do both, but we believe the best results come from doing both.</p>
                    <p className='introText'>The navigation bar will let you switch between the different pages, so if you want to go back to something, you always can.</p>
                {/* </div> */}
                <div className='introArrowDiv' style={{ display: 'flex' }}>
                    <p className='arrowText' style={{ backgroundColor: 'green' }} onClick={() => loadPage('mapper')}>Let's get started</p>
                    {/* <div className='introArrow' onClick={() => loadPage('mapper')}>
                        <img src={altsidearrow} className='arrowImage introArrowImage' />
                        <img src={altsidearrow2} className='arrowImageTwo introArrowImageTwo' />
                    </div> */}
                </div>
                    
            </div>
        </div>
    );
}

export default Intro;
