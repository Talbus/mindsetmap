import React, { useRef, useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import arrow from '../images/arrow.svg';
import sidearrow from '../images/sidearrow.svg';
import sidearrow2 from '../images/sidearrow2.svg';
// import arrowOpacity from '../images/arrowOpacity.svg';
// import arrowpng from '../images/arrowpng.png';

function Home() {

    // const [imgSrc, setImgSrc] = useState(sidearrow);
    // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    // const myRef = useRef(null);
    // const handleMouseOver = this.handleMouseOver.bind(this);
    // const handleMouseOut = this.handleMouseOut.bind(this);

    // const handleMouseOver = () => {
    //     setImgSrc(sidearrow2);
    // };

    // const handleMouseOut = () => {
    //     setImgSrc(sidearrow);
    // };
    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', scrollBehavior: 'smooth' }}>
            <div className='homeBackground'>
                <div className='homeLeftDiv' />
                {/* <div className='homeDiv' style={{ width: '55%', paddingBottom: '', height: '300px', display: 'flex', flexDirection: 'column' }}> */}
                <div className='homeDiv'>
                    {/* <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> */}
                    {/* <h1 style={{ marginTop: '', marginBottom: '0', color: '#9AEFDE', width: '100%', fontSize: '72px', fontWeight: '400' }}> */}
                    <h1 className='welcomeText' style={{ }}>
                        Welcome to the Mindset Mapper
                    </h1>
                    <p className='welcomeSubtext'>
                        Helping you explore intelligence beliefs through language
                    </p>
                </div>
                <Link to='/mapper' className='exploreDiv' style={{ }}>
                    {/* <img src={imgSrc} className='arrowImage' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ width: '40%', marginTop: '' }} /> */}
                    <div className='arrowDiv' style={{  }}>
                        <img src={sidearrow} className='arrowImage' style={{  }} />
                        <img src={sidearrow2} className='arrowImageTwo' style={{ }} />
                    </div>
                    <div style={{ height: '50px' }}>
                        <p className='homeExplore' style={{ margin: '18px 0', fontSize: '18px', height: '' }}>Explore your mindset</p>
                    </div>
                    {/* <p style={{ color: '#FFF3D6', fontSize: '16px', fontWeight: '600', letterSpacing: '.5px' }} className='homeExplore'>Explore your mindset</p> */}
                </Link>
                <div className='homeRightDiv' />
            </div>
        </div>
    );
}

export default Home;
