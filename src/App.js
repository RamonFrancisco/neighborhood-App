import React, {  useState, useEffect, Fragment } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import logo from './logo.svg';
import './App.scss';

import GoogleMaps from './components/googleMaps';
import Header from './components/header/Header';

const App = () => {


	const [allLocation, setAllLocation] = useState([]);
	const [location, setLocation] = useState({});
	const [photo, setPhoto ] = useState('');

	const sourcePhoto = (id) => {
		MapsAPI.getPhoto(id)
		.then(data => setPhoto(data))
	}

	useEffect(() => {
		MapsAPI.search('coffee')
		.then(data => setAllLocation(data.venues))
	}, [])

	return (
		<Fragment>
			<Header title="Vilinha"></Header>
			<GoogleMaps 
				isMarkerShown
				location={location}
				allLocation={allLocation}
				sourcePhoto={sourcePhoto}
				photo={photo}
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3YLiVZd1yNE6wtL0s526RC-tMn5geMrY&v=3"
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `90vh` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</Fragment>
	);
}
	
export default App;
