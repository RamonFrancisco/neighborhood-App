import React, {useState, useEffect} from 'react';
import {useDebounce} from 'use-debounce';

const Search = ({allLocation, filteredLocation, filterLocations}) => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [debounceSearchTerm] = useDebounce(searchTerm, 500);
	
	useEffect(() => {
		
		if (debounceSearchTerm) {
			filterLocations(debounceSearchTerm)
		} else {
			filterLocations('');
		}
	}, [debounceSearchTerm])
	
	const focusInfo = id => {
    	setTimeout(() => {
    		let infoWindow = document.querySelectorAll('.infoWindow');
    		// infoWindow.focus();	
    		console.log(infoWindow)
    	}, 2000)
	};

	return (
		<>
			<div className="find-venue">
				<div className="form-group">
					<input onChange={ (e) => setSearchTerm(e.target.value)} placeholder="search"/>
				</div>
				<h2 className="find-venue__title">Lugares proximos</h2>
				<div className="list-venue">
					{debounceSearchTerm && filteredLocation.map(location => <button onClick={focusInfo(location.venue.id)} key={location.venue.id} className="list-venue__option">{location.venue.name}</button>)}
					{!debounceSearchTerm && allLocation.map(location => <button onClick={focusInfo(location.venue.id)} key={location.venue.id} className="list-venue__option">{location.venue.name}</button>)}
					
				</div>
			</div>
		</>
	);
}

export default Search;