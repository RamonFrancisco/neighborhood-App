import React, {  useState, useEffect } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import './App.scss';

//Import componets
import GoogleMaps from './components/googleMaps/googleMaps';
import Header from './components/header/Header';
import AsideBar from './components/asideBar/asideBar'

const App = () => {

	const [allLocation, setAllLocation] = useState([]);
	const [categoria, setCategoria] = useState('Arte e Lazer');
	const [categorias, setCategorias] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [defaultPosition, setDefaultPosition] = useState({ lat: -23.533773, lng: -46.625290 })

	const findCategories = (id, categoria) => {
		setIsLoading(true)
		MapsAPI.getVenue(id)
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
				setIsLoading(false)
			})
	}
	
	useEffect( () => {
		MapsAPI.getCategories()
			.then(res => setCategorias(res.categories) )
	}, [])
	
	
	useEffect(() => {
		
		//Get geolocation
		if (navigator.geolocation) 
			navigator.geolocation.getCurrentPosition( position => setDefaultPosition(position) )
		
		
		MapsAPI.getVenue('4d4b7105d754a06374d81259')
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
			})
	}, [])

	return (
		<main className={isLoading ? 'main loading' : 'main'}>
			<AsideBar 
				findCategories={findCategories}
				categoryName={categoria}
				categories={categorias} />
			<section className='content'>
				<Header title="Vilinha"></Header>
				<GoogleMaps 
					defaultPosition={defaultPosition}
					isMarkerShown
					allLocation={allLocation}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS}&v=3`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `90vh` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</section>
		</main>
	);
}
	
export default App;
