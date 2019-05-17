import React, {  useState, useEffect } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faSearchLocation, faMapMarker, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

//Import componets
import GoogleMaps from './components/googleMaps/googleMaps';
import Header from './components/header/Header';
import AsideBar from './components/asideBar/asideBar'

library.add(faStroopwafel, faSearchLocation, faMapMarker, faBars, faTimes)

const App = () => {

	const [allLocation, setAllLocation] = useState([]);
	const [filteredLocation, setFilteredLocations] = useState([]);
	const [categoria, setCategoria] = useState('Arte e Lazer');
	const [categorias, setCategorias] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [defaultPosition, setDefaultPosition] = useState({ lat: -23.533773, lng: -46.625290 })



	const findvenuaByCategory = (id, categoria) => {
		setIsLoading(true)
		MapsAPI.getVenue(id)
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
				setIsLoading(false)
			})
		}
		
		//Get categories 
		useEffect( () => {
			MapsAPI.getCategories()
			.then(res => setCategorias(res.categories) )
	}, []);
	
	const toogleMenu = () => {
		const menu = document.querySelector('.aside-bar');
		
		if(!menu.classList.contains('-active')) {
			menu.classList.add('-active');
		} else {
			menu.classList.remove('-active');
		}
	}
	
	
	const filterLocations = query => {
		let filter;
		if (!(query === '')) {
			filter = allLocation.filter(location => 
				location.venue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
		} else {
			filter = allLocation;
		}
		setFilteredLocations(filter);
	};
	
	
	useEffect(() => {
		
		//Get geolocation
		// if (navigator.geolocation) 
		// 	navigator.geolocation.getCurrentPosition( position => setDefaultPosition(position) )
		
		
		MapsAPI.getVenue('4d4b7105d754a06374d81259')
		.then(res => {
			setAllLocation(res.items)
			setCategoria(categoria)
			setFilteredLocations(res.items);
		})
	}, [])
	
	return (
		<main className={isLoading ? 'main loading' : 'main'}>
			<AsideBar 
				closeMenu={toogleMenu}
				findCategories={findvenuaByCategory}
				filterLocations={filterLocations}
				categoryName={categoria}
				categories={categorias} 
				allLocation={allLocation}
				filteredLocation={filteredLocation}/>
			<section className='content'>
				<Header title="Vilinha" activeMenu={toogleMenu} />
				<GoogleMaps 
					defaultPosition={defaultPosition}
					allLocation={filteredLocation}
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
