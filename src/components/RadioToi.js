import React, { useState, useRef } from 'react';
// import './App.css';
// import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { fixedOne, fixedTwo, growthOne, growthTwo } from '../actions';

function RadioToi(props) {

    const dispatch = useDispatch();
    const dest = props.destination;

    const backUpRef = useRef(null);

    const [selected, setSelected] = useState(-1);

    const handleClick = (e, f) => {
        console.log('this is ', e, f);
        setSelected(e-1);
        if (dest === 0) {
            dispatch(fixedOne(f));
        } else if (dest === 1) {
            dispatch(fixedTwo(f));
        } else if (dest === 2) {
            dispatch(growthOne(e));
        } else if (dest === 3) {
            dispatch(growthTwo(e));
        }
    }

    return (
        <div className='radioGroup'>
            <button className={`toiButton dalotButton ${selected === 0 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(1,6)}>
                <p className='toiButtonText'>Disagree a lot</p>
            </button>
            <button className={`toiButton dButton ${selected === 1 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(2,5)}>
                <p className='toiButtonText'>Disagree</p>
            </button>
            <button className={`toiButton dmButton ${selected === 2 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(3,4)}>
                <p className='toiButtonText'>Disagree mostly</p>
            </button>
            <button className={`toiButton amButton ${selected === 3 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(4,3)}>
                <p className='toiButtonText'>Agree mostly</p>
            </button>
            <button className={`toiButton aButton ${selected === 4 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(5,2)}>
                <p className='toiButtonText'>Agree</p>
            </button>
            <button className={`toiButton aalotButton ${selected === 5 ? ' toiButtonSelected' : ' toiButtonNotSelected'}`} onClick={() => handleClick(6,1)}>
                <p className='toiButtonText'>Agree a lot</p>
            </button>
        </div>
    );
}

export default RadioToi;
