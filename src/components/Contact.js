import React, { useState, useRef, useEffect } from 'react';
// import { Link } from "react-router-dom";
import brenda from '../images/brenda.png';
import christina from '../images/christina.jpg';
import bridgette from '../images/bridgette.jpg';
import sydney from '../images/sydney.jpg';
import noah from '../images/noah.jpg';
import tommy from '../images/tommy.jpg';
import taylor from '../images/taylor.jpg';
import ceren from '../images/ceren.jpg';
import twitter from '../images/twitter.png';
import search from '../images/search.svg';
import email from '../images/email.svg';


// import Survey from './Survey';
// import Results from './Results';
// import { useSelector, useDispatch } from 'react-redux';
// import { response, showSurvey } from '../actions';



function Contact() {

    // const displaySurvey = useSelector(state => state.showSurvey);
    // const dispatch = useDispatch();
    // const resp = useSelector(state => state.response);
    useEffect(() => {
        // window.scrollTo(0,0);
    });
    return (
        <div className='' style={{ width: '100%', marginTop: '50px', paddingBottom: '50px', backgroundColor: '#0F5C4D', display: 'flex', minHeight: '100vh'}}>
            <div className='contactLeftDiv'>

            </div>
            <div className='contactBodyDiv'>
                <h1 className='contactHeader'>Meet the Team</h1>
                <div style={{ }} className='contactPhotosDiv'>
                    <div className='contactDiv researcher'>
                        <img className='contactPhotos researcherPhoto' style={{ }} src={christina} />
                        <p className='researcherName'>Christina Bejjani</p>
                        <p className='researcherExtra'>PhD Student</p>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%'}}>
                            <a href='https://twitter.com/chbejjani' target="_blank">
                                <img className='twitterIcon' src={twitter} />
                            </a>
                            <a href='https://christinabejjani.com/' target="_blank">
                                <img className='twitterIcon' src={search} />
                            </a>
                            <a href='mailto:christina.bejjani@duke.edu'>
                                <img className='twitterIcon' src={email} />
                            </a>
                        </div>
                        
                    </div>
                    <div className='contactDiv researcher'>
                        <img className='contactPhotos researcherPhoto' style={{ }} src={brenda} />
                        <p className='researcherName'>Brenda Yang</p>
                        <p className='researcherExtra'>PhD Student</p>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%'}}>
                            <a href='https://twitter.com/brendawyang' target="_blank">
                                <img className='twitterIcon' src={twitter} />
                            </a>
                            <a href='https://brendawyang.github.io/mysite/' target="_blank">
                                <img className='twitterIcon' src={search} />
                            </a>
                            <a href='mailto:brenda.yang@duke.edu'>
                                <img className='twitterIcon' src={email} />
                            </a>
                        </div>
                        
                    </div>
                    <div className='contactDiv researcher'>
                        <img className='contactPhotos researcherPhoto' style={{ }} src={bridgette} />
                        <p className='researcherName'>Bridgette Hard</p>
                        <p className='researcherExtra'>Principle Investigator</p>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '50%'}}>
                            <a href='https://twitter.com/bmartinhard' target="_blank">
                                <img className='twitterIcon' src={twitter} />
                            </a>
                            <a href='https://twitter.com/bmartinhard' target="_blank">
                                <img className='twitterIcon' src={search} />
                            </a>
                            <a href='mailto:bridgette.hard@duke.edu'>
                                <img className='twitterIcon' src={email} />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <h1 className='contactHeader'>Research Assistants</h1>
                <div className='contactPhotosDiv allAssistants'>
                    <div className='contactDiv assistant'>
                        <img className='contactPhotos assistantPhoto' style={{ }} src={sydney} />
                        <p className='assistantName'>Sydney Albert</p>
                        <p className='assistantExtra'>Class of 2022</p>
                    </div>
                    <div className='contactDiv assistant'>
                        <img className='contactPhotos assistantPhoto' style={{ }} src={noah} />
                        <p className='assistantName'>Noah Schaffir</p>
                        <p className='assistantExtra'>Class of 2021</p>
                    </div>
                    <div className='contactDiv assistant'>
                        <img className='contactPhotos assistantPhoto' style={{ }} src={tommy} />
                        <p className='assistantName'>Tommy O'Connor</p>
                        <p className='assistantExtra'>Class of 2020</p>
                    </div>
                    <div className='contactDiv assistant'>
                        <img className='contactPhotos assistantPhoto' style={{ }} src={taylor} />
                        <p className='assistantName'>Taylor Albus</p>
                        <p className='assistantExtra'>Class of 2020</p>
                    </div>
                    <div className='contactDiv assistant'>
                        <img className='contactPhotos assistantPhoto' style={{ }} src={ceren} />
                        <p className='assistantName'>Ceren Ebrem</p>
                        <p className='assistantExtra'>Class of 2020</p>
                    </div>
                </div>
            </div>
            <div className='contactRightDiv'>

            </div>
           
            
        
        </div>

    );
}

export default Contact;