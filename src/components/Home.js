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
                <div style={{ width: '15%' }}></div>
                {/* <div className='homeDiv' style={{ width: '55%', paddingBottom: '', height: '300px', display: 'flex', flexDirection: 'column' }}> */}
                <div className='homeDiv' style={{ width: '55%', paddingBottom: '' }}>
                    {/* <button onClick={()=>scrollToRef(myRef)} >Click to scroll </button> */}
                    <h1 style={{ marginTop: '', marginBottom: '0', color: '#9AEFDE', width: '100%', fontSize: '72px', fontWeight: '400' }}>
                        Welcome to the Mindset Mapper
                    </h1>
                    <p style={{ paddingLeft: '0px', fontSize: '20px', color: '#FFF3D6' }}>
                        Helping you explore intelligence beliefs through language
                    </p>
                </div>
                {/* <Link to='/mapper' style={{ width: '30%', height: '300px', display: 'flex', justifyContent: 'flexStart', alignItems: 'flexEnd', flexDirection: 'column', textDecoration: 'none' }}> */}
                {/* <Link to='/mapper' style={{ width: '30%', height: '300px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', textDecoration: 'none' }}> */}
                <Link to='/mapper' style={{ width: '20%', marginTop: '0px', height: '350px', display: 'flex', justifyContent: '', alignItems: '', flexDirection: 'column', textDecoration: 'none' }}>
                    {/* <img src={imgSrc} className='arrowImage' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{ width: '40%', marginTop: '' }} /> */}
                    <div style={{ position: 'relative', width: '90%', height: '300px', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column' }}>
                        <img src={sidearrow} className='arrowImage' style={{ width: '100%', marginTop: '', position: 'absolute', left: '0', zIndex: '2' }} />
                        <img src={sidearrow2} className='arrowImageTwo' style={{ width: '100%', marginTop: '', position: 'absolute', left: '0' }} />
                    </div>
                    <div style={{ height: '50px' }}>
                        <p className='homeExplore' style={{ margin: '18px 0', fontSize: '18px', height: '' }}>Explore your mindset</p>
                    </div>
                    {/* <p style={{ color: '#FFF3D6', fontSize: '16px', fontWeight: '600', letterSpacing: '.5px' }} className='homeExplore'>Explore your mindset</p> */}
                </Link>
                <div style={{ width: '10%' }} />
            </div>
        </div>
    );
}

export default Home;
