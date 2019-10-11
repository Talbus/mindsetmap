import React, { Component, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrow from '../images/arrow.svg';
import sidearrow from '../images/sidearrow.svg';
// import arrowOpacity from '../images/arrowOpacity.svg';
// import arrowpng from '../images/arrowpng.png';

function Home() {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
    const myRef = useRef(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', scrollBehavior: 'smooth' }}>
            <div className='homeBackground'>
                <div style={{ width: '15%' }}></div>
                <div style={{ width: '55%', paddingBottom: '', height: '300px', display: 'flex', flexDirection: 'column' }}>
                    {/* <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> */}
                    <h1 style={{ marginTop: '60px', marginBottom: '0', color: '#9AEFDE', width: '100%', fontSize: '72px', fontWeight: '500' }}>
                        Welcome to the Mindset Mapper
                    </h1>
                    <p style={{ paddingLeft: '0px', fontSize: '20px', color: '#BEF9F3' }}>
                        Helping you explore intelligence beliefs through language
                    </p>
                    {/* <div style={{ display: 'flex' }}>
                        <div style={{ width: '70%' }} />
                        <Link to='/survey' className='noTextDecoration toSurveyButton' style={{ position: 'fixed', right: '7%', bottom: '18%' }}>
                            <div style={{ borderStyle: 'none', borderWidth: 'thin', width: '85%', borderColor: '#2EB885' }}>
                                <p style={{ fontSize: '16px', padding: '4px', textAlign: 'center', marginRight: '0px' }}>Explore your mindset</p>
                            </div>
                            <img src={sidearrow} style={{ width: '15%', paddingRight: '10px' }} />
                        </Link>
                    </div> */}
                    {/* <div style={{ display: 'flex' }}>
                        <div style={{ width: '35%' }} />
                        <div className='arrowImage' onClick={()=>scrollToRef(myRef)}>
                            <div style={{ borderStyle: 'none', borderWidth: 'thin' }}>
                                <p style={{ textAlign: 'center', margin: '0', color: '#023B26' }}>Learn more</p>
                            </div>
                            <img src={arrow} />
                        </div>
                        <div style={{ width: '45%' }} />
                    </div> */}
                    {/* <div ref={myRef} style={{ backgroundColor: 'red', width: '100%' }}>Scroll here</div> */}
                </div>
                <Link to='/mapper' style={{ width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textDecoration: 'none' }}>
                    <img src={sidearrow} style={{ width: '40%', marginTop: '120px' }} />
                    <p style={{ color: '#9AEFDE', fontSize: '16px', fontWeight: '600', letterSpacing: '.5px' }}>Explore your mindset</p>
                </Link>
            </div>
            <div style={{ display: 'flex', bottom: '5%', backgroundColor: '#D0F1E5', justifyContent: 'space-betwen' }}>
                <div style={{ width: '40%' }} />
                <div className='arrowImage' onClick={()=>scrollToRef(myRef)}>
                    <div style={{ borderStyle: 'none', borderWidth: 'thin' }}>
                        <p style={{ textAlign: 'center', margin: '0', color: '#023B26' }}>Learn more</p>
                    </div>
                    <img src={arrow} />
                </div>
                <div style={{ width: '40%' }} />
            </div>
            <div className='aboutBackground' ref={myRef}>
                {/* <div ref={myRef} style={{ backgroundColor: '#FFE3A3', width: '100%', height: '1000px' }}> */}
                <div style={{ width: '15%' }}></div>
                <div style={{ width: '85%', paddingBottom: '', height: '500px' }}>
                    <h1 style={{ margin: '120px 0', color: '#023B26', fontSize: '72px' }}>About the project</h1>                    
                </div>
            </div>
        </div>
    );
}

export default Home;
