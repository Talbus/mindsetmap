import React, { useState, useRef, useEffect } from 'react';
import Survey from './Survey';
import Results from './Results';
import ToiSurvey from './ToiSurvey';
import RadioToi from './RadioToi';
import Intro from './Intro';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey, chooseSurvey } from '../actions';
import circle from '../images/timelineCircle.svg';



function Mapper() {

    const displaySurvey = useSelector(state => state.showSurvey);
    // const displayToi = useSelector(state => state.showToi)
    const chosenSurvey = useSelector(state => state.chooseSurvey);
    // this one decides which to show

    const dispatch = useDispatch();
    const resp = useSelector(state => state.response);
    
    const [loaded, setLoaded] = useState(false);
    const [dest, setDest] = useState('intro');

    const canLoad = chosenSurvey !== 'init';


    useEffect(() => {
        // window.scrollTo(0,0);
        // console.log(chosenSurvey.response[0].payload);
        chosenSurvey !== 'init' ? console.log('chosen is ', chosenSurvey.response[0].payload) : console.log('initial');
        if (canLoad) {
            setDest(chosenSurvey.response[0].payload);
        }
    });

    const showMapper = (source) => {
        setLoaded(true);
        setDest(source);
        // if (displaySurvey && source === 'results' || !displaySurvey && source === 'mapper') {
        //     dispatch(showSurvey());
        // }
        // dispatch(showSurvey());
        window.scrollTo(0,0);
        dispatch(chooseSurvey(source));

    }

    return (
        <div className='allMapper' style={{ width: '100%', marginBottom: '50px', backgroundColor: 'white' }}>
            
            <div className='content'>
                <div className='progressBar'>
                    {/* progress bar */}
                    <div className='timelineDiv' onClick={() => showMapper('intro')}>
                        <img src={circle} className={dest == 'intro' ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        <p className='timelineText'>Start</p>
                    </div>
                    <div className='timelineDiv' onClick={() => showMapper('mapper')}>
                        <img src={circle} className={dest == 'mapper' ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        <p className='timelineText'>Mapper</p>
                    </div>
                    <div className='timelineDiv' onClick={() => showMapper('toi')}>
                        <img src={circle} className={dest == 'toi' ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        <p className='timelineText'>Survey</p>
                    </div>
                    <div className='timelineDiv' onClick={() => showMapper('results')}>
                        <img src={circle} className={dest == 'results' ? 'timelineCircle' : 'timelineCircle circleOpacity'} />
                        <p className='timelineText'>Results</p>
                    </div>
                </div>
                {!canLoad ? <Intro /> : chosenSurvey.response[0].payload === 'intro' ? <Intro /> : chosenSurvey.response[0].payload === 'mapper' ? <Survey /> : chosenSurvey.response[0].payload === 'toi' ? <ToiSurvey /> : <Results />}
            </div>
        </div>

    );
}

export default Mapper;