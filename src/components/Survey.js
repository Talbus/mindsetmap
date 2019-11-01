import React, { useState, useRef, useEffect } from 'react';
// import './App.css';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { response, showSurvey, question } from '../actions';
import Associations from './Associations';

function Survey(props) {

    // console.log(props);
    useEffect(() => {
        // window.scrollTo(0,0);
    });
    const [selected, setSelected] = useState(0);
    const [responseText, setResponse] = useState('');
    const [example, setExample] = useState(0);
    const [showClear, setShowClear] = useState(true);
    const [cachedResponse, setCachedResponse] = useState('');
    const [seeAssociations, setSeeAssociations] = useState(false);
    
    const resp = useSelector(state => state.response);
    const ques = useSelector(state => state.question);

    const dispatch = useDispatch();

    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const scrollToRef = (ref) => window.scrollTo(0, document.body.scrollHeight - 100);
    // window.scrollTo(0,document.body.scrollHeight);
    
    const myRef = useRef(null)
    const backUpRef = useRef(null);

	const handleChange = (selectedValue) => {
        setSelected(selectedValue);
        dispatch(question(selectedValue.value));
        // console.log(ques, 'ques');
        // console.log(`Option selected:`, selected);
        // console.log(selectedValue.value, 'selval');
        // console.log(ques.response[0].payload);
    };

    const textChange = (e) => {
        // dispatch(response(e.target.value.toLowerCase()));
        setSeeAssociations(false);
        dispatch(response(e.target.value));
        setResponse(e.target.value);
        setShowClear(true);
        console.log('changed text', e.target.value);
    };

    const exampleChange = (ex) => {
        // setSeeAssociations(false);
        dispatch(response(examples[ex]));
        setCachedResponse(responseText);
        setResponse(examples[ex]);
        example === 0 ? setExample(1) : setExample(0);
        // setShowClear(false);
    };

	const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
		// option: (provided, state) => ({
            return {
                ...styles,
				// ...provided,
                // color: '#023B26',
                color: '#583D04',
                // color: '#7F5806',
                padding: 15,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                    // ? '#B4E9D6'
                    ? '#FFE3A3'
					: isFocused
                    // ? '#E6FEF5'
                    ? '#FFF3D6'
					: 'null',
				':active': {
                    // when you click on the option
                    ...styles[':active'],
                    // backgroundColor: !isDisabled && (isSelected ? '#E1E7EC' : '#D0F1E5'),
					backgroundColor: !isDisabled && (isSelected ? '#E1E7EC' : '#FFE3A3'),                    
                },
            }                
		},
		control: (base) => ({
        // 	none of react-select's styles are passed to <Control />
            ...base,
            height: 50,
            fontSize: '14px',
            boxShadow: 'inset 0 2px 2px hsla(0, 0%, 0%, 0.1), 0 -2px 0 hsla(0, 0%, 100%, .15)',
            // backgroundColor: '#F5FCF9',
            backgroundColor: 'white',
            '&:hover': { borderColor: '#9AEFDE', 'webkitTransition': 'border-color 200ms linear', 'msTransition': 'border-color 200ms linear', 'transition': 'border-color 200ms linear' },
            border: '1px solid #DFFCF6'
		}),
		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';
			return { ...provided, opacity, transition };
        },
        input: styles => ({ ...styles }),
        placeholder: styles => ({ ...styles }),
        // singleValue: (styles) => ({ ...styles }),
	}

    const options = [
        { value: 0, label: 'Do you think of yourself as intelligent? Why or why not?' },
        { value: 1, label: 'What caused you to have the level of intelligence that you have?' },
        { value: 2, label: 'Describe someone you think of as intelligent.' },
    ];

    const blockTyping = selected === 0 ? true : false;

    const mapFunction = () => {
        setSeeAssociations(true);
        scrollToRef(myRef);
    }
    // <button onClick={() => dispatch(showSurvey())}>ss</button>

    const nextPage = () => {
        dispatch(showSurvey());
        window.scrollTo(0,0);
    }

    const nextButton = <button onClick={nextPage} style={{ marginTop: '36px' }} className='nextButton primaryButton appButton blueColor'>Next</button>;
    const backUpButton = <button style={{ marginTop: '36px', marginRight: '12px' }} className='appButton backUpButton' onClick={() => window.scrollTo(0, 0)}>Try again</button>

    const textArea = selected === 0 ? 'responseField cursorNotAllowed' : 'responseField';
    // changing the cursor when they shouldn't type

    const examples = [
        'This person is curious about the world in a way like no other, and sets out to learn for the sake of learning, not just to study for a test.',
        'I would describe them as intelligent, because they can articulate their thoughts quickly and eloquently. In addition, they seemingly grasp concepts and are able to apply them so readily.'
    ]
    
    const examples_yourself = [
        "I do think of myself as intelligent. When learning math and other subjects requiring graphs and numbers, I tend to pick up the concepts relatively quickly. I become comfortable with new information quickly and it really makes sense to me.",
        "I like to believe that I am an intelligent person. I feel this way not just because of my grades in school or my position as a student at my university, but also because of the passion and effort I put into my endeavors. I have always had a strong desire to learn about the world around me, which drives me to explore topics out of my comfort zone.",
    ]

    const examples_level = [
        "In high school, I was in honors math class and received nearly 100s on all of the tests. When taking the tests, I would see the question and just know immediately how to answer it - the answer set would just flow naturally from me, rather than me struggling for a long time to eventually figure it out.",
        "Hard work! (usually correlated with time, but not necessarily) People gain intelligence as they go through experiences. That's why in many cultures the elderly is admired -- because they've gone through many difficult situations and acquired knowledge that helps them make better choices.",
    ]

    const examples_someone = [
        "This person is curious about the world in a way like no other, and sets out to learn for the sake of learning, not just to study for a test.",
        "I would describe them as intelligent, because they can articulate their thoughts quickly and eloquently. In addition, they seemingly grasp concepts and are able to apply them so readily.",
    ]

    const milestones = [
        { message: 'Write some more!', color: 'gold' },
        { message: 'Almost there, keep writing!', color: 'yellowgreen' },
        { message: 'This is a great length!', color: 'green' }
    ]

    const milestoneMessage = responseText.length < 50 ? milestones[0].message : responseText.length < 100 ? milestones[1].message : milestones[2].message;

    const milestoneClass = responseText.length < 50 ? 'milestoneGold' : responseText.length < 100 ? 'milestoneMid' : 'milestoneGreen';

    const milestoneGold = responseText.length <= 50 ? 'milestoneGold milestone' : 'milestoneGray';
    const milestoneMid = (responseText.length > 50 && responseText.length < 100) ? 'milestoneMid milestone' : 'milestoneGray';
    const milestoneGreen = responseText.length >= 100 ? 'milestoneGreen milestone' : 'milestoneGray';

    const clearText = (act) => {
        if (act === 'clear') {
            setCachedResponse(responseText);
            setResponse('');
            setShowClear(false);
            dispatch(response(''));
        } else {
            setResponse(cachedResponse);
            setShowClear(true);
            dispatch(response(cachedResponse));
        }
    }

    const clearAndUndo = showClear ? <button className='clearButton' onClick={() => clearText('clear')}>Clear</button> : <button className='clearButton' onClick={() => clearText('undo')}>Undo</button>


	return (
        // <div className='' style={{ width: '70%', marginTop: '50px' }}>
        <div className='' style={{ width: '100%', marginTop: '' }} ref={backUpRef}>
            {/* <div className='content'> */}
            <div>
                {/* <div className='progressBar'> */}
                    {/* progress bar */}
                {/* </div> */}

                <div className='surveyArea'>
                    <h2 className='pageHeader'>Mapper</h2>
                    <h3 style={{ margin: '0', fontSize: '18px', width: '100%', fontWeight: '400', color: '#212934' }}>Choose a question from the dropdown and answer with a few sentences.</h3>
                    <h3 style={{ margin: '0', fontSize: '16px', width: '100%', fontWeight: '400', color: '#404B5A', marginTop: '4px' }}>Alternatively, try one of our example responses.</h3>
                    <h4 style={{ margin: '15px 0 20px 0', fontSize: '14px', color: '#404B5A', fontWeight: '400' }}>Press <span style={{ color: '#0F5C4D', fontWeight: '700', letterSpacing: '.5px' }}>Map it</span> when you're finished!</h4>
                    <div className='dropdown'>
                        <Select
                            // isClearable={true}
                            className='dropdown'
                            styles={customStyles}
                            value={selected}
                            // value={ques.response ? ques.response[0].payload : ''}
                            // value={useSelector(state => state.question.response[0].payload)}
                            onChange={handleChange}
                            options={options}
                            label='Single select'
                            // placeholder='Choose a question'
                            // placeholder={options[0].label}
                            placeholder={ques.response ? options[ques.response[0].payload].label : 'Choose a question'}
                            // placeholder={options[ques.response[0].payload].label}
                            isSearchable='false'
                            defaultValue={options[0]}>
                        </Select>
                    </div>
                    <div className='displayQuestion'>
                        <div style={{ width: '10%' }} />
                        <p style={{ margin: '0', color: '#063C31', width: '80%' }}>
                            {selected ? selected.label : ''}
                        </p>
                        <div style={{ width: '10%' }} />
                    </div>
                    <textarea
                        rows='4'
                        className={textArea}
                        placeholder='Type your response here!'
                        onChange={textChange}
                        // value={responseText}
                        value={resp.response ? resp.response[0].payload : ''}
                        readOnly={blockTyping}
                        style={{ backgroundColor: '' }}
                    />
                    <div className='textButtonsDiv'>
                        <div style={{ width: '25%' }}>
                            {clearAndUndo}
                        </div>
                        <div style={{ display: 'flex', padding: '0px', justifyContent: 'center', width: '50%' }}>
                            <div className={milestoneGold}>
                                <p 
                                    style={{ display: '', margin: '0', textAlign: 'center' }}
                                    >{milestones[0].message}</p>
                            </div>
                            <div className={milestoneMid}>
                                <p 
                                    style={{ display: '', margin: '0', textAlign: 'center' }}
                                    // className={milestoneMid}
                                    >{milestones[1].message}</p>
                            </div>
                            <div className={milestoneGreen}>
                                <p 
                                    style={{ display: '', margin: '0', textAlign: 'center' }}
                                    // className={milestoneGreen}
                                    >{milestones[2].message}</p>
                            </div>
                        </div>
                        <div style={{ width: '25%', display: 'flex', justifyContent: 'flex-end' }}>
                            <button className='clearButton' onClick={() => exampleChange(example)}>See an example</button>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px 0 0 0' }}>
                        <button className='primaryButton appButton greenColor' onClick={() => mapFunction()}>Map it</button>
                    </div>

                    <br />
                    {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '64px' }}> */}
                        {/* <button className='secondaryButton appButton' onClick={() => exampleChange(example)}>Example</button> */}
                        {/* <button className='primaryButton appButton' onClick={() => dispatch(response(responseText.toLowerCase()))}>Map it</button> */}
                        {/* <button ref={myRef} className='primaryButton appButton greenColor' onClick={() => mapFunction()}>Map it</button> */}
                    {/* </div> */}
                    {/* <h1>{selected.label}</h1> */}

                    {/* {(resp.response ? console.log(resp.response[0].payload) : ' ')} */}
                    {/* {resp.response ? resp.response[0].payload : ''} */}
                    {/* {resp.response ? <Associations /> : ''} */}
                    {seeAssociations && resp.response ? <Associations /> : <div style={{ height: '300px' }} />}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {seeAssociations && resp.response ? backUpButton : ''}
                        {seeAssociations && resp.response ? nextButton : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Survey;
