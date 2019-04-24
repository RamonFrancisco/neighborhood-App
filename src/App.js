import React, {  useState, useEffect, Fragment } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import './App.scss';

import GoogleMaps from './components/googleMaps/googleMaps';
import Header from './components/header/Header';
import ListCategories from './components/listCategories/listCategories'

const App = () => {

	const [allLocation, setAllLocation] = useState([]);
	const [categoria, setCategoria] = useState('alimentacao');
	const [isLoading, setIsLoading] = useState(false);
	const [defaultPosition, setDefaultPosition] = useState({ lat: -23.533773, lng: -46.625290 })

	const API_KEY = process.env.REACT_APP_GOOGLE_MAPS;

	const findCategories = (id, categoria = categoria) => {
		setIsLoading(true)
		MapsAPI.getVenue(id)
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
				setIsLoading(false)
			})
	}
	console.log('lalal', process.env.REACT_APP_GOOGLE_MAPS)
	useEffect(() => {
		if (navigator.geolocation) 
			navigator.geolocation.getCurrentPosition( position => setDefaultPosition(position) )
		MapsAPI.getVenue('4d4b7105d754a06374d81259')
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
			})
	}, [])


	return (
		<Fragment>
			<main className={isLoading ? 'main loading' : 'main'}>
				<ListCategories 
					findCategories={findCategories}
					categoryName={categoria}/>
				<section className='content loading'>
					<Header title="Vilinha"></Header>
					<GoogleMaps 
						defaultPosition={defaultPosition}
						isMarkerShown
						allLocation={allLocation}
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `90vh` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</section>
			</main>
		</Fragment>
	);
}
	
export default App;
