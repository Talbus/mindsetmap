import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fixedWords, growthWords } from '../actions';
// import { response } from '../actions';

function Associations() {

    const [fixedTerms, setFixed] = useState([]);
    const [growthTerms, setGrowth] = useState([]);
    
    const resp = useSelector(state => state.response);

    const dispatch = useDispatch();

    const fixedKeyOne = [
        'easily', 'naturally', 'talent', 'talented', 'iq', 'memory', 'fast', 'quickly', 'easy', 'born', 'gifted', 'ease', 'bright', 'quick', 'tests', 'testing', 'inherent', 'genius', 'grasp', 'recall', 'einstein', 'easier', 'unique', 'effortlessly', 'effortless', 'faster', 'concepts', 'innate', 'quicker', 'seemingly'
    ];
    const fixedKeyTwo = [
        'no effort', 'rarely studies', 'doesn\'t need', 'never studies', 'book smart', 'good grades'
    ];
    const fixedKeyThree = [
        'too much time', 'always does better',
    ]
    const growthKeyOne = [
        'dedicated', 'passion', 'studious', 'practice', 'motivated', 'driven', 'diligent', 'thorough', 'eager', 'curious', 'interest', 'open-minded', 'adapt', 'flexible', 'malleable', 'explore', 'challenge', 'improve', 'driven', 'grow', 'growth', 'caused', 'gain', 'desire', 'motivated', 'motivation'
    ];
    const growthKeyTwo = [
        'push through', 'work hard', 'lifetime learner', 'open minded', 'love of', 'try again', 'tries again', 'give up', 'desire to'
    ];
    const growthKeyThree = [
        'dedicated with passion', 'willing to learn', 'strive to understand', 'excited about learning', 'learn from mistakes'
    ];

    const fixedList = fixedTerms.map((term, index) =>
        <p key={index} style={{ fontSize: '24px', margin: '5px 15px' }}>
            {term}
        </p>
    );

    const growthList = growthTerms.map((term, index) =>
        <p key={index} style={{ fontSize: '24px', margin: '5px 15px' }}>
            {term}
        </p>
    );

    const calculateResponse = () => {
        const allFixed = fixedKeyOne.concat(fixedKeyTwo.concat(fixedKeyThree));
        const allGrowth = growthKeyOne.concat(growthKeyTwo.concat(growthKeyThree));
        // console.log('allfixed', allFixed);
        // console.log('allgrowth', allGrowth);
        const res = resp.response[0].payload.toLowerCase();
        var fixed;
        var growth;
        if (allFixed.length > 0 && allGrowth.length > 0) {
            fixed = allFixed.filter(function(gram) {
                if (res.includes(gram)) {
                    return gram;
                }
            });
            growth = allGrowth.filter(function(gram) {
                if (res.includes(gram)) {
                    return gram;
                }
                return '';
            });
            setFixed(fixed);
            setGrowth(growth);
            dispatch(fixedWords(fixed));
            dispatch(growthWords(growth));
            console.log('fixed', fixed, '\ngrowth', growth);
        };
    };

    useEffect(() => {
        calculateResponse();
    }, [resp]);

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <div className='association associationLeft'>
                <div style={{ width: '100%', padding: '5px 0', borderColor: '#DFFCF6', borderStyle: 'none none solid none' }}>
                {/* <div style={{ width: '100%', padding: '5px 0', borderColor: '#F0F4FE', borderStyle: 'none none solid none' }}> */}
                    <p style={{ margin: '0 15px 0 0' }}>fixed</p>
                </div>
                {fixedList}
            </div>
            <div className='association associationRight'>
                <div style={{ width: '100%', padding: '5px 0', borderColor: '#DFFCF6', borderStyle: 'none none solid none' }}>
                    <p style={{ margin: '0 0 0 15px' }}>growth</p>
                </div>
                {growthList}
            </div>
        </div>
    )    
}

export default Associations;
