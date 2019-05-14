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

	return (
		<>
			<div className="find-venue">
				<div className="form-group">
					<input onChange={ (e) => setSearchTerm(e.target.value)} placeholder="search"/>
				</div>
				<h2 className="find-venue__title">Lugares proximos</h2>
				<div className="list-venue">
					{debounceSearchTerm && filteredLocation.map(location => <p className="list-venue__option">{location.venue.name}</p>)}
					{!debounceSearchTerm && allLocation.map(location => <p className="list-venue__option">{location.venue.name}</p>)}
					
				</div>
			</div>
		</>
	);
}

export default Search;