import React, { Component, useState } from 'react';
import './App.css';
import Survey from './components/Survey';
import Mapper from './components/Mapper';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import hamburger from './images/hamburger.svg';
import hamburgerGreen from './images/hamburgerGreen.svg';
// import favicon from './images/favicon.svg';

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";


const App = props => {

    const [showingSideNav, setSideNav] = useState(false);

	const openNav = () => {
		setSideNav(true);
		document.getElementById('sideNav').style.width = '200px';
		// document.getElementById('main').style.marginRight = '250px';
		// document.getElementById('main').style.marginLeft = '-250px';
	}

	const scrollTop = () => {
        window.scrollTo(0,0);
		closeNav();
	}
	  
	const closeNav = () => {
		setSideNav(false);
		document.getElementById('sideNav').style.width = '0';
		// document.getElementById('main').style.marginRight= '0';
		// document.getElementById('main').style.marginRight= '0';

	}

	return (
		<Router basename='/'>
			<div id='sideNav' className='sideNav'>
				<div style={{ }} className='hamburgerDiv' onClick={showingSideNav ? closeNav : openNav}>
					<img src={showingSideNav ? hamburgerGreen : hamburger} style={{ width: '40px', zIndex: '10' }} className='hamburger'  />
				</div>
				<div style={{ paddingTop: '72px' }}>
					<Link to='/' className='' style={{ textDecoration: 'none' }} onClick={scrollTop}>
						<div className='sideNavBarItems'>
							<p className='sideNavText' style={{ }}>Home</p>
						</div>
					</Link>
					<Link to='/mapper' className='' style={{ textDecoration: 'none' }} onClick={scrollTop}>
						<div className='sideNavBarItems'>
							<p className='sideNavText' style={{ }}>Mapper</p>
						</div>
					</Link>
					<Link to='/about' className='' style={{ textDecoration: 'none' }} onClick={scrollTop}>
						<div className='sideNavBarItems'>
							<p className='sideNavText' style={{ }}>About</p>					
						</div>
					</Link>
					<Link to='/contact' className='' style={{ textDecoration: 'none' }} onClick={scrollTop}>
						<div className='sideNavBarItems'>
							<p className='sideNavText' style={{ }}>Contact</p>
						</div>
					</Link>
				</div>
			</div>
			<div id='main'>
				<div className='navBar'>
					<div className='navbarLeftDiv' />
					<Link to='/' onClick={() => window.scrollTo(0, 0)} className='navLogo'>Mindset Map</Link>
					<div className='navLinks'>
						<div style={{ width: '10%' }}></div>
						<Link to='/mapper' className='navBarItems' style={{ width: '30%' }}>
							<p className='' style={{ height: '100%', width: '30%', fontSize: '20px', fontWeight: '400' }}>Mapper</p>
						</Link>
						<Link to='/about' className='navBarItems' style={{ width: '30%' }}>
							<p className='' style={{ height: '100%', width: '30%', fontSize: '20px', fontWeight: '400' }}>About</p>
						</Link>
						<Link to='/contact' className='navBarItems' style={{ width: '30%' }}>
							<p className='' style={{ height: '100%', width: '30%', fontSize: '20px', fontWeight: '400' }}>Contact</p>
						</Link>
					</div>
					{/* <img src={hamburger} style={{ width: '50px', zIndex: '' }} className='hamburger' onClick={showingSideNav ? closeNav : openNav} /> */}
					<div className='navbarRightDiv' />
					{/* <button onClick={pushRoute}>go home</button> */}
				</div>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<div style={{ display: 'flex', width: '100%', backgroundColor: 'white' }}>
					<div className='surveyLeftDiv' />
					<Route path='/mapper' component={Mapper} />
					<div className='surveyRightDiv' />
				</div>
			</div>
		</Router>
	);
}

export default App;
