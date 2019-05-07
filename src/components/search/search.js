import React, {useState} from 'react';
import {useDebounce} from 'use-debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = () => {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [debounceSearchTerm] = useDebounce(searchTerm, 500);

	return (
		<>
			<FontAwesomeIcon icon="stroopwafel" />
			<input onchance={ e => setSearchTerm(e.target.value)} />
		</>
	);
}

export default Search;