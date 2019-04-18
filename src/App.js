import React, {  useState, useEffect, Fragment } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import logo from './logo.svg';
import './App.css';

import GoogleMaps from './components/googleMaps';
import Header from './components/Header';

const App = () => {

	const [allLocation, setAllLocation] = useState([]);

	useEffect(() => {
		MapsAPI.search('coffee')
		.then(data => setAllLocation(data.venues))
	}, [])

	return (
		<Fragment>
			<Header title="Vilinha"></Header>
			<GoogleMaps 
				isMarkerShown
				location={allLocation}
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3YLiVZd1yNE6wtL0s526RC-tMn5geMrY&v=3&libraries=geometry,drawing,places"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</Fragment>
	);
}
	
export default App;
