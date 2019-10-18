import React, { Component } from 'react';
import './App.css';
import Survey from './components/Survey';
import Mapper from './components/Mapper';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";


const App = props => {

	return (
		<Router basename='/'>
			<div>
				<div className='navBar'>
					<div style={{ width: '15%' }} />
					<Link to='/' onClick={() => window.scrollTo(0, 0)} style={{ fontSize: '32px', color: '#BEF9F3', textDecoration: 'none', width: '38%', fontWeight: '400' }}>Mindset Map</Link>
					<div className='navLinks' style={{ width: '37%', display: 'flex', justifyContent: 'space-around' }}>
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
					<div style={{ width: '10%' }} />
					{/* <button onClick={pushRoute}>go home</button> */}
				</div>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/contact' component={Contact} />
				<div style={{ display: 'flex', width: '100%', backgroundColor: 'white' }}>
					<div style={{ width: '15%' }} />
					<Route path='/mapper' component={Mapper} />
					<div style={{ width: '15%' }} />
				</div>
			</div>
		</Router>
	);
}

export default App;
