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
        // window.scrollTo(0,0);
    });

    return (
        <div className='' style={{ width: '100%', marginTop: '50px', paddingBottom: '50px', backgroundColor: '#239A82', display: 'flex', minHeight: '100vh'}}>
            <div className='aboutLeftDiv'>

            </div>
            <div className='aboutBodyDiv'>
                <h1 className='aboutHeader'>What is a Growth Mindset??</h1>
                <p style={{ color: '#BEF9F3', fontSize: '20px', fontStyle: 'italic', margin: '8px 0'}} className='aboutBodyText'>What people believe about intelligence has far-reaching consequences.</p>
                <p style={{ color: '#DFFCF6', marginTop: '2px' }} className='justify aboutBodyText'><span className='bold'>A growth mindset is the belief that intelligence can be developed through effort and experience. </span>Students with a growth mindset understand they can get smarter through hard work, the use of effective strategies, and help from others when needed. It is contrasted with a fixed mindset: the belief that intelligence is a fixed trait that is set in stone at birth. Students with a fixed mindset tend to fixate on performance metrics like grades as being reflective of their level of intelligence.</p>
        
                <h1 className='aboutHeader'>About the Mindset Mapper</h1>
                <p style={{ color: '#BEF9F3', fontSize: '20px', fontStyle: 'italic', margin: '8px 0' }} className='aboutBodyText'>Our project lies at the intersection of psychology and pedagogy.</p>
                <p style={{ color: '#DFFCF6', marginTop: '2px' }} className='justify aboutBodyText'><span className='bold'>Our work addresses research questions that can strengthen psychological theories <span className='italic'>and</span> how students learn in real classrooms. </span> We started by teaching students about intelligence mindsets by using their own words to illustrate different beliefs about intelligence. This was a powerful way of demonstrating that students sitting in the same lecture hall held diverse beliefs. <br /> <br /> We soon realized that what students were writing about intelligence could also sharpen and advance the research on growth and fixed mindsets by providing an indirect window into intelligence beliefs. We suspected that we could systematically identify mindsets based on patterns of language in the written descriptions.  We asked research assistants with some training on the concept of intelligence mindset to read and code students responses as reflecting either fixed or growth mindsets. We found that research assistants tended to agree with one another and that their coding was predictive of what students scored on the traditional measure of mindsets (i.e., the theory of intelligence scale, see below). For more information, please email Brenda Yang or Christina Bejjani. They will happily provide a copy of a submitted manuscript that describes the research in greater detail. <br /> <br /> We created the "Mindset Mapper" to make it easier for students, instructors, and even other researchers to explore language that our research suggests can reflect growth and fixed mindsets.</p>
                
                <h1 className='aboutHeader'>About the Theory of Intelligence Scale</h1>
                <p style={{ color: '#BEF9F3', fontSize: '20px', fontStyle: 'italic', margin: '8px 0'}} className='aboutBodyText'>This scale is how intelligence mindset is most commonly measured by psychologists.</p>
                <p style={{ color: '#DFFCF6', marginTop: '2px' }} className='justify aboutBodyText'><span className='bold'>The Theory of Intelligence (TOI) scale consists of 4 items,</span> two which describe intelligence as being fixed and unchanging (fixed mindset) and two which describe intelligence as being malleable and grown (growth mindset). The research underlying the development of the scale has been pioneered by Carol Dweck at Stanford University (see Dweck's popular psychology book, <span className='italic'>Mindset: The Psychology of Success,</span> for more information). Your score on the TOI scale indicates which mindset that you hold. We here have scored the scale so that higher scores indicate a greater propensity towards a growth mindset, while lower scores indicate a greater propensity towards a fixed mindset.</p>
                
            </div>
            <div className='aboutRightDiv'>

            </div>
           
            
        
        </div>

    );
}

export default About;
