import React, {  useState, useEffect } from 'react';
import * as MapsAPI from './utils/foursSquareAPI';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faSearchLocation, faMapMarker, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

//Import componets
import GoogleMaps from './components/googleMaps/googleMaps';
import Header from './components/header/Header';
import AsideBar from './components/asideBar/asideBar'
import imageError from './images/Error_Image.gif';


library.add(faStroopwafel, faSearchLocation, faMapMarker, faBars, faTimes)

const App = () => {

	const [allLocation, setAllLocation] = useState([]);
	const [filteredLocation, setFilteredLocations] = useState([]);
	const [categoria, setCategoria] = useState('Arte e Lazer');
	const [categorias, setCategorias] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [defaultPosition, setDefaultPosition] = useState({ lat: -23.533773, lng: -46.625290 })
	const [markerActiveId, setMarkerActiveId] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [mapError, setMapError] = useState(false);

	const openInfoWindow = marker => {
		setMarkerActiveId(marker);
		setIsOpen(true);
		toogleMenu();
	}

	const findvenuaByCategory = (id, categoria) => {
		setIsLoading(true)
		MapsAPI.getVenue(id)
			.then(res => {
				setAllLocation(res.items)
				setCategoria(categoria)
				setIsLoading(false)
				setFilteredLocations(res.items)
			})
			.catch(err => setMapError(true));
		}
		
		//Get categories 
		useEffect( () => {
			MapsAPI.getCategories()
			.then(res => setCategorias(res.categories))
			.catch(err => setMapError(true));
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
		
		MapsAPI.getVenue('4d4b7105d754a06374d81259')
		.then(res => {
			setAllLocation(res.items)
			setCategoria(categoria)
			setFilteredLocations(res.items);
		})
		.catch(err => setMapError(true));
	}, [])
	
	return (
		<>
		{ mapError && (
			<div className="error">
				<img src={imageError} alt="erro 500" />
			</div>)
		}
		
		{!mapError && (
		
			<main className={isLoading ? 'main loading' : 'main'}>
				<AsideBar
					openInfoWindow={openInfoWindow}
					markerActive={markerActiveId}
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
						isOpen={isOpen}
						openInfoWindow={openInfoWindow}
						markerActive={markerActiveId}
						defaultPosition={defaultPosition}
						allLocation={filteredLocation}
						googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS}&v=3`}
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `90vh` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</section>
			</main>
		)} 
		
		</>
	);
}
	
export default App;
