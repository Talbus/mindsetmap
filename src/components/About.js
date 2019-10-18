import React, { useState, useRef, useEffect } from 'react';
import Survey from './Survey';
import Results from './Results';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey } from '../actions';



function About() {

    // const displaySurvey = useSelector(state => state.showSurvey);
    // const dispatch = useDispatch();
    // const resp = useSelector(state => state.response);
    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className='' style={{ width: '100%', marginTop: '50px', paddingBottom: '50px', backgroundColor: '#239A82', display: 'flex', minHeight: '100vh'}}>
            <div style={{ width: '15%' }}>

            </div>
            <div style={{ width: '65%' }}>
                <h1 className='aboutHeader'>About the Mindset Mapper</h1>
                <p style={{ color: '#BEF9F3', fontSize: '20px', fontStyle: 'italic', margin: '8px 0', width: '90%' }}>Our project lies at the intersection of psychology and pedagogy.</p>
                <p style={{ color: '#DFFCF6', width: '90%', marginTop: '2px' }} className='justify'><span className='bold'>Our work addresses research questions that can strengthen psychological research <span className='italic'>and</span> how students learn in real classrooms. </span>We started by teaching students about intelligence mindsets by using their own words as illustrations of fixed and growth mindsets, which was a powerful way of illustrating the diversity of beliefs of students sitting in the same lecture hall and classroom.</p>
                
                <h1 className='aboutHeader'>What is a growth mindset?</h1>
                <p style={{ color: '#BEF9F3', fontSize: '20px', fontStyle: 'italic', margin: '8px 0', width: '90%' }}>What people believe about intelligence has far-reaching consequences.</p>
                <p style={{ color: '#DFFCF6', width: '90%', marginTop: '2px' }} className='justify'><span className='bold'>A growth mindset is the belief that intelligence can be developed. </span>Students with a growth mindset understand they can get smarter through hard work, the use of effective strategies, and help from others when needed. It is contrasted with a fixed mindset: the belief that intelligence is a fixed trait that is set in stone at birth.</p>
                <p style={{ color: '#DFFCF6', width: '90%', marginTop: '2px' }} className='justify'><span className='bold'>Can we detect beliefs about intelligence without the use of an obvious scale? </span>We soon realized that what people were writing about intelligence could sharpen and push the research on intelligence beliefs. We suspected that we could find ways to systematically sort written responses into growth or fixed categories.</p>
            </div>
            <div style={{ width: '20%' }}>

            </div>
           
            
        
        </div>

    );
}

export default About;